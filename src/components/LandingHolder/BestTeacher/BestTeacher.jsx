import images from '../../../assets/landingpng'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';


const BestTeacher = () => {
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
    <section className="h-[573px] pt-[106px]
    duration-700 dark:bg-gray-800 
    
    "
    style={{backgroundColor:bgColor}}

    > 
   <div style={{backgroundImage:`url(${images.rec667})`,
             backgroundRepeat:'no-repeat', backgroundPosition:'center', 
              backgroundSize: 'auto 400px',
   }}
    
   >
    <div className=' flex justify-center  h-[467px] 
    duration-700 
    items-center  w-full'>
           <div className="xl:w-[1247px] h-[467px]
                           
                           duration-700
                           max-md:w-full
                           max-md:flex
                           max-md:justify-center
                           max-md:mt-[10px]
                           max-lg:w-full
                           max-lg:flex
                           max-lg:justify-center
                           max-lg:mt-[10px]
                           z-[8888] xl:pl-[117.5px] 
                           xl:pr-[93px] mt-[-27px]
                           lg:w-full 
                           lg:pr-0
                           lg:pl-0
                           lg:px-6 
                           lg:flex
                           lg:justify-center
                           absolute">
              <div className='flex justify-between 
                    max-md:grid 
                    max-md:w-full
                    max-md:justify-center
                    max-lg:grid 
                    max-lg:w-full
                    max-lg:justify-center
                    lg:flex
                    lg:justify-between
                    lg:w-[1024px]
                    lg:px-[40px]
                    xl:px-0
                    duration-700
                    '>
                    <div className='flex  xl:w-[395px] xl:h-[399.9px]  lg:w-[395px] 
                                   lg:h-[395px]
                                   mt-[46px]
                                   max-md:grid
                                   max-md:w-full
                                   max-md:justify-center
                                   max-lg:grid
                                   max-lg:w-full
                                   max-lg:justify-center
                                   '>
                          <div className='grid gap-[5.16px] w-[9px] h-[67.71px] lg:mt-[260px] 
                           max-md:pt-[140px] max-lg:hidden lg:relative lg:left-[20px] xl:left-[4px]
                         '>
                            <div className='h-[9px] w-[9px] rounded-full bg-white'></div>
                            <div className='h-[9px] w-[9px] rounded-full bg-white'></div>
                            <div className='h-[25.71px] w-[9px] rounded-full bg-[#00AFAB]'></div>
                            <div className='h-[9px] w-[9px] rounded-full bg-white'></div>
                         </div>  
                      <div className='relative max-md:w-full 
                                      max-md:flex max-md:justify-center
                                      max-lg:flex max-lg:justify-center
                                      left-[-4px]
                                      '>
                       <div className='relative group 
                                       xl:w-[274.26px] xl:h-[364.35px]
                                       lg:w-[274.26px] lg:h-[364.35px] 
                                       max-md:justify-center
                                       max-md:w-[190px]
                                       mt-[46.31px] z-[555]  lg:left-[120px] lg:bottom-[45px] 
                                       cursor-pointer
                                       max-md:bottom-[100px]
                                       max-md:left-[5px]
                                       max-lg:bottom-[100px]
                                       max-lg:left-[5px]
                                       max-lg:justify-center
                                       max-lg:w-[190px]
                                       '>
                            <img src={images.t1} className=' 
                              object-cover transition duration-300 ease-in-out group-hover:shadow-lg  
                              group-hover:blur-[2px]    
                          ' />                
                             <div className="opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                               bg-gradient-to-b from-transparent 
                                               to-black/90  flex  justify-center
                                               w-[266.5px] left-[4.5px]
                                               max-md:w-[187px]
                                               max-md:h-[255.35px]
                                               max-md:left-[1px]
                                               max-lg:w-[187px]
                                               max-lg:h-[255.35px]
                                               max-lg:left-[1px]
                                              ">
                                   <div className='
                                          w-[219px] h-[64px]  
                                          lg:mt-[262px]
                                          max-md:mt-[130px]
                                          max-lg:mt-[130px]
                                          grid justify-items-center justify-center  
                                        text-[#E6E6E6D9] gap-[10px]
                                         '>
                                      <p className='font-primaryMedium font-[700]
                                      max-md:text-[16px]
                                      text-[20px] max-md:ml-[11px]
                                      max-lg:ml-[11px]
                                      '>مهدی اصغری</p>
                                       <div className='flex justify-center 
                                       max-md:gap-[10px] max-lg:gap-[10px]
                                       lg:gap-[15px]'>
                                          <div className='flex items-center lg:gap-[5px]
                                            max-md:gap-[4px]
                                            max-lg:gap-[4px]
                                           '
                                          >       
                                          <p className='text-[16px]
                                           font-[400] font-primaryRegular
                                          text-[#E6E6E6BF] max-md:text-[12px]
                                          max-lg:text-[12px]
                                          ' 
                                                style={{direction:'rtl'}}>
                                                ۲ دوره آموزشی
                                             </p>  
                                           <div className='w-[18px] h-[18px] max-md:w-[14px]
                                           max-lg:w-[14px]
                                           max-lg:h-[14px]
                                           max-md:h-[14px]'>
                                             <img src={images.play}/>
                                           </div>
                                          </div>
                                          <div className='flex items-center lg:gap-[5px]
                                          max-md:gap-[4px]
                                          max-lg:gap-[5px]
                                          '>   
                                            <p className='text-[16px] text-[#E6E6E6BF]
                                                    font-primaryRegular
                                                    max-md:text-[12px]
                                                    max-lg:text-[12px]
                                            ' 
                                               style={{direction:'rtl'}}
                                            >۱۶۸ دانشجو</p>  
                                          <div className='w-[18px] h-[18px] max-md:w-[14px]
                                           max-md:h-[14px]
                                           max-lg:w-[14px]
                                           max-lg:h-[14px]'>
                                            <img src={images.profile1} width={18} height={18} />
                                          </div>
                                       
                                          
                                        </div>
                                  </div>
                               </div>
                           </div>  
                       </div>
                          <div className='lg:w-[300px] lg:h-[351px] ' >
                           <img src={images.t2} className='
                           relative lg:bottom-[409px] lg:left-[71px] z-[554]
                           max-md:w-[290px] max-md:right-[150px] max-md:bottom-[50px]
                           max-md:hidden
                           max-lg:hidden
                           
                           ' />
                         </div>
                          <div  className='lg:w-[314px] relative lg:bottom-[755px] lg:left-[34px] 
                         z-[553] max-md:hidden 
                         max-lg:hidden'  >
                            <img src={images.t3}   />
                         </div> 
                          <div className='relative lg:bottom-[1135px] lg:w-[327px] lg:right-[-7px]
                          max-md:hidden max-lg:hidden
                          
                          '>
                            <img src={images.t4}  height={340.13}  />
                         </div>   
                      </div>  
                    </div> 
                       <div className='lg:mt-[184px] mr-[4px] max-md:mt-[-150px] max-lg:mt-[-160px]'>
                        <div className='lg:w-[447px] lg:h-[67px] flex
                                        max-md:w-full 
                                        justify-center  gap-[4px]
                                        items-center mt-[3px] pt-[-4px]    
                                      

                                        '
                          style={{ direction:'rtl'}} 
                          
                        >
                          <p className='font-primaryMedium text-[40px]
                           max-md:text-[20px]
                           max-lg:text-[30px]
                          text-[#003231]  
                         
                          '>برترین اساتید</p>
                          <span className='text-[#006865] font-primaryRegular 
                                           text-[25px] mt-[7px] xl:mr-[3px] 
                                           max-md:text-[15px] max-md:mr-[3px] max-md:pb-[4px]
                                           max-lg:text-[20px]
                                           dark:text-[#f7f7f7]
                                           '
                                           style={{color: bgColor === "" ? '#006865': textColor
                                           }}
                                           >رو همینجا پیدا میکنید!!</span>  
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-primaryRegular text-[20px] 
                                         text-[#777777] text-center
                                           xl:w-[385px] h-[61px]  mt-[4px]
                                           max-md:text-[15px]
                                           max-lg:text-[17px]
                                           dark:text-[#989898]
                                         '
                                         style={{color: bgColor === "" ? '#777777': textColor
                                         }}
                                         >
                                برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی
                                <br/>
                                استان مازندران رو بهترین بشناسیم
                            </p>
                        </div> 
                    </div>  
                </div>
          </div>
    </div>
  </div>
    </section>
  )
}

export default BestTeacher