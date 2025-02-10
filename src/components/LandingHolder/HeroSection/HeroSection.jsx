import images from '../../../assets/landingpng'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';
import SearchForm from '../../common/SearchForm/SearchForm'
import { getHeroDetail } from '../../../core/services/api/Hero';
import { useEffect, useState } from 'react';
import useHero from '../../common/hooks/hookapi/useHero';
import { ClipLoader } from "react-spinners";
import Loading from '../../common/Loading/Loading';
import ErrorComponent from '../../common/ErrorComponent/ErrorComponent';



const HeroSection = () => {
  const { hero, loading, error } = useHero();

  if (loading) {
    return  <Loading loading={loading}/> 
  }
  if (error) {
    return <ErrorComponent error={error} />
  }


  const formStyle =`w-[416.34px] h-[64.81px] ml-[40.8px]
                    shadow-lg pl-[6.3px] rounded-[35px] 
                    py-[7.2px] flex items-center justify-between 
                    border border-[#DFDFDF]
                    backdrop-blur-md
                    max-sm:w-[300px]
                    max-sm:ml-0
                    max-sm:mr-[-10px]
                    max-sm:mt-[-80px]
                    max-sm:h-[50px]
                    smx:w-[340px]
                    smx:h-[64.81px]
                    smx:mr-[-15px]
                    lg:mr-0
                    smx:mt-[-80px]
                    md:mt-0
                    md:w-[416.34px]`;

  const inputStyle = `font-primaryRegular text-right 
                      placeholder:text-[18px] w-[159px] 
                      h-[21.25px] mr-[39.27px] border-none 
                      outline-none
                      max-sm:placeholder:text-[15px]
                      dark:placeholder:dark:text-[#f7f7f7]
                      bg-transparent
                      smx:text-[18px]`            
                      
  const inputdivStyle =`w-[48.57px] h-[49.94px] bg-[#D47300] 
                                      rounded-full flex justify-center 
                                      items-center
                                      max-sm:h-[37px]
                                      max-sm:w-[37px]
                                      smx:h-[49.94px]
                                      smx:w-[48.57px] `                    
  return (
    <section className='h-[652px] flex justify-center   dark:bg-gray-800 '>
        <div className='h-[625px] flex max-md:w-full max-lg:w-full w-[1247px] pt-[11px] max-md:justify-end mt-[1px] justify-between max-lg:justify-end max-md:px-[10px] max-lg:px-[60px] xl:pt-[11px]
                        xl:px-0
                        xl:w-[1247px]
                        xl:justify-between
                        xl:mr-0
                        lg:w-[1024px]
                        lg:justify-center
                        lg:mr-[70px]
                        lg:px-[10px]
                        lg:mt-[30px]
                        duration-700
                        '>
         <div className="w-[604px] h-[447px] mt-[88px] mb-[36px] ml-[107px] max-md:hidden max-lg:hidden">
            <div className='relative right-[60px] top-[1px] w-[604.3px] h-[447px] lg:w-[500px] xl:w-[604px]'>
               <img src={images.shape}/>
            </div>
               <div className='w-[200px] h-[139px] drop-shadow-lg
                                 max-lg:hidden   
                                 xl:grid
                                 grid relative 
                                 xl:bottom-[460px] 
                                 xl:right-[105px]
                                 lg:bottom-[510px]
                                 lg:right-[35px]
                                 '>
                    <div className='xl:h-[68px] xl:w-[68px] bg-[#FFB803] 
                                   rounded-full flex justify-center 
                                   items-center absolute 
                                   xl:left-[72px] 
                                   xl:bottom-[100.5px]
                                   lg:w-[64px]
                                   lg:h-[64px]
                                   lg:left-[55px]
                                   lg:bottom-[100.5px]
                                   '>
                         <img 
                             src={images.Student} 
                             width={45} 
                             height={45}
                         />
                    </div>
                <p style={{direction: 'rtl'}} 
                   className='font-primaryRegular text-[27px] xl:w-[200px] 
                              xl:h-[105px]  flex justify-center bg-[#FFFFFF] shadow-lg
                              items-center rounded-[10px] mt-[5px] pt-[20px]
                               lg:w-[170px]
                               lg:h-[90px]
                               text-black
                              
                              '>
                            <span className='xl:text-[27px] lg:text-[22px]' > {hero.studentCount} +</span> 
                              &nbsp;
                              <span className='xl:text-[27px] lg:text-[22px] relative left-[-4px]'>دانشجو</span>
                </p>
             </div>
              <div  className='w-[200px] h-[139px] drop-shadow-lg 
                                font-primaryRegular text-[27px] grid 
                                relative  xl:left-[395px] xl:bottom-[152px] 
                                max-lg:hidden
                                lg:grid
                                lg:relative
                                lg:left-[280px]
                                lg:bottom-[225px]
                                xl:grid
                               
                                '>
 
                <div className='bg-[#E48900] xl:h-[68px]  xl:w-[68px] 
                                flex justify-center 
                                items-center absolute xl:right-[60px] 
                                bottom-[106px] shadow- rounded-full
                                z-[244]
                                lg:right-[79px]
                                lg:w-[64px]
                                lg:h-[64px]
                               '>
                   <img 
                           src={images.Teacher} 
                           width={45} 
                           height={45}  
                      />
               </div>
               <p   dir="rtl"

                      className='xl:w-[200px] xl:h-[105px] 
                                 shadow-lg text-center items-center 
                                 flex justify-center pt-[10px] rounded-[10px]
                                 relative   bottom-[2px] bg-[#FFFFFF]
                                 lg:w-[170px]
                                 lg:h-[90px]
                                 text-black
                                 ' >
                          <span className='xl:text-[27px] lg:text-[22px] '  > {hero.teacherCount}+ </span>
                           &nbsp;  
                           <span className='xl:text-[27px] lg:text-[22px] relative left-[-4px]' >مدرس</span>
                   </p>
                  </div>
              </div>
              <div className="mt-[171px] mb-[118px]  h-[281.54px] 
                             text-right grid w-[494px]
                             justify-end 
                             max-md:px-[10px]
                             max-md:mt-[-30px]
                             max-md:justify-end
                             max-md:text-right
                             max-lg:justify-end
                             max-lg:text-right
                             max-lg:mt-[50px]
                             lg:mt-[120px]
                             xl:mt-[171px]
                             ">
                <p className="font-primaryRegular mr-[6.2px] 
                              justify-end font-bold text-[60px]
                              max-md:text-[50px]
                              max-sm:text-[40px]
                              max-md:mr-[-4.5px] text-black
                              dark:text-[#f7f7f7]
                              ">عنوان <span className="text-[#01CEC9] 
                                                         drop-shadow-[#0000004D]"
                              >آموزشگاه</span>
                </p>
                 <p className="font-primaryRegular text-[#555555] text-[20px] 
                              mt-[23.61px] mb-[28.44px] mr-[6.2px] 
                              max-md:text-[15.5px]
                              max-md:mb-[110px]
                              max-md:mr-[-4.5px]
                              max-sm:text-[14px]
                              dark:text-[#f7f7f7]

                                                 "
                 
                                               
                 >مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب 
                <br/>
                 با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
                </p> 
                 <SearchForm  
                   formStyle={formStyle}
                   inputStyle={inputStyle}
                   inputdivStyle={inputdivStyle}
                 />
            </div>
         </div>
    </section>
  )
}

export default HeroSection