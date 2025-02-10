import images from '../../../assets/landingpng'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';

const PodCastSection = () => {

  return (
     <section className="h-[536px] grid justify-center  mb-[-2px] max-md:pl-[15px]
                                                                  max-smx2:pl-0
                         max-md:pt-[60px]
                         duration-700
                         lg:mt-[-1px] 
                         lg:pt-0
                         md:pt-[30px]
                         dark:bg-gray-800
                         xl:pt-[34px]
                         xl:mt-0
                  " 

                  >
           <div className='xl:w-[1247px] lg:w-full flex justify-center 
                           max-md:w-full
           '>
           <div className='h-[87px]  grid 
                            justify-center lg:ml-[33px] max-md:ml-[25px]'>
               <div className='flex justify-center items-center 
                               h-[54.38px] gap-[14.13px] xl:ml-[33px] max-md:ml-[30px]'>
                  <p className='font-primaryMedium text-[35px] text-[#000000] 
                                w-[147.71px] h-[54.38px] max-md:text-[25px] dark:text-[#f7f7f7] '>پادکست ها</p>
                  <div className='h-[13px] w-[13px] bg-[#01CEC9] 
                                  rounded-full max-md:mb-[10px] 
                                  max-md:relative max-md:right-[40px]
                                  '>                    
                  </div>
               </div>
               <div className=' h-[30px]'>
                   <p className='font-primaryRegular text-[#AAAAAA] text-[20px]
                   max-md:text-[16px]
                   max-md:mt-[-15px]
                   max-md:mr-[20px]

                   ' 
                  //  style={{color: bgColor === "" ? '#AAAAAA': textColor
                  //  }}
                   >مجموعه ای از تمام   آنچه شما نیاز دارید
                   </p>
               </div>
           </div> 
           </div>
           <div className='xl:w-[1247px] flex justify-center max-md:w-full xl:mt-[35px] max-md:mt-[60px]'>
              <div className='xl:w-[920px] lg:w-[900px] xl:h-[297px]' >
                 <div className="lg:w-[879px] 
                 max-md:w-[320px] 
                 lg:h-[350px] bg-podcast bg-cover max-md:h-[300px] 
                 max-md:bg-none
                 max-lg:bg-gradient-to-l
                max-lg:from-[#00DFDA4D] 
                max-lg:to-[#D680003D]
                 md:pb-[35px]
                 md:px-5
                 lg:px-0
                 xl:px-0
                 lg:pb-0
                 xl:pb-0
                 md:rounded-[20px]
                 text-center  flex items-center duration-700
                 mt-[-57px] ml-[0] gap-[45px] ">
                     
                    <div className='flex items-center gap-[45px] lg:relative
                    
                     lg:left-[170px] max-md:h-[300px] max-md:items-center 
                      max-md:justify-center max-md:flex max-md:px-2
                    '>
                      <div className='grid gap-[4.01px] w-[9px] h-[52.66px] 
                                        relative right-[74px]
                                        mt-[173px]
                                        max-md:hidden
                                        max-lg:hidden
                                      '>
                            <div className='h-[7px] w-[7px] rounded-full bg-white'></div>
                            <div className='h-[7px] w-[7px] rounded-full bg-white'></div>
                            <div className='h-[20px] w-[7px] rounded-full bg-[#00AFAB]'></div>
                            <div className='h-[7px] w-[7px] rounded-full bg-white'></div>
                         </div>  
                      <div style={{direction:'rtl'}} className='grid mt-[76px] 
                                                                max-md:w-full
                                                                max-md:justify-center
                                                                max-md:justify-items-center
                                                                max-md:bg-gradient-to-l
                                                              max-md:from-[#00DFDA4D] 
                                                              max-md:to-[#D680003D]
                                                                max-md:grid max-md:mt-[-170px]
                                                                rounded-[20px]
                      ' >
                        <p className='font-primaryRegular text-[13px] 
                         text-[#AAAAAA] relative lg:right-[216px]  top-[-10px]
                          max-md:top-[10px]
                          md:left-[165px]
                         ' > ۱۴ آذرماه ۱۴۰۲</p>
                       <p className='font-primaryMedium text-[26px] text-[#006865]
                              text-right max-md:text-[20px] max-md:mt-[20px]    relative lg:left-[10px] 
                       ' >شروع یادگیری توسعه وب با ری اکت</p>
                       <p className='text-[15px] font-primaryMedium text-[#828F8E] 
                                     text-right mt-[12px]  mb-[18px] max-md:text-[12px]
                                     relative lg:left-[10px] 
                                     max-md:mr-[15px]
                                     '>ری اکت (React) به عنوان یکی از محبوب‌ترین کتابخانه‌های جاوا اسکریپتی
                         <br className='max-md:hidden' />
                         و یکی از مهمترین ابزارهای توسعه وب شناخته می‌شود.
                       </p>
                       <div className='flex relative lg:right-[266px] top-[2px]'>
                          <div className='flex items-center h-[53px] gap-[7px] text-[#AAAAAA]'>
                            <p className='text-[13px] font-primaryRegular' >۵۸</p>
                            <img src={images.frame1} width={16} height={16} />
                            
                          </div>
                          <div className='flex items-center h-[53px] gap-[6.32px] text-[#AAAAAA] mr-[19px]'>
                            <p className='text-[13px] font-primaryRegular'>۱۲۴</p>
                             <img  src={images.frame2} width={16} height={16}/>
                          
                          </div>
                          <div className='flex items-center h-[53px] gap-[7px] text-[#AAAAAA] mr-[15px]'>   
                             <p className='text-[13px] font-primaryRegular' >۰۰:۲۳:۳۵</p>
                             <img  src={images.frame3} width={16} height={16}/>
                          </div>
                       </div>  
                     </div>
                        <img 
                           src={images.rec36} 
                           width={207} 
                           height={207} 
                           className=' mt-[38px] relative max-md:hidden'  />

                      </div> 
                 </div>
              </div>
           </div> 
    </section>
  )
}

export default PodCastSection