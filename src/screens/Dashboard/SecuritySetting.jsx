import { useState } from "react";
import {Formik , Form , Field , ErrorMessage} from 'formik'

import * as Yup from 'yup';






const SecuritySetting = () => {
  

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const handleSubmit = (values) => {
    console.log('Form data:', values);
  };
  const PasswordChangeSchema = Yup.object().shape({
    currentPassword: Yup.string()
    .required('رمزعبور فعلی الزامی است'),
  newPassword: Yup.string()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .required('رمزعبور جدید الزامی است'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'رمزعبور باید با تکرار آن مطابقت داشته باشد')
    .required('تکرار رمزعبور الزامی است')
  });
  

  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="xl:w-[856px] xl:h-[527px]  mt-[16px]
    max-smx3:dark:bg-gray-800 max-smx3:w-screen max-smx3:px-[10px]
    max-md:dark:bg-gray-800 max-md:w-screen max-md:px-[30px]
     max-lg:dark:bg-gray-800 max-lg:w-screen max-lg:px-[100px]
     max-xl:dark:bg-gray-800 max-xl:w-screen max-xl:px-[200px]
     
    ">
      <div className="xl:w-[856px] h-[50px]  flex xl:pl-[371px]  justify-between xl:pr-[30px]
      max-smx3:gap-[20px]  max-smx3:grid max-smx3:justify-center max-smx3:justify-items-center
      max-md:gap-[30px]
      " >                
          <p className="font-primaryMedium text-[20px] text-[#9D9D9D] mt-[16px] font-[400]">تنظیمات امنیتی</p>

       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className="w-[50px] h-[50px]
       dark:fill-gray-800
       max-md:mt-[5px] 
       
       ">
                <rect width="50" height="50" rx="10" fill="#F7F7F7"/>
                <path d="M24.997 8C19.9312 8 16.6466 11.3313 12.762 12.5456C11.1826 13.0393 10.3928 13.2862 10.0732 13.6342C9.75357 13.9822 9.65998 14.4907 9.4728 15.5077C7.46978 26.3909 11.8478 36.4526 22.2889 40.3689C23.4108 40.7896 23.9716 41 25.0025 41C26.0333 41 26.5943 40.7896 27.7159 40.3689C38.1564 36.4524 42.5303 26.3909 40.5267 15.5077C40.3394 14.4905 40.2458 13.9819 39.9261 13.6339C39.6065 13.2859 38.8167 13.0392 37.2373 12.5457C33.3511 11.3316 30.0629 8 24.997 8Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1488 22C20.2977 22 19.3722 23.2479 19.1665 24.0159C18.9608 24.7838 18.9608 27.5677 19.0842 28.7196C19.4956 30.1596 20.524 30.7547 21.5318 30.9467C22.4573 31.0235 26.3651 30.9947 27.4964 30.9947C29.1418 31.0235 30.3759 30.4475 30.8901 28.7196C30.9929 28.1437 31.0957 24.9758 30.8386 24.0159C30.2936 22.48 28.9361 22 27.9077 22H22.1488Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round"/>
                <path d="M21 22C21 21.8783 21.0187 21.1778 21.0218 20.2965C21.0248 19.4911 20.9454 18.7146 21.3768 18.004C22.9932 15.1372 27.6348 15.4292 28.7816 18.3496C28.9802 18.8304 28.9923 19.5926 28.9863 20.2965C28.9788 21.1959 29 22 29 22" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round"/>
                </svg>      
      </div>
     <div className="xl:w-[787px] h-[197px]  xl:ml-[34px] xl:mr-[35px] mt-[37px]
      max-smx3:mt-[100px]
     ">
      <button
      className="w-full max-smx3:gap-[180px] 
      max-md:gap-[180px]
      text-left py-4 h-[29px]  flex justify-between items-center focus:outline-none"
      onClick={() => toggleAccordion(0)}
      >
    {openIndex === 0 ? (
      <svg  
        className={`h-[15px] w-[15px] rotate-0 transform transition-transform duration-300 `}
        xmlns="http://www.w3.org/2000/svg" 
        width="15" height="15" 
        viewBox="0 0 15 15" 
        fill="none"
        >
        <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ) : (
        <svg  
        className={`h-[15px] w-[15px] rotate-180 transform transition-transform duration-300 `}
        xmlns="http://www.w3.org/2000/svg" 
        width="15" height="15" 
        viewBox="0 0 15 15" 
        fill="none"
        >
        <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      )
      
    }
      <span className="font-[400] text-[#9D9D9D] font-primaryMedium text-[16px]">تغییر رمز عبور</span>
      </button>
    <div
      className={`accordion-content ${
        openIndex === 0  ? "block " : "hidden"
      } p-4 text-gray-700 transition-all duration-300`}
    >
     <div className="w-full ">
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }}
        validationSchema={PasswordChangeSchema}
        onSubmit={(values) => {
          console.log('Form Data', values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid mt-[9px] justify-center justify-items-center">
          <div className="flex gap-[22px] justify-center
          max-smx3:grid
          max-md:grid
          "
          style={{direction:'rtl'}}
          >
            <div className="">
              <label htmlFor="currentPassword" className="block font-primaryMedium text-[13px] text-[#979797] mr-[13px]">رمزعبور فعلی</label>
              <Field
                type="password"
                name="currentPassword"
                className="w-[220px] h-[39px] border-none outline-none shadow-[0px_1px_3px_0px_#00000033_inset]
                rounded-[5px] bg-transparent
                "
              />
              <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800">
              <ErrorMessage name="currentPassword" component="div" 
              className="text-red-500 font-primaryMedium text-sm" />
              </div>
            </div>

            <div >
              <label htmlFor="newPassword" className="block  font-primaryMedium text-[13px] text-[#979797] mr-[13px]">رمزعبور جدید</label>
              <Field
                type="password"
                name="newPassword"
                className="w-[220px] h-[39px] border-none outline-none shadow-[0px_1px_3px_0px_#00000033_inset]
                rounded-[5px]  bg-transparent

                "
              />
              <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800" 
              >
              <ErrorMessage name="newPassword" component="div" className="text-red-500 font-primaryMedium text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block  font-primaryMedium text-[13px] text-[#979797] mr-[13px]">تکرار رمزعبور</label>
              <Field
                type="password"
                name="confirmPassword"
                className="w-[220px] h-[39px] border-none outline-none shadow-[0px_1px_3px_0px_#00000033_inset]
                rounded-[5px]  bg-transparent

                "
              />
              <div  className="h-[10px] border border-[#FFFFFF] dark:border-gray-800" 

              >
                <ErrorMessage name="confirmPassword" component="div" 
                 className="text-red-500 font-primaryMedium text-sm" />
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              type="submit"
              className="w-[132px]
               h-[30px] font-primaryMedium flex items-center justify-center bg-[#00E0DB] rounded-[25px]
                absolute top-[35px] right-[-66px]
               "
              disabled={isSubmitting}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M4.99902 13.75V11.875C4.99902 10.6965 4.99902 10.1073 5.36505 9.74113C5.73107 9.375 6.32018 9.375 7.49838 9.375C8.67658 9.375 9.26568 9.375 9.63171 9.74113C9.99774 10.1073 9.99774 10.6965 9.99774 11.875V13.75" stroke="#003B39" stroke-linejoin="round"/>
                  <path d="M6.24805 4.375H8.7474" stroke="#003B39" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.875 7.4115C1.875 4.55124 1.875 3.1211 2.74149 2.21496C2.7735 2.18149 2.80625 2.14873 2.83971 2.11671C3.74562 1.25 5.1754 1.25 8.03492 1.25C8.71262 1.25 9.0391 1.25235 9.34983 1.36835C9.64906 1.48006 9.89975 1.68899 10.4011 2.10687L11.7731 3.25057C12.4365 3.80351 12.7681 4.07997 12.9452 4.45791C13.1221 4.83586 13.1221 5.26771 13.1221 6.13141V8.125C13.1221 10.4686 13.1221 11.6404 12.5255 12.4618C12.3327 12.7271 12.0995 12.9604 11.8343 13.1532C11.013 13.75 9.84152 13.75 7.49855 13.75C5.15558 13.75 3.98408 13.75 3.16284 13.1532C2.89761 12.9604 2.66437 12.7271 2.47167 12.4618C1.875 11.6404 1.875 10.4686 1.875 8.125V7.4115Z" stroke="#003B39"/>
             </svg>              
             <span className="text-[13px] w-[78px] font-[400]">ذخیره تغییرات</span>
            </button>
            </div> 
          </Form>
        )}
      </Formik>
    </div>
   
      </div> 
    </div>  
    <div className="xl:w-[787px] h-[63px]  xl:ml-[34px] xl:mr-[35px] mt-[40px]
    max-smx3:mt-[190px]  max-smx3:dark:bg-gray-800 
    max-md:mt-[190px] 
    
    ">
    <button
       className="w-full text-left py-4 h-[28px]  flex justify-between items-center focus:outline-none
       max-smx3:gap-[130px]
       "
       onClick={() => toggleAccordion(1)}
      >
        {openIndex === 1 ? (
      <svg  
        className={`h-[15px] w-[15px] rotate-0 transform transition-transform duration-300 `}
        xmlns="http://www.w3.org/2000/svg" 
        width="15" height="15" 
        viewBox="0 0 15 15" 
        fill="none"
        >
        <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ) : (
        <svg  
        className={`h-[15px] w-[15px] rotate-180 transform transition-transform duration-300 `}
        xmlns="http://www.w3.org/2000/svg" 
        width="15" height="15" 
        viewBox="0 0 15 15" 
        fill="none"
        >
        <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      )
      
    }
      <span className="font-[400] text-[#9D9D9D] font-primaryMedium text-[16px]">تایید ورود دو مرحله ای</span>

      </button>   
      <div
        className={`accordion-content ${
          openIndex === 1 ? "block" : "hidden"
        } p-4 text-gray-700 transition-all duration-300`}
       >
         <Formik
          initialValues={{ twoFactorAuth: false }}
          onSubmit={handleSubmit}
         >
            <Form >
            <div className="xl:ml-[268px] xl:mt-[-10px] 
            max-smx3:flex max-smx3:justify-center
            max-md:flex max-md:justify-center
            max-lg:flex 
            max-lg:justify-center
            max-xl:flex
            max-xl:justify-center
           
            " >
            <label className="w-[211px] flex justify-between items-center">
              <Field type="checkbox" name="twoFactorAuth" className=' focus:ring-blue-500 appearance-none h-[15px] w-[15px] rounded-[3px] shadow-[0px_1px_3px_0px_#00000040_inset] bg-white 
              
              checked:bg-blue-600 ' />
              <span className="text-[#00504E] font-[400] font-primaryMedium text-[15px] mb-[3px]
              dark:text-white
              "> مایل به ورود دو مرحله ای هستم</span> 
            </label>
            </div>
 
            </Form>
         </Formik>
        </div>
     </div>
    <div className="xl:w-[787px] xl:h-[104px] 
     max-smx3:h-[200px] max-md:h-[200px]
    xl:ml-[34px] xl:mr-[35px] mt-[43px]">
    <button
       className="w-full text-left py-4 h-[28px]  flex justify-between items-center focus:outline-none"
       onClick={() => toggleAccordion(2)}
      >
         {openIndex === 2 ? (
      <svg  
        className={`h-[15px] w-[15px] rotate-0 transform transition-transform duration-300 `}
        xmlns="http://www.w3.org/2000/svg" 
        width="15" height="15" 
        viewBox="0 0 15 15" 
        fill="none"
        >
        <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ) : (
        <svg  
        className={`h-[15px] w-[15px] rotate-180 transform transition-transform duration-300 `}
        xmlns="http://www.w3.org/2000/svg" 
        width="15" height="15" 
        viewBox="0 0 15 15" 
        fill="none"
        >
        <path d="M2.8125 9.84375L7.5 5.15625L12.1875 9.84375" stroke="#9D9D9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      )
      
    }
      <span className="font-[400] text-[#9D9D9D] font-primaryMedium text-[16px]">ایمیل بازیابی</span>

      </button>   
      <div
        className={`accordion-content ${
          openIndex === 2 ? "block" : "hidden"
        } p-4 text-gray-700 transition-all duration-300`}
       >
         <Formik>
         <Form className="grid mt-[9px] justify-center justify-items-center">
          <div className="flex gap-[22px] justify-center"
            style={{direction:'rtl'}}
           >
            <div className="mt-[-16px]">
              <label htmlFor="email" className="block font-primaryMedium text-[13px] text-[#979797] mr-[13px]">ایمیل جدید</label>
              <Field
                type="email"
                name="email"
                className="w-[285px] h-[39px] border-none outline-none shadow-[0px_1px_3px_0px_#00000033_inset]
                rounded-[5px] placeholder:text-left px-[14px] placeholder:font-primaryMedium placeholder:text-[14px]
                                              bg-transparent

                "
                placeholder='example@gmail.com'
              /> 
               </div>
              </div>
            </Form>
         </Formik>
        </div>
     </div>  
  </div>
  )
}

export default SecuritySetting