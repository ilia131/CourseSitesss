import images from '../../../assets/landingpng'
import SwiperComponent from "./SwiperComponent/SwiperComponent"
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';

const CourseSection = () => {
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
  
    <section className=' xl:justify-center  
                      dark:bg-gray-800
                       grid  max-md:w-full sm1:w-full'
                       style={{backgroundColor:bgColor}}
                       >
       <div className='xl:w-[1247px] justify-center grid 
                       max-md:w-full
                       duration-700
                       xl:mt-[112px]
                       max-md:mt-[20px]
        '
        style={{backgroundColor:bgColor}}

        >
          <div className='xl:w-[319px] h-[93px] grid xl:ml-[35px] xl:mb-[41px]
                          max-md:ml-[13px] 
          ' >
              <div className='flex h-[57.64px] items-center 
                              gap-[10px] justify-center'>
                 <p className='font-primaryMedium text-[#000000] xl:text-[35px]
                                 h-[57.64px]  xl:ml-[20px]
                                 max-md:text-[25px]
                                 md:text-[30px]
                                 dark:text-[#f7f7f7]
                                 ' >دوره های آموزشی</p>
                 <div className='h-[13px] w-[13px] bg-[#01CEC9] rounded-md 
                                 max-md:mb-[12px] md:mb-[5px] xl:mb-0'></div>
              </div>
              <div>
                 <p className='xl:w-[319px] h-[32.02px] font-primaryRegular
                               text-[#AAAAAA] xl:text-[20px] 
                                flex justify-center mt-[2px]
                                max-md:text-[16px]
                                max-md:mt-[-15px]
                                md:text-[18px]
                                '
                                style={{color: bgColor === "" ? '#AAAAAA': textColor
                                }}
                                >به روز ترین دوره هایی که میتونید پیدا کنید</p>
              </div>
          </div> 
        </div>   
         <div className='text-left max-md:flex xl:w-[1247px] 
                        max-md:w-full 
                        max-md:justify-start
                        lg:px-[140px]
                        xl:px-0
                        
                        ' >
           <div className='flex items-center gap-[6px] ml-[30px]
                           max-md:ml-0 
                           xl:px-0
                           max-md:px-3
                           max-md:mt-[20px]
                           md:mt-[20px]
                           xl:mt-0       
                               '>
              <img 
                    src={images.arrowdore} 
                    width={15} 
                    height={15} 
              />
              <p className='font-primaryRegular text-[#AAAAAA] mb-[2px]
                            '
                            style={{color: bgColor === "" ? '#AAAAAA': textColor
                            }}
                            >همه دوره ها</p>
            </div>
          </div>    

        <div className='xl:w-[1247px] xl:mt-[-420px] max-md:mt-[-380px]   max-md:grid 
                        max-md:justify-center max-lg:grid max-lg:w-full
                        sm1:w-full max-lg:justify-center max-lg:mt-[-380px]
                        lg:w-full lg:grid lg:justify-center lg:mt-[-380px]
                        '>  
         <div className='md:w-[324px] md:h-[420px]  
                         max-md:mt-[20px] max-md:w-[300px]'>   
            <img src={images.rec23} className='xl:relative xl:top-[397px] xl:left-[930px]
              smx4:relative smx4:left-[280px]
              max-md:relative  max-md:top-[380px] max-lg:relative max-lg:top-[390px]
              lg:top-[390px] lg:relative
            ' />
          </div>    
           <SwiperComponent /> 
        </div> 
    </section>
   
  )
}

export default CourseSection