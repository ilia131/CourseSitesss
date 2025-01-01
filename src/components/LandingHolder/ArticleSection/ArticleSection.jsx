import React, { useEffect, useState } from 'react'
import images from '../../../assets/landingpng'
import { useBgColor } from '../../BgChangeAdmin/BgColorContext';
import { getNewsCard } from '../../../core/services/api/News';
import { NavLink } from 'react-router-dom';

const ArticleSection = () => {
  const { bgColor , setBgColor} = useBgColor();
  const [card , setCard ] = useState([])
  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const textColor = getComplementaryColor(bgColor);

  const getNEWS6 = async ()=> {
     const data  = await getNewsCard()
     setCard(data)
     console.log(data?.news)
     
  }

  useEffect(() => {
    getNEWS6()
  },[])


  return (
    <section className=' lg:h-[864.34px] grid justify-center dark:bg-gray-800'
    style={{backgroundColor:bgColor}}

    >
        <div className='xl:w-[1247px] flex justify-center 
                        xl:mt-[126px]
                        max-smx3:mt-[500px]
                        max-smx3:w-full
                        smx3:mt-[500px]
                        md:mt-[550px]
                        lg:mt-[120px]
                       
                        '>
           <div className=' h-[87px]  grid max-md:ml-[30px]
                   max-smx2::ml-0
                            justify-center ml-[25px]'>
               <div className='flex justify-center items-center 
                               h-[54px] gap-[11.13px] max-md:mr-[35px]'>
                  <p className='font-primaryMedium text-[35px] text-[#000000] 
                             max-md:text-[25px]   w-[179px] h-[54px] dark:text-[#f7f7f7]  text-center'>اخبار و مقالات</p>
                  <div className='h-[13px] w-[13px] bg-[#01CEC9] 
                                  rounded-full max-md:ml-[-25px]
                                  max-md:mb-[15px]
                                  '>                    
                  </div>
               </div>
               <div className=' h-[30px]' style={{direction:'rtl'}}  >
                   <p className='font-primaryRegular text-[#AAAAAA] text-[20px] 
                   max-md:text-[16px]
                   text-center xl:mr-[5px] mr-[20px] 
                   
                   max-md:mt-[-10px]' 
                   style={{color: bgColor === "" ? '#AAAAAA': textColor
                   }}
                   > خـــودت رو با خـــبر کن ! 
                   </p>
               </div>
           </div>
          
        </div> 
        <div className='xl:w-[1247px] flex  justify-center
                        xl:mt-[55.5px] max-smx3:mt-[10px]
                        smx3:mt-[30px] 
                        lg:w-full xl:ml-[18px]
                        duration-700
                        max-md:ml-[10px]
                        max-smx2:ml-0
         
        '>
            <div className='xl:w-[1068px] h-[474px] lg:w-[1024px] max-xl:flex
            max-xl:justify-center
            ' >
              <div  className='xl:flex h-[474px] xl:gap-[22px] lg:flex
                         max-smx3:grid 
                         max-xl:flex
                         max-xl:gap-[22px]
                         smx3:grid
                         duration-700'>         
                 <div className='grid xl:gap-[24px] duration-700'>   
                    <div className='xl:flex xl:gap-[22px]
                     max-smx3:flex max-smx3:gap-[10px]
                     smx3:flex smx3:gap-[10px]
                     
                    '>
                       <div className='xl:w-[250px] xl:h-[250px] 
                       lg:w-[210px] lg:h-[210px]
                       max-smx3:w-[150px] max-smx3:h-[150px]
                       smx3:w-[180px] smx3:h-[180px]
                       relative group
                       duration-700'>
                          <img src={images.anitem1} className='
                              object-cover transition duration-300 ease-in-out  
                              group-hover:blur-[5px] 
                              ' />
                                 <div className='w-full h-full 
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                               flex justify-center
                                               text-center items-center
                                                 bg-gradient-to-t from-[rgb(0,43,42,0.8)]
                                               to-[rgb(0,252,246,0.8)]
                              '>
                                <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900]  text-black
                                font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                                max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                                rounded-[20px] xl:mt-[121px]  cursor-pointer
                                flex justify-center items-center  max-smx3:w-[100px]
                                '
                                to={`news-Detail/ea25a551-0ab0-ef11-b6ed-e2b8c6c9e309`}
                                >
                                    مطالعه مطلب
                                </NavLink>
                                
                              </div> 
                          
                       </div>
                      <div className='xl:w-[250px] xl:h-[250px] 
                      max-smx3:w-[150px] max-smx3:h-[150px]
                      smx3:w-[180px] smx3:h-[180px]  lg:w-[210px] lg:h-[210px]
                      relative group duration-700'> 
                          <img src={images.anitem2} className='
                              object-cover transition duration-300 ease-in-out  
                              group-hover:blur-[5px] 
                              '/>
                              <div className='w-full h-full 
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                               bg-gradient-to-t from-[rgb(0,43,42,0.8)]
                                               to-[rgb(0,252,246,0.8)]
                                               flex justify-center
                                               text-center items-center
                              '>
                                <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900] 
                                font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                                max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                                rounded-[20px] xl:mt-[121px]  cursor-pointer text-black
                                flex justify-center items-center  max-smx3:w-[100px]' 
                                to={`news-Detail/3311d299-dcb3-ef11-b6ee-fd09e32c9077`}
                                >
                                    مطالعه مطلب
                                </NavLink>
                                
                              </div> 
                      </div>
                      </div> 
                      <div className='xl:w-[522px] xl:h-[200px] 
                      max-smx3:w-[310px] max-smx3:h-[150px] max-smx3:mt-[10px]
                      smx3:w-[370px] smx3:h-[180px] smx3:mt-[10px] xl:mt-[-18px]
                      relative group  lg:w-[430px] lg:h-[210px] lg:mt-[-35px] duration-700'>
                      <img src={images.anitem4} className='
                              object-cover transition duration-300 ease-in-out  
                              group-hover:blur-[5px] ' />
                     <div className='w-full h-full max-smx3:h-[121px]
                                               smx3:h-[148px] smx3:mt-[-2px]
                                               xl:mt-[2px]
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                                 bg-gradient-to-t from-[rgb(0,43,42,0.8)]
                                               to-[rgb(0,252,246,0.8)]
                                               flex justify-center
                                               text-center items-center
                                               xl:w-full xl:h-full
                                               lg:w-full lg:h-[168px]
                              '>
                                <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900] text-black
                                font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                                max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                                rounded-[20px] xl:mt-[121px]  cursor-pointer
                                flex justify-center items-center  max-smx3:w-[100px]
                                '
                                to={`news-Detail/ea25a551-0ab0-ef11-b6ed-e2b8c6c9e309`}
                                >
                                    مطالعه مطلب
                                </NavLink>
                                
                              </div> 
                     </div> 
                 </div>    
                  <div className='grid xl:gap-[24px] '>
                     <div className='xl:w-[522px] xl:h-[200px] relative group items-center
                      max-smx3:w-[310px] max-smx3:h-[150px] max-smx3:mt-[-40px]
                      smx3:w-[370px] smx3:h-[180px] smx3:mt-[-45px] xl:mt-0
                      lg:w-[430px] lg:h-[210px] lg:mt-[1px] duration-700
                     '>
                        <img src={images.anitem3} className='
                              object-cover transition duration-300 ease-in-out  
                              group-hover:blur-[5px] 
                              ' />
                               <div className='w-full h-full max-smx3:h-[121px]
                                               smx3:h-[148px] smx3:mt-[-2px]
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                                 bg-gradient-to-t from-[rgb(0,43,42,0.8)]
                                               to-[rgb(0,252,246,0.8)]
                                               flex justify-center
                                               text-center items-center
                                               xl:w-full xl:h-full 
                                               xl:mt-[2px]
                                               lg:w-full lg:h-[168px]
                              '>
                            
                                <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900] text-black
                                font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                                max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                                rounded-[20px] xl:mt-[121px]  cursor-pointer
                                flex justify-center items-center  max-smx3:w-[100px]' 
                                to={`news-Detail/ea25a551-0ab0-ef11-b6ed-e2b8c6c9e309`}
                                >
                                    مطالعه مطلب
                                </NavLink>
                              </div>
                      </div>
                      <div className='flex xl:gap-[23px] max-md:flex max-smx3:gap-[10px]
                        max-smx3:mt-[-17px] smx3:gap-[10px] smx3:mt-[-30px] xl:mt-[-8px] lg:mt-[-72px]
                      '>
                       <div className='xl:w-[250px] xl:h-[250px] 
                       max-smx3:w-[150px] max-smx3:h-[150px]
                       smx3:w-[180px] smx3:h-[180px] xl:mt-0
                       relative group items-center
                       lg:w-[210px] lg:h-[210px] lg:mt-[-47px]
                       duration-700
                       '>
                         <img src={images.anitem5} className='
                              object-cover transition duration-300 ease-in-out  
                              group-hover:blur-[5px] 
                              '/>

                               <div className='w-full h-full 
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                               flex justify-center
                                               text-center 
                                               items-center
                                                 bg-gradient-to-t from-[rgb(0,43,42,0.8)]
                                               to-[rgb(0,252,246,0.8)]
                              '>
                            
                                <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900] text-black 
                                font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                                max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                                rounded-[20px] xl:mt-[121px]  cursor-pointer
                                flex justify-center items-center  max-smx3:w-[100px]' 
                                to={`news-Detail/ea25a551-0ab0-ef11-b6ed-e2b8c6c9e309`}
                                >
                                    مطالعه مطلب
                                </NavLink>
                              </div> 
                       </div>
                       <div className='xl:w-[250px] xl:h-[250px] 
                       max-smx3:w-[150px] max-smx3:h-[150px]
                       smx3:w-[180px] smx3:h-[180px] 
                       relative group items-center xl:mt-0
                       lg:w-[210px] lg:h-[210px] lg:mt-[-47px] duration-700
                       '>
                         <img src={images.anitem6} className='
                              object-cover transition duration-300 ease-in-out  
                              group-hover:blur-[5px] 
                              ' /> 
                                   <div className='w-full h-full 
                                               opacity-0 group-hover:opacity-100 
                                               transition-opacity duration-300 
                                               ease-in-out rounded-[20px]
                                               absolute inset-0 
                                               flex justify-center
                                               text-center 
                                               items-center
                                                 bg-gradient-to-t from-[rgb(0,43,42,0.8)]
                                               to-[rgb(0,252,246,0.8)]
                              '>
                            
                                <NavLink className='xl:w-[120px] xl:h-[27.43px] bg-[#E48900] text-black
                                font-primaryMedium font-[400] xl:text-[15px] max-smx3:h-[25px] 
                                max-smx3:text-[13px] smx3:w-[103px] smx3:h-[26px] smx3:text-[14px]
                                rounded-[20px] xl:mt-[121px]  cursor-pointer
                                flex justify-center items-center  max-smx3:w-[100px]'
                                to={`news-Detail/ea25a551-0ab0-ef11-b6ed-e2b8c6c9e309`} >
                                    مطالعه مطلب
                                </NavLink>
                              </div>  
                        </div>
                     </div> 
                 </div> 
              </div>
            </div>
        </div>
        <div className='xl:w-[1247px] max-md:w-full flex
         max-md:ml-[-15px] smx3:mt-[190px] lg:mt-[-90px] xl:mt-0 xl:mr-0
         lg:mr-[40px] md:mr-[50px] cursor-pointer
        justify-center max-md:mt-[100px]'>
            <div className='mt-[28px] mb-[15px] flex h-[20px] items-center gap-[7px] ml-[35px]'>
                 <img src={images.arrowdore} width={15} height={15} />
                 <p className='lg:text-[20px] 
                 md:text-[18px]
                 max-md:text-[16px]
                 max-md:mt-[-3px] font-primaryRegular text-[#AAAAAA]'
                 style={{color: bgColor === "" ? '#AAAAAA': textColor
                 }}
                 >مشاهده بیشتر</p>
            </div>
        </div>
    </section>
  )
}

export default ArticleSection