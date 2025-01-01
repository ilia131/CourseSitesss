import { Field, Formik , Form } from 'formik'
import images from '../../assets/Register'
import { useState } from 'react';
import { registerLevel1 } from "../../core/services/api/register"
import { registerLevel3 } from '../../core/services/api/register';
import { useBgColor } from '../../components/BgChangeAdmin/BgColorContext.jsx';
import RegisterStep2 from '../../components/Registerholding/RegisterStep2.jsx';
import RegisterStep1 from '../../components/Registerholding/RegisterStep1.jsx';
import RegisterStep3 from '../../components/Registerholding/RegisterStep3.jsx';
import { NavLink } from 'react-router-dom';
const Register = () => {
  const { bgColor , setBgColor} = useBgColor();
  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  
  
  
  
  
  const textColor = getComplementaryColor(bgColor);

 const [isConfirm , setIsConfirm] = useState(false)
 const [account , setAccount] = useState(false)   

 const [vle , setVle] = useState([])
 const HandleConfirm = () => {
    setIsConfirm(true)
 }
 
 const HandleAccount1 = () => {
  setAccount(true)
 }
 
 const HandleClick = ()=> {
   setAccount(false)
 }

 const HandleClick1 = () => {
   setIsConfirm(false)
 }
 const HandleSubmit1 = (values) => {
  setVle(values)
  HandleConfirm()
  registerLevel1(values)
  };

 return (
    <div className='w-full h-screen relative ' 
    style={{backgroundColor:bgColor}}

    >
     <div className='w-[952px] h-[631px]  pt-[80px] mb-[166px] ml-[285px] mr-[203px]
     flex'>
       <div className='
       w-[869px] h-[631px]  relative
       '   
       >
        <div className='w-[869px] h-[631px] flex justify-center items-center'
          style={{backgroundImage: `url(${images.bgregister})`,
           backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                            backgroundSize: 'auto'
         }}
        >
                     
                     {isConfirm? 
                     ( account? ( <RegisterStep3 vle={vle} />) : (<RegisterStep2 HandleAccount1={HandleAccount1} vle={vle} />))  
                     :   ( <RegisterStep1 HandleConfirm={HandleConfirm}
                           HandleSubmit1={HandleSubmit1} 
                     />) }
          
                 
           </div>
          {isConfirm? (
            
              account? (  
              <div className='absolute flex items-center gap-[9px] bottom-[28px] left-[39px] cursor-pointer'
              onClick={HandleClick}
              >
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M9.84375 12.1875L5.15625 7.5L9.84375 2.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </div>  
                <p className='font-primaryRegular mb-[3px] text-[20px]'>مرحله قبل</p>   
             </div>) : (
                <div className='absolute flex items-center gap-[9px] bottom-[28px] left-[39px] cursor-pointer'
                onClick={HandleClick1}
                >
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M9.84375 12.1875L5.15625 7.5L9.84375 2.8125" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
               </div>  
                <p className='font-primaryRegular mb-[3px] text-[20px]'>مرحله قبل</p>   
             </div>)
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
               }}
             >صفحه اصلی</NavLink>    
          </div>
          )}    
          
         </div>
         <div className='font-primaryMedium font-[700] text-[24px] text-[#006865] mt-[102px] ml-[12px]'>
         <p>ثبت نام</p>
     <div className='mt-[68px]'>
         <NavLink className='mt-[68px] cursor-pointer'
         to={'/login'}
         >ورود</NavLink>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Register