import { NavLink, useNavigate } from "react-router-dom"
import images from '../../../../assets/dashboardpng'
import { useDarkMode } from '../../../../config/DarkModeContext';
import { LuSunMedium } from "react-icons/lu";
import { RiMoonFill } from "react-icons/ri";
import { IoCloseCircle } from 'react-icons/io5'


const SideBarDash = ({HandleClose}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  return (
    <div className='fixed h-screen w-[40px]  bottom-0 top-0 right-0 bg-[#01CEC9] 
       z-[8888] xl:hidden
       shadow-[0px_1px_10px_0px_#00000040]
    ' >
             <NavLink to={'/user'} className=''>
            {({isActive}) => (
            
              <div className={`mt-[100px] flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`} >
                  <img src={images.frame94} width={25} height={25} 
                      
                     />
              </div>
            )}
            </NavLink>
            <NavLink  to={'/userprofile'} className=''
            >
                {({isActive}) => (
                <div className={`mt-[20px]  flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`}>
              
                
                 <img src={images.frame11} width={25} height={25}
                
               />
               
           
             </div>
            )}
              
            </NavLink>
          <NavLink  to={'/mycourse'} className=''>
            {({isActive}) => (
                
                  <div className={`mt-[20px]  flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`}
                  >
               
               <img src={images.book} width={21} height={21}
               />
               </div>
                
         
            )}
            </NavLink>
           <NavLink  to={'/myreservecourse'} className='' >
             {({isActive}) => (
               
              <div className={`mt-[20px]  flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`} >
               <img src={images.group1} width={16} height={20}
               />
               </div>

            )}
            </NavLink> 
             <NavLink to={'/feedback'} className='' >
            {({isActive}) => (
              
                  <div 
                  className={`mt-[20px] flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`} >
             
               
               <img src={images.frame12} width={25} height={25}
               />
               </div>
               
         
            )}
            
            </NavLink>
          <NavLink to={'/myfavorite'} className='' >
            {({isActive}) => (
              
                  <div className={`mt-[20px] flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`}
                  >
            
               
               <img src={images.fav2} width={21} height={21}
               />
               </div>
             
         
            )}
            
            </NavLink>
            <NavLink to={'/securitysetting'} className='relative' >
            {({isActive}) => (
                
                  <div className={`mt-[20px] flex justify-center ${isActive? 'w-[40px] bg-white' : ''}`}>
               
               
               <img src={images.security} width={22} height={22}
               />
               </div>
               
         
            )}
            </NavLink> 
            <div className=' mt-[20px] flex justify-center'
                         onClick={toggleDarkMode}
                      >
                      {isDarkMode? 
                        <LuSunMedium className='text-[25px] text-[#003B39]' />  : 
                        <RiMoonFill className='text-[25px] text-[#003B39]' />}

                        
              </div>
              <div className="flex justify-center mt-[100px]">
                <IoCloseCircle className='text-[25px]  text-[#003B39]' onClick={HandleClose} />
              </div>
    </div>                           

  )
}

export default SideBarDash