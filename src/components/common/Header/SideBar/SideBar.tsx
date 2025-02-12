import { ReactNode } from 'react';
import SideBarHeader from './SideBarHeader';
import { SideBarProps } from './type';
import SideBarContent from './SideBarContent';

const SideBar : React.FC<SideBarProps>  = ({
  HandleClose , 
  toggleDarkMode , 
  isDarkMode , 
  navList ,
  images
}) => {
  return (
    <div className="h-screen w-full dark:bg-gray-800 ">    
         <SideBarHeader 
           HandleClose={HandleClose}
           toggleDarkMode={toggleDarkMode}
           isDarkMode={isDarkMode}
           images={images}
         />
        <div dir='rtl'>
           <SideBarContent 
             navList={navList}/>
                <div className='bg-footerbg bg-cover h-[340px] bg-center'>
                </div>
             </div>
         </div>
  )
}

export default SideBar