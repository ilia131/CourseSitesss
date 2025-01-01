import  {Fragment, useState}  from 'react'
import images from '../../assets/Login'
import LoginStep1 from '../../components/LoginHolding/LoginStep1'
import LoginStep2 from '../../components/LoginHolding/LoginStep2'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useBgColor } from "../../components/BgChangeAdmin/BgColorContext";
import { NavLink } from 'react-router-dom'

const Login = () => {
  const { bgColor , setBgColor} = useBgColor();

 const [loginconfirm , setLoginConfirm] = useState(false)
 const HandleLoginConfirm = () => {
   setLoginConfirm(true)
 }

 const HandleLoginConfirm1 = () => {
   setLoginConfirm(false)
 }
 

 const getComplementaryColor = (hexColor) => {
  const color = hexColor.replace("#", "");
  
  const r = 255 - parseInt(color.substring(0, 2), 16);
  const g = 255 - parseInt(color.substring(2, 4), 16);
  const b = 255 - parseInt(color.substring(4, 10), 16);

  return `rgb(${r}, ${g}, ${b})`;
};






const textColor = getComplementaryColor(bgColor);


  return (
    <Fragment >
          <ToastContainer  />
     <div className='w-full h-screen relative dark:bg-gray-800'
     style={{backgroundColor:bgColor}}
     >
     <div className='w-[952px] h-[631px] pt-[50px]  mb-[166px] ml-[285px] mr-[203px]
     flex'>
       <div className='
       w-[869px] h-[631px]  relative
       '   
       >
        <div className='w-[869px] h-[631px] flex justify-center items-center'
          style={{backgroundImage: `url(${images.bglogin})`,
           backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                            backgroundSize: 'auto '
         }}
        >
        {loginconfirm? (  <LoginStep2 />) : (
          <LoginStep1 HandleLoginConfirm={HandleLoginConfirm} />
        )}             
                         
           </div>
           {loginconfirm? (
            
            
            <div className='absolute flex items-center gap-[9px] bottom-[28px] left-[39px] cursor-pointer'
            onClick={HandleLoginConfirm1}
            >
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M9.84375 12.1875L5.15625 7.5L9.84375 2.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             </div>  
              <p className='font-primaryRegular mb-[3px] text-[20px]'>مرحله قبل</p>   
           </div>
           
        ) : (
           <div className='absolute flex items-center gap-[9px] bottom-[28px] left-[39px] cursor-pointer'>
           
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
           <path d="M9.84375 12.1875L5.15625 7.5L9.84375 2.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
          </div>  
           <NavLink className='font-primaryRegular mb-[3px] text-[20px]'
           to={'/'}
           style={{justifyContent:'right' ,
            color: bgColor === "" ? '#555555': textColor
             }}>صفحه اصلی</NavLink>    
        </div>
        )}    
         </div>
         <div className='font-primaryMedium font-[700] text-[24px] text-[#006865] mt-[102px] ml-[12px]'>
         <NavLink
         className='cursor-pointer'
         to={'/register'}
         >ثبت نام</NavLink>
         <p className='mt-[68px]'>ورود</p>
       </div>
       </div>
    </div>
  </Fragment>
  )
}

export default Login