import { SVGProps } from '@/types/types';
import { cn } from '@/lib/utils';

const Crown = ({ className }: SVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      className={cn('h-6 w-6 fill-secondary', className)}
    >
      <path d='M247.37,89.15l-37,113.33a8,8,0,0,1-11.71,4.39c-.23-.14-25.8-14.87-70.68-14.87s-70.45,14.73-70.7,14.88a8,8,0,0,1-11.68-4.4L8.62,89.12A12.11,12.11,0,0,1,25.52,74.5l50.19,25,41.92-69.66a12.11,12.11,0,0,1,20.74,0l41.92,69.66,50.21-25a12.1,12.1,0,0,1,16.87,14.66Z'></path>
    </svg>
  );
};

export default Crown;
