// SideBarContent.tsx
import { FC } from 'react';
import { SideBarContentProps } from './type';

const SideBarContent: FC<SideBarContentProps> = ({ navList }) => {
  return (
    <div>
      <ul className="text-[#555555] px-6 mt-[50px] grid text-[17px] font-bold font-primaryRegular gap-5 dark:text-[#f7f7f7]">
        {navList}
      </ul>
    </div>
  );
};

export default SideBarContent;
