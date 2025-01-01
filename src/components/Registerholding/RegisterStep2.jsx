import {Fragment} from 'react'
import { Field, Formik , Form } from 'formik'
import images from '../../assets/Register'
import OtpInput from 'react-otp-input'
import { registerLevel2 } from '../../core/services/api/register'

const RegisterStep2 = ({HandleAccount1 , vle}) => {
  
  const HandleSubmit = (values) => {
    console.log(values)
    HandleAccount1()
    registerLevel2(values)
  };
  return (
    
    <Fragment>
      <div className='relative left-[12px] top-[2px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <g filter="url(#filter0_d_281_564)">
            <rect y="29.8198" width="42" height="42" rx="13" transform="rotate(-45 0 29.8198)" fill="#FCFCFC"/>
            </g>
            <path d="M33.9062 27.627C33.9062 28.3822 33.6198 28.9876 33.0469 29.4434C32.4479 29.9186 31.8392 30.1562 31.2207 30.1562C30.804 30.1562 30.3516 30.0195 29.8633 29.7461V30.8301C29.8633 31.0645 29.8633 31.2988 29.8633 31.5332C29.8698 31.7676 29.873 32.0085 29.873 32.2559C29.873 32.4967 29.873 32.7669 29.873 33.0664C29.8796 33.3659 29.8828 33.6686 29.8828 33.9746C29.8828 34.2806 29.8828 34.5801 29.8828 34.873C29.8828 35.166 29.8828 35.4232 29.8828 35.6445H27.8418V30.4785C27.8418 28.3496 27.5553 26.4714 26.9824 24.8438L28.9551 24.1699L29.707 27.207C29.7721 27.4479 29.8861 27.6302 30.0488 27.7539C30.2181 27.8711 30.4492 27.9297 30.7422 27.9297C30.9375 27.9297 31.11 27.8971 31.2598 27.832C31.4095 27.7669 31.5299 27.679 31.6211 27.5684V27.5879C31.6732 27.4967 31.7155 27.4154 31.748 27.3438C31.7806 27.2656 31.7904 27.2038 31.7773 27.1582L31.5137 24.7461C31.5983 24.7201 31.7122 24.6875 31.8555 24.6484C31.9987 24.6029 32.1549 24.554 32.3242 24.502C32.5 24.4434 32.679 24.3848 32.8613 24.3262C33.0501 24.2676 33.2324 24.209 33.4082 24.1504C33.571 25.0163 33.6947 25.7389 33.7793 26.3184C33.8639 26.8913 33.9062 27.3275 33.9062 27.627Z" fill="#D47300"/>
            <defs>
            <filter id="filter0_d_281_564" x="3.38477" y="4.5061" width="52.6274" height="52.6274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_564"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_564" result="shape"/>
            </filter>
            </defs>
            </svg>
      </div>
      <div className='w-[377px] h-[400px] mb-[3px] flex justify-center justify-items-center items-center
                      pt-[33px] pb-[41px] pl-[55px] pr-[56px]
                    '
                      style={{backgroundImage: `url(${images.bgregister1})`,
                        backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                                    backgroundSize: 'auto '
                   }}
                
                   >
                    <div className='grid justify-items-center '>
                      <div className='grid justify-items-center mb-[42px] gap-[4px]'>
                       <p className='text-[25px] font-primaryMedium text-[#005351] h-[46px]' >کد تایید</p>
                       <p className='font-primaryMedium text-[13px]
                         text-right text-[#252525] font-[400]'
                        >کد تایید به شماره <span className='text-[#008A86]'>۹۸۹۱۲۱۲۳۴۵۶۷+</span> ارسال شده است ، در
                       صورت مغایرت روی <span className='text-[#01CEC9]'>ویرایش</span> کلیک کنید</p>
                      </div>
                      <Formik initialValues={{verifyCode:'', phoneNumber:vle?.phoneNumber}} 
                        onSubmit={HandleSubmit}
                      >
                        {({ setFieldValue }) => (
                           <Form >
                           <div 
                              className='w-[262px] h-[58px] bg-transparent shadow-[0px_1px_2px_0px_#00000040_inset]
                              rounded-[9px]
                              text-right
                              outline-none
                              border-none
                              placeholder:mr-[19px]
                              placeholder:text-right
                              pt-[14px] font-primaryMedium
                              pb-[15px]
                              flex justify-center
                              gap-[3px]
                              '
                           >
                             <Field name="verifyCode"      
                              className='bg-transparent outline-none border-none placeholder:bg-transparent
                              '
                             >
                              {({ field }) => (
                                <OtpInput
                                  value={field.value}
                                  onChange={(otp) => setFieldValue('verifyCode', otp)}
                                  numInputs={5}
                                  otpType="number"  
                                  renderInput={(props) => <input {...props} 
                                  className='bg-transparent  mr-3 text-center
                                  text-2xl  outline-none text-[#005351]
                                  border-[#f7f7f7] border border-b-[#E6E6E6] 
                             
                                  '
                                  style={{width:'30px'
                                    ,display:'flex',
                                    justifyContent:'center'
                                  }}
                                  />}
                              
                                />
                                 )}
                            </Field>
                            </div>
                          
                   
                      <div className='grid justify-items-center mt-[51px]'>
                       <button className='font-primaryMedium text-[13px] bg-[#E48900]
                       w-[133px] h-[43.1px] rounded-[21px] text-[#FFFFFF]
                       ' type='submit' 
                       >ایجاد حساب</button>
                        <p className='text-[12px] text-[#008E8B] font-primaryRegular font-[700] mt-[6.52px]'>ارسال دوباره کد</p>
                       </div>      
                       </Form>
                             )}

                    </Formik>  
                    </div>
                    </div> 
        
    </Fragment>
  )
}

export default RegisterStep2