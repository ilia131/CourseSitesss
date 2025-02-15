import clsx from 'clsx';

export const formStyle = clsx(
  'w-[558px] h-[64.81px]  mt-[27px] mr-[55px] ',
  'shadow-lg pl-[6.3px] rounded-[35px]',
  'py-[7.2px] flex items-center justify-between',
  'backdrop-blur-md',

);

export const inputStyle = clsx(
  'font-primaryRegular text-right placeholder:text-[18px]',
  'w-[159px] h-[21.25px] mr-[39.27px] border-none',
  'outline-none max-sm:placeholder:text-[15px]',
  'dark:placeholder:dark:text-[#f7f7f7] bg-transparent smx:text-[18px]'
);

export const inputdivStyle = clsx(
  'w-[48.57px] h-[49.94px] bg-[#D47300]',
  'rounded-full flex justify-center items-center',
  'max-sm:h-[37px] max-sm:w-[37px]',
  'smx:h-[49.94px] smx:w-[48.57px]'
);
