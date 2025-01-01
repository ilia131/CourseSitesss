
import { useState } from 'react';
import images from '../../../assets/landingpng'
import { IoReorderThreeOutline } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../../config/DarkModeContext';
import SideBarDash from './SideBarDashboard/SideBarDash';

const HeaderDashboard = () => {
 
const navigate = useNavigate()
   
const { isDarkMode, toggleDarkMode } = useDarkMode()
 

const [sidebar ,setSideBar] = useState(false)
const nagivate = useNavigate()
  const OpenSideMenu = () => {
   if(!sidebar) {
    setSideBar(true)
  } else {
    setSideBar(false)
  }
} 



 const HandleClose = () => {
    setSideBar(false)
 }

  return (
    <header className='h-[120px] w-full flex justify-center dark:bg-gray-800'>
      
          <div className='xl:w-[1247px] h-[50px]   
                          lg:w-[1000px]
                          smx:w-full
                          max-sm:w-full
                          flex justify-between  mt-[58px] 
                          max-h-full box-content max-md:px-[10px] max-md:mt-[20px] max-lg:px-[60px]
                          duration-700
                          '>
               <div className='flex gap-[14px] box-border 
                               top-[3px] relative'>
                          
                    <button className='bg-[#01CEC9] flex w-[47px] 
                                       h-[47px] box-content font-primaryRegular  
                                       items-center justify-center rounded-[26px]
                                       text-white max-md:relative max-md:bottom-[7px]
                                       max-md:h-[40px] max-md:w-[40px] '
                          >    
                            <img 
                                src={images.profile} 
                                width={25} 
                                height={25} 
                                className='mb-[3px] '  /> 
                      </button>
                     <div className='flex items-center gap-[13px] h-[50px]'>
                          <div className='w-[32px] h-[32px] mb-[15px] 
                                          mt-[7px]  flex justify-end   max-md:hidden'>
                          <img 
                               src={images.shopbag} 
                               width={32} 
                               height={32} 
                               className='w-[32px]'
                          /> 
                          <span className='absolute text-[13px] flex 
                                           items-center justify-center
                                          text-white pb-[0.7px] w-[14px] 
                                          h-[14px] rounded-full bg-[#E48900] 
                                          font-primaryMedium left-[80px] top-[24px] 
                                          pl-[0.5px]
                                          
                                          '>۲</span> 
                     </div> 
                      <div className='w-[30px] h-[30px] mb-[11px] mt-[3px]   max-md:hidden '
                         onClick={toggleDarkMode}
                      >
                      {isDarkMode? 
                        <LuSunMedium className='text-[30px] text-white' />  : 
                        <RiMoonFill className='text-[30px] text-[#cccccc]' />}

                        
                      </div>
                  </div>

                </div>
             
                <div className={`flex justify-end 
                                w-[135px] h-[50px] 
                                max-md:w-[100px] 
                                max-md:h-[30px]
                                max-md:relative 
                                max-md:gap-[10px]
                                max-lg:gap-[20px]
                                ${sidebar? 'max-md:mr-[42px] max-lg:mr-[70px] max-xl:mr-[70px]': ''}
                `}>
                   <img 
                       src={images.logo} 
                       className='cursor-pointer'
                       onClick={()=>nagivate('/')}
                    /> 
                      {sidebar? (    
                  
                       
                           <SideBarDash HandleClose={HandleClose} 
                           />
                  
                        ) : (
                         <div className='lxl:hidden max-xl:flex' >
                                <IoReorderThreeOutline className='max-md:text-[32px]
                                 max-lg:text-[50px] max-xl:text-[60px]
                                 max-lg:mt-0
                                 max-md:mt-0
                                 max-xl:mt-[-4px]
                                 max-lg:ml-0
                                 max-xl:ml-[10px]
                                 xl:hidden
                                 relative' onClick={OpenSideMenu}  />
                         </div>
                        )}
                </div>
          </div>
    </header>
  )
}

export default HeaderDashboard