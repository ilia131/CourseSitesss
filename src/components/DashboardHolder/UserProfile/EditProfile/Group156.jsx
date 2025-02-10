import { Fragment } from 'react'
import { Field , ErrorMessage} from 'formik'
import Calender from '../../../../screens/Dashboard/UserProfile/Calender1'
const Group156 = ({setFieldValue ,bgColor}) => {
  return (
    <Fragment>
        <div className='grid xl:grid-cols-2  text-right
                         xl:gap-y-[11px] xl:gap-x-[30px] xl:w-[430px] xl:h-[496px] 
                         max-smx3:gap-[10px] 
                         max-md:gap-[10px]
                         max-lg:gap-[10px]
                         max-xl:gap-x-[30px]
                         lg:w-[430px]
                         lg:h-[496px] 
                         lg:grid-cols-2
                         relative
                       ' 
                       style={{direction:'ltr'}}
                       >
                          <div className='flex-col max-smx3:grid max-md:grid max-lg:grid max-xl:grid' >
                            <label className='text-[#979797] font-primaryMedium
                             text-[13px]  xl:mr-[12px]  
                            ' >نام خانوادگی</label>
                            <Field
                              type='text'
                              name='LName'
                              placeholder='فلان زاده فلان آبادی'
                              className='w-[200px] text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              bg-transparent
                              h-[36px] 
                              font-primaryRegular
                              text-[#005351]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pr-[13px]
                              pt-[5px]
                              pr-[13px]
                              '
                            />
                               <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                        // style={{borderColor:bgColor}}

                               >
                                <ErrorMessage name="LName" component="div" 
                                className="text-red-500 font-primaryMedium text-sm" />
                                </div>
                           </div>
                           <div className='flex-col max-smx3:grid max-md:grid max-lg:grid max-xl:grid'>
                            <label className='text-[#979797] font-primaryMedium
                             text-[13px]  xl:mr-[12px] 
                            ' >نام</label>
                            <Field
                              type='text'
                              name='FName'
                              placeholder='فلان'
                              className='w-[200px] 
                              bg-transparent
                              text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              rounded-[5px] placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              h-[36px] 
                              placeholder:pt-[5px]
                              placeholder:pr-[13px]
                              '
                            />
                              <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                              
                              // style={{borderColor:bgColor}}
                              >
                                <ErrorMessage name="FName" component="div" 
                                className="text-red-500 font-primaryMedium text-sm"
                                

                                />
                                </div>
                            </div> 
                           <div className='max-smx3:grid max-md:grid max-lg:grid max-xl:grid' >
                           <label className='text-[#979797] font-primaryMedium
                             text-[13px]  xl:mr-[12px]
                            ' >جنسیت</label>
                            <Field
                              as='select'
                              name='Gender'
                              placeholder='gender'
                              className='w-[200px] outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              bg-transparent
                            
                              rounded-[5px]
                              text-right
                              text-[16px]
                              font-primaryMedium
                              text-[#005351]
                              h-[36px]
                              
                              '
                          >
                            <option value='' disabled  className=' text-[16px]
                              font-primaryMedium
                              text-[#005351]'>
                                انتخاب جنسیت
                            </option>
                            <option value='male' 
                             className=' text-[16px]
                              font-primaryMedium
                              text-[#005351]'
                            >مرد</option>
                            <option value='female'
                             className=' text-[16px]
                              font-primaryMedium
                              text-[#005351]'
                            >زن</option>
                            </Field >
                           </div>
                          <div className='max-smx3:grid max-md:grid max-lg:grid max-xl:grid'>
                            <label className='text-[#979797] font-primaryMedium
                             text-[13px]  xl:mr-[12px]
                            ' >کد ملی</label>
                            <Field
                              name='NationalCode'
                              placeholder='کد ملی'
                              className='w-[200px] text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                                                            bg-transparent

                              rounded-[5px]
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              h-[36px] 
                              placeholder:pt-[5px]
                              placeholder:pr-[13px]

                              '
                            />
                                <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                                // style={{borderColor:bgColor}}

                                >
                                <ErrorMessage name="NationalCode" component="div" 
                                className="text-red-500 font-primaryMedium text-sm"
                                

                                />
                                </div>
                           </div>
                            <div className='max-smx3:grid max-md:grid max-lg:grid max-xl:grid'  >
                            <label className='text-[#979797] font-primaryMedium
                                text-[13px]  xl:mr-[12px]
                              ' >شماره تلفن</label>
                            <Field
                              name='phoneNumber'
                              placeholder='۰۹۳۹۶۴۲۱۲۳۴'
                              className='w-[200px]  outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                                                            bg-transparent
                              
                              h-[36px] 
                              items-center
                              pl-[12px]
                              pb-[6px]
                              text-left
                              placeholder:text-[16px]
                              font-primaryMedium
                               placeholder:text-[#005351]
                              '
                            />
                             <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                            //  style={{borderColor:bgColor}}

                             >
                                <ErrorMessage name="phonenumber" component="div" 
                                className="text-red-500 font-primaryMedium text-sm" 

                                />
                                </div>
                           </div> 
                           <div className='max-smx3:grid max-md:grid max-lg:grid max-xl:grid'>
                           <label className='text-[#979797] font-primaryMedium
                                text-[13px] xl:mr-[12px]
                              ' >تاریخ تولد</label>
                            <div className='flex w-[200px] 
                                 h-[36px] 
                                justify-between
                                items-center
                                shadow-[0px_1px_2px_0px_#00000033_inset] 
                                rounded-[5px]'>                              
                            
                            <Field name="BirthDay">
                            
                          {({ field }) => (
                             <Calender
                                    value={field.value}
                                    onChange={(value) => setFieldValue("BirthDay", value)} 
                             />
                             )}
                          </Field> 
                          
                             </div>   
                             <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                            //  style={{borderColor:bgColor}}

                             >
                                <ErrorMessage name="BirthDay" component="div" 
                                className="text-red-500 font-primaryMedium text-sm"

                                />
                                </div>
                           </div> 
                           <div className='max-smx3:grid max-md:grid max-lg:grid max-xl:grid'>
                           <label className='text-[#979797] font-primaryMedium
                                text-[13px]  xl:mr-[12px]
                              ' >تلگرام</label>
                            <Field
                              name='TelegramLink'
                              placeholder='https://t.me/..'
                              className='w-[200px] text-left outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              width-[200px]
                              rounded-[5px]
                              bg-transparent

                              h-[36px] 
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pl-[13px]
                              '
                            />
                             <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                            //  style={{borderColor:bgColor}}

                             >
                                <ErrorMessage name="TelegramLink" component="div" 
                                className="text-red-500 font-primaryMedium text-sm" 

                                />
                                </div>
                           </div>
                           <div className='max-smx3:grid max-md:grid max-lg:grid max-xl:grid'>
                           <label className='text-[#979797] font-primaryMedium
                                text-[13px]  xl:mr-[12px] 
                              ' >ایمیل</label>
                            <Field
                              name='email'
                              placeholder='folani99@gmail.com'
                              className='w-[200px] text-left outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              h-[36px] 
                              rounded-[5px]
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pl-[13px]
                              bg-transparent
                              '
                            />
                             <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                            //  style={{borderColor:bgColor}}

                             >
                                <ErrorMessage name="email" component="div" 
                                className="text-red-500 font-primaryMedium text-sm" 

                                />
                                </div>
                           </div>
                           <div className='grid xl:gap-[70px]
                             max-smx3:gap-[20px]
                           '>
                            <div>
                            <label className='text-[#979797] font-primaryMedium
                                text-[13px]  xl:ml-[-12px]
                                 xl:w-[430px] flex justify-end
                               ' >لینکداین</label>
                             <Field
                              name='LinkdinProfile'
                              placeholder='https://www.linkedin.com/in/...'
                              className='xl:w-[430px] text-left outline-none
                              max-smx3:w-[200px] truncate
                              max-md:w-[200px]
                              max-lg:w-[200px]
                              max-xl:w-[430px]
                              shadow-[0px_1px_2px_0px_#00000033_inset] 
                              rounded-[5px]
                              h-[35px] 
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pl-[13px]
                              bg-transparent

                              '
                            />
                              <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                              // style={{borderColor:bgColor}}

                              >
                                <ErrorMessage name="LinkdinProfile" component="div" 
                                className="text-red-500 font-primaryMedium text-sm"
                                       

                                />
                                </div>
                            </div>
                             <div className='max-lg:mt-[20px] max-xl:mt-[30px]' >
                            <label className='text-[#979797] font-primaryMedium
                                text-[13px]  xl:ml-[-12px]
                                 xl:w-[430px] flex justify-end 
                              ' >آدرس</label>
                            <Field
                              name='HomeAdderess'
                              placeholder='مازندران - ساری - میدان خزر - جاده فرح آباد - خیابان دیمطوران - ساختمان هوتن ۱۲ - واحد ۱۵'
                              as='textarea'
                              className='xl:w-[430px] 
                              max-smx3:w-[200px]
                              max-xl:w-[430px]
                              max-md:w-[200px]
                              max-lg:w-[200px]
                              max-smx3:h-[100px]
                              xl:h-[65px] 
                              lg:h-[65px]
                              text-right outline-none
                              shadow-[0px_1px_2px_0px_#00000033_inset]  
                              rounded-[5px] resize-none
                              placeholder:text-[16px]
                              placeholder:font-primaryMedium
                              placeholder:text-[#005351]
                              placeholder:pt-[5px]
                              placeholder:pr-[14px]
                              bg-transparent

                              '
                            />
                              <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800"
                                                              // style={{borderColor:bgColor}}

                              >
                                <ErrorMessage name="HomeAdderess" component="div" 
                                className="text-red-500 font-primaryMedium text-sm"

                                />
                                </div>
                            </div> 
                           </div>  
                        </div>
    </Fragment>
  )
}

export default Group156