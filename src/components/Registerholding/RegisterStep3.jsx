import { Fragment } from "react"
import images from '../../assets/Register'
import { Field, Formik , Form } from 'formik'
import { registerLevel3 } from "../../core/services/api/register"

const RegisterStep3 = ({vle}) => {
  const HandleSubmit3 = (values) => {
    registerLevel3(values)
    console.log(values)
  };
  return (
    <Fragment>
      <div className="relative top-[114px] left-[10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <g filter="url(#filter0_d_281_659)">
                <rect y="29.8198" width="42" height="42" rx="13" transform="rotate(-45 0 29.8198)" fill="#FCFCFC"/>
                </g>
                <path d="M35.7793 28.4902C35.7793 28.8743 35.7077 29.2161 35.5645 29.5156C35.4277 29.8086 35.2227 30.0658 34.9492 30.2871H34.959C34.6986 30.515 34.4219 30.6908 34.1289 30.8145C33.8424 30.9382 33.543 31 33.2305 31C32.8984 31 32.5794 30.9284 32.2734 30.7852C31.974 30.6354 31.6549 30.3783 31.3164 30.0137C31.0951 30.6973 30.4798 31.0391 29.4707 31.0391C29.2428 31.0391 29.0052 31.0163 28.7578 30.9707C28.5169 30.9186 28.276 30.8405 28.0352 30.7363V36.6445H26.082V31.4785C26.082 29.4733 25.7793 27.5885 25.1738 25.8242L27.1953 25.1504L27.8887 28.2168C27.9408 28.4512 28.0514 28.6302 28.2207 28.7539C28.3965 28.8711 28.6439 28.9297 28.9629 28.9297C29.2949 28.9297 29.5391 28.8483 29.6953 28.6855V28.6953C29.9362 28.4414 30.0436 28.2331 30.0176 28.0703C29.9915 27.9076 29.9655 27.748 29.9395 27.5918C29.9199 27.429 29.9004 27.263 29.8809 27.0938C29.8678 26.9831 29.8516 26.8691 29.832 26.752C29.8125 26.6283 29.793 26.5078 29.7734 26.3906C29.7669 26.3581 29.7604 26.3125 29.7539 26.2539C29.7474 26.1953 29.7376 26.1367 29.7246 26.0781C29.7181 26.013 29.7083 25.9544 29.6953 25.9023C29.6888 25.8503 29.6823 25.8112 29.6758 25.7852L31.6094 25.082C31.7526 25.8503 31.86 26.5013 31.9316 27.0352C32.0033 27.5625 32.0391 27.9759 32.0391 28.2754C32.0391 28.3079 32.0391 28.3535 32.0391 28.4121C32.0456 28.4642 32.0423 28.5586 32.0293 28.6953C32.2376 28.9036 32.5176 29.0078 32.8691 29.0078C33.1686 29.0078 33.3965 28.9297 33.5527 28.7734C33.6439 28.6758 33.7155 28.5814 33.7676 28.4902C33.8197 28.3991 33.8457 28.3047 33.8457 28.207C33.8457 28.194 33.8457 28.1777 33.8457 28.1582C33.8457 28.1322 33.8424 28.1029 33.8359 28.0703L33.5234 25.7656L35.4473 25.1406L35.7793 28.2168V28.4902Z" fill="#D47300"/>
                <defs>
                <filter id="filter0_d_281_659" x="3.38477" y="4.5061" width="52.6274" height="52.6274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_659"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_659" result="shape"/>
                </filter>
                </defs>
                </svg>
      </div>

          <div className='w-[377px] h-[400px] mb-[3px] flex justify-center justify-items-center items-center
                      pt-[33px] pb-[50px] pl-[55px] pr-[56px]
                    '
                      style={{backgroundImage: `url(${images.bgregister2})`,
                        backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                                    backgroundSize: 'auto '
                   }}
                
                   >
                    <div className='grid justify-items-center '>
                      <p className='text-[25px] font-primaryMedium text-[#005351] mb-[23px]' >ورود به حساب کاربری</p>
                      <Formik initialValues={{gmail:'', password:'' , phoneNumber:vle?.phoneNumber}} 
                      onSubmit={HandleSubmit3}
                      >
                           <Form className='grid gap-[16px]' >
                          <div 
                              className='w-[277px] h-[47px] bg-transparent shadow-[0px_1px_2px_0px_#00000040_inset]
                              rounded-[9px]
                              text-right
                              outline-none
                              border-none
                              placeholder:mr-[19px]
                              placeholder:text-right
                              pt-[14px] font-primaryMedium
                              pb-[15px]
                              flex justify-between pr-[22px] pl-[12px]
                              gap-[3px]
                              '
                           >
                              <Field
                               className='bg-transparent outline-none  placeholder:bg-transparent
                               border-black
                               '
                               name='gmail'
                            />
                            <p className='text-[15px]'>ایمیل</p>
                            </div>
                            <div 
                              className='w-[277px] h-[47px] bg-transparent shadow-[0px_1px_2px_0px_#00000040_inset]
                              rounded-[9px]
                              text-right
                              outline-none
                              border-none
                              placeholder:mr-[19px]
                              placeholder:text-right
                              pt-[14px] font-primaryMedium
                              pb-[15px]
                              flex justify-between pr-[22px] pl-[12px]
                              gap-[3px] 
                              '
                           >
                              <Field
                               className='bg-transparent outline-none border-none placeholder:bg-transparent'
                               name='password'
                            />
                            <p className='text-[15px]'>رمز عبور</p>
                            </div>
                         
                          
                   
                      <div className='grid justify-items-center justify-center'>
                      <label className="w-[104px] flex justify-center ml-[20px]  items-center gap-[7px]">
                      <span className="text-[#AAAAAA] font-[400] font-primaryMedium text-[12px] mb-[3px]
                          dark:text-white
                          "> مرا بخاطر بسپار</span> 
                          <Field type="checkbox" name="twoFactorAuth" className=' focus:ring-blue-500
                          appearance-none h-[15px] w-[15px] rounded-[3px] shadow-[0px_1px_3px_0px_#00000040_inset] bg-white 
                          checked:bg-blue-600 ' />
                        </label>
                       <button className='font-primaryMedium text-[13px] bg-[#E48900]
                       w-[133px] h-[35px] rounded-[21px] text-[#FFFFFF] mt-[27px]
                       ' type='submit' >ورود به حساب کاربری</button>
                       </div>      
                       </Form>
                    </Formik>  
                    </div>
                    </div> 
    </Fragment>
  )
}

export default RegisterStep3