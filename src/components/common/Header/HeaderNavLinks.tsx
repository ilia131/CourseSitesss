import { ReactNode } from 'react';

interface HeaderNavLinksProps {
  navList: ReactNode; 
}

const HeaderNavLinks: React.FC<HeaderNavLinksProps> = ({ navList }) => {
  return (
    <ul className='h-[46.8px] w-[466px] text-[#555555] flex gap-[33px] text-[17px] font-bold font-primaryRegular xl:mr-[82px] pt-[7px] max-md:hidden max-lg:hidden lg:mr-[57px] dark:text-[#f7f7f7]'>
      {navList}
    </ul>
  );
};

export default HeaderNavLinks;
