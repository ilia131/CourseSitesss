import { Fragment , useState } from 'react'
import ImageField1 from '../../Dashboard/ImageField1'
import MapReact1 from '../../Dashboard/MapReact1'
import { Field , ErrorMessage} from 'formik'
const Group155 = ({previewImage , setPreviewImage, fileInputRef ,handleFileChange , handleImageClick
    ,setFieldValue , userInfo , setRefetch , bgColor
}) => {
  // const handleMapClick = () => {
  //     setValueField("location.lat", selectedCoords.lat);
  // };

  return (
    <Fragment>
         <div className='xl:w-[308px] xl:h-[604px] 
                       justify-center flex-col justify-items-center
                       '>
                               <div className='xl:w-[308px] grid justify-center
                                  justify-items-center
                                '
                                style={{direction:'ltr'}}
                                >
                                 <ImageField1 previewImage={previewImage} 
                                            handleImageClick={handleImageClick} 
                                            handleFileChange={handleFileChange} 
                                            fileInputRef={fileInputRef}
                                            setPreviewImage={setPreviewImage}
                                            userInfo={userInfo}
                                            setRefetch={setRefetch}
                                            bgColor={bgColor}
                                  /> 
                                      <div className='mt-[-36px] relative top-[5px]' >
                                          <label className='text-[#979797] font-primaryMedium
                                              text-[13px]  xl:ml-[-12px]
                                              xl:w-[308px] flex justify-end 
                                            ' >درباره من</label>
                                          <Field
                                            name='UserAbout'
                                            placeholder='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز با هدف بهبود ابزارهای کاربردی می باشد. '
                                            as='textarea'
                                            className='xl:w-[308px]
                                            lg:w-[308px]
                                            bg-transparent
                                            max-smx3:w-[200px]
                                            h-[148px] text-right outline-none
                                            shadow-[0px_1px_2px_0px_#00000033_inset] 
                                            rounded-[5px] resize-none
                                            placeholder:text-[14px]
                                            placeholder:font-primaryMedium
                                            placeholder:text-[#005351]
                                            placeholder:pt-[5px]
                                            placeholder:pl-[14px]
                                            placeholder:pr-[17px]
                                            '
                                            style={{direction:'rtl'}}
                                          />
                                            <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800
                                            max-md:w-[150px]
                                            "
                                            style={{borderColor:bgColor}}

                                            >
                                                <ErrorMessage name="َUserAbout" component="div" 
                                                className="text-red-500 font-primaryMedium text-sm truncate" />
                                            </div>
                                      </div>
                                     <div className='grid justify-center justify-items-center
                                      xl:w-[308px] mt-[43px] xl:ml-[3px] relative
                                      '>
                                    
                                     <MapReact1 
                                     setFieldValue={setFieldValue} 
                                    //  handleMapClick={handleMapClick}
                                     />
                                   
                                         <div className='xl:w-[277px] h-[35px]
                                         max-smx3:gap-[20px]
                                         max-md:gap-[20px]
                                         max-lg:gap-[20px]
                                         xl:mt-[-8px] flex justify-between
                                         max-xl:gap-[40px]
                                         '>
                                            <button className='xl:w-[95px] h-[35px] flex justify-center
                                              items-center rounded-[25px] gap-[9px] 
                                            '>
                                              
                                                <span>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                  <path d="M11.8121 11.25L7.3125 6.75M7.31298 11.25L11.8125 6.75" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <path d="M17.0625 9C17.0625 4.85786 13.7046 1.5 9.5625 1.5C5.42036 1.5 2.0625 4.85786 2.0625 9C2.0625 13.1421 5.42036 16.5 9.5625 16.5C13.7046 16.5 17.0625 13.1421 17.0625 9Z" stroke="#D9D9D9" stroke-width="1.5"/>
                                                  </svg>
                                                </span> 
                                                <span 
                                                
                                                className='text-[15px] font-primaryMedium text-[#D4D4D4] mb-[4px]
                                                h-[21px] 
                                                '>لغـــو</span>
                                            </button>
                                            <button  className='xl:w-[152px] 
                                            max-smx3:w-[100px]
                                            max-md:w-[130px]
                                            max-lg:w-[130px]
                                            max-xl:w-[150px]
                                            max-smx3:gap-[4px]
                                            h-[35px] flex justify-center gap-[12px]
                                              rounded-[25px] bg-[#00E0DB] items-center'
                                              type='submit'
                                              >         
                                                <span className='mt-[-0.5px]' >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                    <path d="M5.99316 16.5V14.25C5.99316 12.8358 5.99316 12.1287 6.43239 11.6894C6.87162 11.25 7.57856 11.25 8.99239 11.25C10.4062 11.25 11.1131 11.25 11.5524 11.6894C11.9916 12.1287 11.9916 12.8358 11.9916 14.25V16.5" stroke="#003B39" stroke-width="1.5" stroke-linejoin="round"/>
                                                    <path d="M7.49316 5.25H10.4924" stroke="#003B39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M2.24414 8.8938C2.24414 5.46149 2.24414 3.74532 3.28393 2.65795C3.32234 2.61778 3.36164 2.57848 3.4018 2.54005C4.48888 1.5 6.20462 1.5 9.63604 1.5C10.4493 1.5 10.8411 1.50282 11.2139 1.64202C11.573 1.77607 11.8738 2.02679 12.4754 2.52824L14.1219 3.90069C14.9179 4.56421 15.3159 4.89596 15.5283 5.34949C15.7407 5.80303 15.7407 6.32125 15.7407 7.35769V9.75C15.7407 12.5623 15.7407 13.9684 15.0247 14.9542C14.7934 15.2725 14.5135 15.5525 14.1952 15.7838C13.2098 16.5 11.804 16.5 8.99241 16.5C6.18083 16.5 4.77504 16.5 3.78955 15.7838C3.47128 15.5525 3.19138 15.2725 2.96014 14.9542C2.24414 13.9684 2.24414 12.5623 2.24414 9.75V8.8938Z" stroke="#003B39" stroke-width="1.5"/>
                                                </svg>
                                                </span> 
                                                <span className='font-primaryMedium text-[#003B39] h-[21px]
                                                  flex items-center mt-[-2px] max-smx3:text-[12px]
                                                '>ذخیره تغییرات</span>
                                            </button>
                                        </div>  
                                      </div>   
                                    

                          </div> 
            </div>
    </Fragment>
  )
}

export default Group155