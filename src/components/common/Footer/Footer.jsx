import images from '../../../assets/landingpng'
import Svg2 from './Svg2'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';

const Footer = () => {
  const { bgColor , setBgColor} = useBgColor();

  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const textColor = getComplementaryColor(bgColor);
  return (

      <footer className="grid   pt-[2px] dark:bg-gray-800" 
      style={{backgroundColor:bgColor}}

      >

      <div className="h-[352px] w-full mb-[-7.5px] relative" >
        <div className='relative' >
        <Svg2 />
        </div>
        <div className="z-[78888]
            max-xl:mt-[80px]
            xl:h-[340px] mt-[41px] flex items-center justify-center 
            xl:pr-0
            duration-700
            max-md:bg-[#01CEC926]
            max-md:dark:bg-[#1a424d]
            max-lg:bg-[#01CEC926]
            max-lg:dark:bg-[#1a424d]
           
            "
            style={{backgroundColor:bgColor}}

            >
            <div className='mb-[32px] flex xl:w-[1247px] 
                                           lg:w-[1024px]          
                                           xl:gap-[157px]                 
                            justify-end xl:h-[257px] 
                            max-md:grid
                            max-lg:grid
                            lg:justify-center
                            lg:gap-[30px]
                            '
                            style={{direction:'rtl'}}
                            >
                           
              <div className='grid gap-[9px] 
                    xl:mt-[147px]
                    max-md:mt-[140px]
                    max-lg:mt-[140px]
                    max-lg:text-center
                    max-lg:ml-[20px]
                    max-md:ml-0
                    max-md:text-center
                    lg:mt-[147px]
                    duration-700
                    ' >
                 <p className='text-[#006865] font-primaryRegular xl:text-right 
                               w-[364px]
                               text-[14px]
                               max-smx2:text-[12px] 
                               max-lg:text-[14px]
                               smx2:text-[13.5px]
                               max-md:w-full
                               max-lg:w-full
                               lg:relative
                               lg:top-0
                               xl:top-0
                               dark:text-[#f7f7f7]
                               ' 
                               style={{color: bgColor === "" ? '#006865': textColor
                               }}
                               >مجموعه آموزشی فلان فعالیت خود را &nbsp;از سال &nbsp;&nbsp;۱۳۹۰   &nbsp;آغاز کرده است و
                   <br />
                   امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است</p>
                   <p className='text-[#00605D] font-primaryMedium xl:text-right 
                               text-[16px]
                             dark:text-[#f7f7f7]
                               max-md:mt-[10px]
                               max-lg:mt-[10px]
                               max-md:text-[15px]
                               max-lg:text-[16px]
                               '
                               style={{color: bgColor === "" ? '#00605D': textColor
                               }}
                               >
                   ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب 
                   <br />
                    مجتمع دنیای آرزو<span className='text-[15px] text-[#004F4D] 
                    max-md:mr-[10px] max-lg:mr-[10px]
                    lg:mr-[43px]  dark:text-[#f7f7f7]'
                    style={{color: bgColor === "" ? '#004F4D': textColor
                    }}

                    >۴۳۳۳۲۰۰۰ -   ۱ ۱ ۰</span>
                   </p>
              </div>   
              <div className='grid justify-center gap-[37px] relative top-[20px] left-[2px]
                 max-md:gap-[10px] max-md:h-[300px] max-lg:gap-[10px] max-lg:h-[300px]
                  lg:mr-[5px]
                  xl:mr-0
              ' >
                 <div className='flex justify-center items-center ml-[2px] '>
                  <div className='xl:w-[135px] xl:h-[50px] max-md:w-[100px]
                   max-lg:w-[135px] max-lg:h-[135px] lg:w-[125px] lg:h-[50px]
                   lg:mr-[10px]
                   xl:mr-0
                   lg:relative
                   lg:top-[19px]
                   xl:top-0
                   xl:mt-0
                   duration-700
                  ' >
                   <img 
                      src={images.logo} 
                     />
                    </div>
                  </div>
                  <div className='grid gap-[14px] max-md:mt-[-90px] max-lg:mt-[-90px]'>
                    <div className='lg:w-[204px] lg:h-[35px] rounded-[20px]
                                    max-md:w-[190px]
                                    max-lg:w-[204px]
                                    max-lg:h-[35px]
                                    max-md:h-[35px]
                                   bg-[#008D8A] flex justify-center 
                                    items-center duration-700 '>
                       <p className='font-primaryMedium text-[#FFFFFF] text-[15px]
                       max-md:text-[13px]
                       ' 
                    
                       >info@pazhooheshgah.ir</p>
                    </div>
                    <div className='flex justify-center gap-[6.22px] max-md:mt-[-10px]
                    max-lg:mt-[-10px]
                    '>
                     <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center py-[6.36px] pr-[3px]'>
                            <img src={images.telegram} width={22.27} height={22.27} />
                      </div>
                      <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center 
                                     pr-[1px]  '>
                            <img src={images.instagram}  width={20.36} height={20.36} />
                      </div>
                      <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center'>
                            <img src={images.youtube} width={22.91} height={22.91} />
                      </div>
                      <div className='w-[35px] h-[35px] bg-[#008D8A] 
                                     rounded-full flex justify-center items-center'>
                            <img src={images.linkedin} width={22.27} height={22.27} />
                      </div>
                    </div>
                  </div>
              </div> 
             <div className='flex items-center gap-[20px] xl:mt-[138px]
               max-md:w-full max-smx2:grid
               max-md:h-[300px] max-smx2:gap-0
               max-lg:h-[300px]
               max-md:mt-[-55px]
               max-md:justify-center
               max-smx2:mt-[10px]
               max-lg:mt-[-50px]
               lg:mt-[138px]
               lg:mr-[8px]
               xl:mr-0
               duration-700
             '
               
              >  
              <div className='flex w-[219px] h-[104px] gap-[22px] mr-[10px]'
               style={{direction:'ltr'}}> 
                <div className='h-[104px] w-[219px] flex gap-[2px]'>
                     <div className='grid w-[93px] h-[104px] justify-center justify-items-end text-[#77A9A8]
                      '
                      style={{color: bgColor === "" ? '#77A9A8': textColor
                      }}
                      >
                       
                          <p className='
                          
                          xl:text-[16px] font-primaryRegular '>اساتید برتر</p>             
                      
                  
                          <p className='text-[16px] font-primaryRegular '>دسته بندی ها</p> 
                     
                    
                          <p className='text-[16px] font-primaryRegular '>خدمات ما</p>
                      
                   
                          <p className='text-[16px] font-primaryRegular ]'>ورود به حساب</p>
                          
                     </div>
                     <div className='grid items-center relative top-[2px]'>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full relative top-[3px] '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full'></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                     </div>
                   </div>
                   <div className='h-[104px] w-[219px] flex'>
                     <div className='grid w-[93px] h-[104px] justify-center justify-items-end text-[#77A9A8]
                      
                      '
                      style={{color: bgColor === "" ? '#77A9A8': textColor
                      }}
                      >
                       
                          <p className='text-[16px] font-primaryRegular '>دوره ها</p>             
                      
                  
                          <p className='text-[16px] font-primaryRegular '>اخبار و مقالات</p> 
                     
                    
                          <p className='text-[16px] font-primaryRegular '> پادکست ها</p>
                      
                   
                          <p className='text-[16px] font-primaryRegular '>تماس با ما</p>
                          
                     </div>
                     <div className='grid items-center relative top-[2px]'>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full relative top-[3px] '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full'></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                        <div className='h-[5px] w-[5px] bg-[#489A98] rounded-full '></div>
                     </div>
                   </div>
                 </div>  
                    <img src={images.enamad} width={111} height={111} className='
                    mr-[10px] max-md:mr-[-10px]
                    ' /> 
              </div>  
           </div>
        </div>
       </div>
       <div className="w-full h-[42px] bg-[#008D8A] mt-[16px] 
                     flex justify-center items-center
                     font-primaryMedium xl:text-[16px] text-[#FFFFFF]
                     gap-[1px] max-smx2:text-[13px]
                     max-md:text-[14px]
                     max-md:relative 
                     max-md:top-[520px]
                     max-smx2:top-[590px]
                     max-lg:top-[520px]
                     max-lg:relative
                     z-[44545]
                     duration-700
                     ">
         <img 
            src={images.copyright} 
            width={15} 
            height={15} 
            className='mb-[18px] mt-[9px]'
            />
        <p>کلیه حقوق این وب سایت متعلق به  آموزشگاه فلان می باشد</p>
      </div>  
    </footer>
  )
}

export default Footer