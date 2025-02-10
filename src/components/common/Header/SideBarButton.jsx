import React from 'react'
import {IoReorderThreeOutline } from "react-icons/io5";
import SideBar from './SideBar/SideBar';
const SideBarButton = ({isDarkMode , images , sidebar , openSideMenu , closeSidebar, toggleDarkMode , navList}) => {
  return (
    <div className='flex justify-end  w-[135px] h-[50px] max-md:w-[100px] max-md:h-[30px] max-md:relative max-md:gap-[10px] max-lg:gap-[20px]'>
      <img src={images.logo} alt='logo'/> 
      {sidebar ? (    
  <div className='relative'>
    <div className='fixed w-screen h-screen top-0 left-0 bg-white z-[999999] flex  lg:hidden'>
          <SideBar 
               HandleClose={closeSidebar} 
               toggleDarkMode={toggleDarkMode} 
               isDarkMode={isDarkMode} 
               navList={navList}
               />
       </div>
  </div>
  ) : (
     <div className='lg:hidden max-lg:flex' >
            <IoReorderThreeOutline className='max-md:text-[32px] max-lg:text-[50px] relative' onClick={openSideMenu}  />
     </div>
  )}
    </div>
  )
}

export default SideBarButton