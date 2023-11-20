import Image from 'next/image';

import '@/types/types';

import { getPosts } from '@/actions/get-posts';

import { cn } from '@/lib/utils';

export default async function CommunityPage() {
  const posts = await getPosts();
  if (!posts) return <div>Error fetching posts</div>;

  // const postsToDuplicate = posts.map(post => {
  //   // Clone the post object
  //   const postCopy = { ...post };
  //   // Remove the '_id' field to allow MongoDB to generate a new one
  //   delete postCopy._id;
  //   // Alternatively, you could assign a new _id manually if needed
  //   // postCopy._id = new ObjectId();
  //   return postCopy;
  // });
  //
  // // Insert the duplicated posts into the database
  // await postCollection.insertMany(postsToDuplicate);

  return (
    <main className='mb-20 flex flex-col gap-8'>
      <section className='bg-secondary/50 pb-24 pt-16'>
        <div className='container'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-center text-4xl font-extrabold text-primary md:text-left md:text-6xl'>
              Stunning Images with AI
            </h1>
            <p className='text-center text-xl font-light text-muted-foreground md:text-left md:text-3xl'>
              Browse through a collection of imaginative and visually stunning images generated by AI
            </p>
          </div>
        </div>
      </section>

      {/*<div className='container flex -translate-y-12 items-center justify-center'>*/}
      {/*<div className='mb-10 flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg bg-white px-5 shadow-xl md:w-[500px]'>*/}
      {/*  <SearchInput />*/}
      {/*</div>*/}
      {/*</div>*/}

      <section className='container'>
        <div className='group  grid grid-flow-row-dense grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
          {posts.map(({ _id, name, prompt, image }, index) => (
            <button
              key={_id}
              className={cn('group/item relative aspect-square w-full', {
                'sm:col-span-2 sm:row-span-2': index % 6 === 0,
              })}
            >
              <Image
                priority
                placeholder='blur'
                blurDataURL={rgbDataURL(230, 230, 230)}
                src={image}
                alt='image'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='z-40 rounded-lg object-cover shadow-lg'
              />

              <div
                className={cn(
                  `absolute bottom-5 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-lg rounded-b-lg 
                  bg-gradient-to-r from-secondary-foreground/90 to-primary/90 p-5 text-white opacity-0 
                  transition-all group-hover/item:sm:opacity-100`
                )}
              >
                <p className='text-md line-clamp-2 font-semibold tracking-wide'>{prompt}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;