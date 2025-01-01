import { Fragment } from "react"
import { Field, Formik , Form } from 'formik'

import images from '../../assets/Register'
const RegisterStep1 = ({HandleConfirm , HandleSubmit1}) => {
  return (
    <Fragment>
           <div className='relative bottom-[100px] left-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <g filter="url(#filter0_d_281_498)">
                        <rect x="-3" y="25.8198" width="42" height="42" rx="13" transform="rotate(-45 -3 25.8198)" fill="#FCFCFC"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_281_498" x="0.384766" y="0.506084" width="52.6274" height="52.6274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_498"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_498" result="shape"/>
                        </filter>
                        </defs>
                      </svg>
                      <p className='absolute bottom-[15px] left-[23.5px] font-primaryMedium text-[20px]
                      text-[#D47300] font-[700]
                      '>۱</p>
                    </div>
                    <div className='w-[377px] h-[400px] mb-[3px] flex justify-center justify-items-center items-center
                      pt-[94px] pb-[81px] pl-[55px] pr-[56px]
                    '
                      style={{backgroundImage: `url(${images.bginput})`,
                        backgroundRepeat:'no-repeat', backgroundPosition:'center', 
                                    backgroundSize: 'auto '
                   }}
                
                   >
                    <div className='grid justify-items-center '>
                      <p className='text-[25px] font-primaryMedium text-[#005351] mb-[41px]' >ایجاد حساب کاربری</p>
                      <Formik initialValues={{phoneNumber:''}} 
                       onSubmit={HandleSubmit1}
                      >
                           <Form >
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
                              flex justify-center
                              gap-[3px]
                              '
                           >
                              <Field
                               className='bg-transparent outline-none border-none placeholder:bg-transparent'
                               name='phoneNumber'
                            />
                            <p className='text-[12px]'>شماره همراه</p>
                            </div>
                          
                   
                      <div className='grid justify-items-center mt-[44px]'>
                       <button className='font-primaryMedium text-[13px] bg-[#E48900]
                       w-[133px] h-[35px] rounded-[21px] text-[#FFFFFF]
                       ' type='submit'  >دریافت کد تایید</button>
                        <p className='text-[12px] text-[#008E8B] font-primaryRegular font-[700] mt-[4px]'>ورود</p>
                       </div>      
                       </Form>
                    </Formik>  
                    </div>
                    </div> 
    </Fragment>
  )
}

export default RegisterStep1