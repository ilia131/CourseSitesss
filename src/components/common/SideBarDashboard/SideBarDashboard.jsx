import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { useState , useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import images from '../../../assets/dashboardpng'
import {getProfile} from '../../../core/services/api/user'
import { getItem, removeItem } from '../../../core/services/common/storage.services';
const SideBarDashboard = () => {
   const navigate = useNavigate()
  
  const [image , setImage ] = useState([])
  const [usrs , setUsrs] = useState([])
  const getProfile1 = async () => {
    const data = await getProfile()
    setImage(data?.currentPictureAddress)
    setUsrs(data)
  }

  const logout =  () => {
    removeItem('token')
    navigate('/')
  }

  useEffect(()=> {
     getProfile1()
  },[])
  return (
     <div  className='w-[308px] h-[813px] bg-[#01CEC9] rounded-[0px_15px_15px_0px]'>
         <div className='pt-[47px] grid justify-center justify-items-center pr-[92px] pl-[91px]'>
          <div className='rounded-full w-[125px] h-[125px]
             flex justify-center items-center'>
            <img  alt='teacher' src={image?  image :images.profilepic} className='w-full h-full rounded-full'
            />
          </div>  
          <div className=' h-[28px] font-primaryMedium text-[20px] mt-[21px] cursor-pointer text-[#003B39]'>
             <p >{usrs?.fName} {usrs?.lName} خوش آمدین</p>
          </div>
           <div className='w-[258px] mt-[27px]'>
              <img src={images.line19} />
           </div>
         </div>
         <div className='w-[283px] h-[377px] grid gap-[28px] font-primaryMedium font-[400] text-[20px] text-[#003B39]
          pr-[76px] text-right mt-[29px]
         '>
            <NavLink to={'/user'} className='relative'>
            {({isActive}) => (
              <div className=''>
              <div className='z-[99999] relative  flex justify-center left-[100px]
              gap-[29px] 
              '>
               <span className={isActive ? " relative" : "right-[27px] relative"}>داشبورد</span> 
               
               <img src={images.frame94} width={25} height={25}
               className={isActive ? "right-[4px] relative" : "hidden"}
               />
              </div>
               <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                   <img src={images.rec104} 
                   className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
            </NavLink>
            <NavLink  to={'/userprofile'} className='relative'
            >
                {({isActive}) => (
                <div>
                  <div className='z-[99999] relative items-center flex justify-center left-[77px]
                     gap-[29px] 
                '>
                 <span className={isActive ? "relative" : "right-[27px] relative"}>اطلاعات کاربری</span> 
                
                 <img src={images.frame11} width={25} height={25}
                 className={isActive ? "right-[4px] relative" : "hidden"}
               />
               </div>
                <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                    <img src={images.rec104} 
                     className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
              
            </NavLink>
            <NavLink  to={'/mycourse'} className='relative'>
            {({isActive}) => (
                <div>
                  <div className='z-[99999] relative  flex justify-center left-[82px]
                     gap-[29px] items-center
                '>
               <span className={isActive ? "relative" : "right-[25px] relative"}>دوره های من</span> 
               
               <img src={images.book} width={21} height={21}
                 className={isActive ? "right-[4px] relative" : "hidden"}
               />
               </div>
                <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                    <img src={images.rec104} 
                     className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
            </NavLink>
            <NavLink  to={'/myreservecourse'} className='relative' >
             {({isActive}) => (
                <div>
                  <div className='z-[99999] relative  flex justify-center left-[56.8px]
                     gap-[29px] items-center
                '>
               <span className={isActive ? " relative" : "right-[22.55px] relative"}>
                          دوره های رزرو شده
               </span> 
               
               <img src={images.group1} width={16} height={20}
                 className={isActive ? "right-[4px] relative" : "hidden"}
               />
               </div>
                <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                    <img src={images.rec104} 
                     className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
            </NavLink>
            <NavLink to={'/feedback'} className='relative' >
            {({isActive}) => (
                <div>
                  <div className='z-[99999] relative  flex justify-center left-[76px]
                     gap-[29px] items-center
                '>
               <span className={isActive ? "relative" : "right-[27px] relative"}>
                        دیدگاه های من
               </span> 
               
               <img src={images.frame12} width={25} height={25}
                 className={isActive ? "right-[4px] relative" : "hidden"}
               />
               </div>
                <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                    <img src={images.rec104} 
                     className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
            
            </NavLink>
            <NavLink to={'/myfavorite'} className='relative' >
            {({isActive}) => (
                <div>
                  <div className='z-[99999] relative  flex justify-center left-[77px]
                     gap-[29px] items-center
                '>
               <span className={isActive ? "relative" : "right-[25px] relative"}>
                      علاقه مندی ها
               </span> 
               
               <img src={images.fav2} width={21} height={21}
                 className={isActive ? "right-[4px] relative" : "hidden"}
               />
               </div>
                <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                    <img src={images.rec104} 
                     className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
            
            </NavLink>
            <NavLink to={'/securitysetting'} className='relative' >
            {({isActive}) => (
                <div>
                  <div className='z-[99999] relative  flex justify-center left-[73.4px]
                     gap-[29px] items-center
                '>
               <span className={isActive ? "relative" : "right-[25.5px] relative"}>
                     تنظیمات امنیتی
                </span> 
               
               <img src={images.security} width={22} height={22}
                 className={isActive ? "right-[4px] relative" : "hidden"}
               />
               </div>
                <div className='w-[283px] h-[43px] absolute bottom-[-6px] right-[-74px]'>
                    <img src={images.rec104} 
                     className={isActive ? "" : "hidden"}/>
               </div>
             </div>
            )}
            </NavLink>
         </div>
         <div className='flex justify-center mt-[93px] cursor-pointer'>
            <p className='text-[17px] font-primaryMedium font-[700] text-[#003B39]'
            onClick={logout}
            >خروج از حساب </p>  
            <div className='w-[24px] h-[24px]'>
              <img src={images.frame19} />
            </div>
         </div>
    </div>
  )
}

export default SideBarDashboard