import { useEffect, useState } from 'react';
import classNames from "classnames"
import images from '../../../assets/landingpng'
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import SideBar from './SideBar/SideBar';
import { useDarkMode } from '../../../config/DarkModeContext.jsx';
import { LuSunMedium } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { getItem } from '../../../core/services/common/storage.services.js';
import { useBgColor } from '../../BgChangeAdmin/BgColorContext.jsx';
import { getReserveCourse } from '../../../core/services/api/course.js';
const Header = () => {
 
const { bgColor , setBgColor} = useBgColor();


const getComplementaryColor = (hexColor) => {
  const color = hexColor.replace("#", "");
  
  const r = 255 - parseInt(color.substring(0, 2), 16);
  const g = 255 - parseInt(color.substring(2, 4), 16);
  const b = 255 - parseInt(color.substring(4, 10), 16);

  return `rgb(${r}, ${g}, ${b})`;
};






const textColor = getComplementaryColor(bgColor);


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


const [openModal , setOpenModal] = useState(false)
const HandleOpen = () => {
  setOpenModal(true)
}

const userId = getItem('courseId')



const [data3, setData3] = useState([])
const getReserve = async () => {
  const data = await getReserveCourse(userId)
  setData3(data)
  
}

useEffect(() => {
  getReserve()
},[])

const token = getItem("token")


const HandleNavigate = () => {
  nagivate('/login')
}
const HandleNavigate1 = () => {
  nagivate('/user')
}

 const HandleClose = () => {
    setSideBar(false)
 }

  return (

    <header className={`h-[120px] w-full flex justify-center dark:bg-gray-800 text-nowrap
       `} 
       style={{ backgroundColor: bgColor || "#f7f7f7" }}

    >
      {openModal && (
        <>
         
          <div 
              className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-[22221]" 
         />
        <div className='fixed w-[400px] h-[400px] bg-[#cccccc] z-[4555999] top-[150px]
        rounded-[10px] shadow-inner
        '>
            <div className='flex px-[10px] justify-between text-white mt-[10px] pt-[4px]'>
                        <IoClose 
                        onClick={()=> setOpenModal(false)}
                        />
                        <p className='font-primaryMedium text-black mb-[3px] '>کورس های رزرو شده</p>

                   </div>

          <div className='w-[400px] h-[380px] bg-white  rounded-[10px] overflow'>
            {data3.map((item , index) => (
             <div className='w-[400px] h-[60px] bg-green-400 ' >
                 {item.courseName}
             </div>
            ))}
          </div>
        </div>
        </>
      )}

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
                   {token? (        
                  
                     <button className='bg-[#01CEC9] flex w-[145px] 
                                         h-[44px] box-content font-primaryRegular  
                                         items-center justify-center rounded-[26px]
                                         text-white max-md:relative max-md:bottom-[7px]
                                         max-md:h-[38px] max-md:w-[140px]'
                             onClick={HandleNavigate1}             
                            >
                             
                              <img 
                                  src={images.profile} 
                                  width={25} 
                                  height={25} 
                                  className='mb-[3px] '  /> 
                             
                              <p className='w-[90px] h-[23px]
                                            mt-[5px] mb-[10px] 
                                            flex items-center 
                                            justify-center
                                            max-md:font-primaryMedium '
                                            
                              >حساب کاربری</p>
                        </button>
                    ) : (
   
               <button className='bg-[#01CEC9] flex w-[145px] 
                      h-[44px] box-content font-primaryRegular  
                      items-center justify-center rounded-[26px]
                      text-white max-md:relative max-md:bottom-[7px]
                      max-md:h-[38px] max-md:w-[140px]'
          onClick={HandleNavigate}             
         >
          
           <img 
               src={images.profile} 
               width={25} 
               height={25} 
               className='mb-[3px] '  /> 
          
           <p className='w-[90px] h-[23px]
                         mt-[5px] mb-[10px] 
                         flex items-center 
                         justify-center
                         max-md:font-primaryMedium '
                         
           >ورود | ثبت نام</p>
                      </button>

                    )}
                     <div className='flex items-center gap-[13px] h-[50px]'>
                          <div className='w-[32px] h-[32px] mb-[15px] 
                                          mt-[7px]  flex justify-end   max-md:hidden'>
                          <img 
                               src={images.shopbag} 
                               width={32} 
                               height={32} 
                               className='w-[32px]'
                               onClick={HandleOpen}
                          /> 
                          <span className='absolute text-[13px] flex 
                                           items-center justify-center
                                          text-white pb-[0.7px] w-[14px] 
                                          h-[14px] rounded-full bg-[#E48900] 
                                          font-primaryMedium left-[181px] top-[24px] 
                                          pl-[0.5px]
                                          
                                          '>۲</span> 
                     </div> 
                      <div className='w-[30px] h-[30px] mb-[11px] mt-[3px]   max-md:hidden '
                         onClick={toggleDarkMode}
                      >
                      {isDarkMode? 
                        <LuSunMedium className='text-[30px] text-white' 
                        style={{color: bgColor === "" ? '#555555': textColor
                        }}
                        />  : 
                        <RiMoonFill className='text-[30px] text-[#cccccc]' 
                        style={{color: bgColor === "" ? '#cccccc': textColor
                        }}
                        />}

                        
                      </div>
                  </div>

                </div>
                <ul className='h-[46.8px] w-[466] text-[#555555]  
                               flex gap-[33px] text-[17px] font-bold 
                               font-primaryRegular xl:mr-[82px] pt-[7px]
                               max-md:hidden max-lg:hidden
                               lg:mr-[57px]
                               dark:text-[#f7f7f7]
                               '
                    style={{justifyContent:'right' ,
                     color: bgColor === "" ? '#555555': textColor
                      }}
                   >
                   <NavLink className='cursor-pointer  flex ml-[10px]  '
                       style={{marginRight:'-1px'}}
                    >تماس با ما</NavLink>
                   <NavLink 
                    className={({ isActive }) =>
                      `cursor-pointer text-center relative ${isActive ? 'active-nav' : ''}` 
                 }
                   to={'/News'}
                   
                   >اخبار و مقالات</NavLink>
                   <NavLink className='cursor-pointer  text-center '>اساتید</NavLink>
                   <NavLink    className={({ isActive }) =>
                                `cursor-pointer text-center relative ${isActive ? 'active-nav' : ''}` 
                           }
                   to={'/courses'}
                   >دوره ها</NavLink>
                   <NavLink 
                   to={'/'}
                     className={({ isActive }) =>
                    `cursor-pointer text-center relative ${isActive ? 'active-nav' : ''}` 
               }
                   
                   
                   >صفحه نخست</NavLink>
                </ul>  
                <div className='flex justify-end 
                                w-[135px] h-[50px] 
                                max-md:w-[100px] 
                                max-md:h-[30px]
                                max-md:relative 
                                max-md:gap-[10px]
                                max-lg:gap-[20px]
                                '>
                   <img 
                       src={images.logo} 
                     
                    /> 
                     {sidebar? (    
                      <div className='relative'>
                        <div className='fixed w-screen h-screen top-0 left-0 bg-white z-[999999] flex 
                          lg:hidden
                         '>
                              <SideBar HandleClose={HandleClose} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}  />
                           </div>
                      </div>
                        ) : (
                         <div className='lg:hidden max-lg:flex' >
                                <IoReorderThreeOutline className='max-md:text-[32px]
                                 max-lg:text-[50px]
                                relative' onClick={OpenSideMenu}  />
                         </div>
                        )}
                </div>
          </div>
    </header>
  )
}

export default Header