import GeneratedImageDialog from '@/components/generated-image-dialog';
import Prompt from '@/components/prompt';

const CreatePostPage = () => {
  return (
    <main className='mb-20'>
      <section className='mb-10 bg-secondary/50 py-16'>
        <div className='container flex flex-col gap-4 sm:w-[600px]'>
          <h1 className='text-4xl font-extrabold text-primary sm:text-5xl'>Create</h1>
          <p className='text-xl text-muted-foreground sm:text-2xl'>
            Create imaginative and visually stunning images generated by AI and share them with the community.
          </p>
        </div>
      </section>

      <section>
        <div className='container flex flex-col items-center gap-3 sm:w-[500px]'>
          <Prompt />
          <GeneratedImageDialog />
        </div>
      </section>
    </main>
  );
};

export default CreatePostPage;