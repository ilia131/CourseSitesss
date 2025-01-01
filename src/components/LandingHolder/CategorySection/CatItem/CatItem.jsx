import { Fragment } from "react"



const CatItem = ({title, src, width, height, mt , mbq}) => {
  return (
    <Fragment>
              <div  className='xl:w-[185.32px] xl:h-[185.32px] rounded-[23px]
                               flex justify-center rotate-45 bg-[#FFFFFF] 
                               bg-gradient-to-r z-[23234] hover:from-[#FFC700] 
                               hover:to-[#D47300] text-[#006865] hover:text-white 
                               hover:shadow-none shadow-3xxl cursor-pointer  
                               max-md:w-[110px] 
                               max-md:h-[110px] 
                               max-md:mt-[50px]
                               max-md:ml-[3px]
                               smx:w-[120px] 
                               smx:h-[120px]
                               smx2:h-[125px]
                               smx2:w-[125px]
                               smx3:w-[130px]
                               smx3:h-[130px]
                               md:w-[120px]
                               md:h-[120px]
                               lg:h-[165.32px]
                               lg:w-[165.32px]
                               duration-500
                               group'>
                    <div className='grid justify-center xl:w-[185.32px] 
                                    xl:h-[185.32px] align-middle justify-items-center 
                                    items-center gap-2 -rotate-45'>
                         <p className={`flex justify-center  
                                       xl:text-[25px] 
                                       max-md:text-[13px]
                                       text-center font-primaryMedium font-bold 
                                       max-md:hidden max-lg:hidden 
                                       lg:text-[24px]
                                       `}
                            style={{width:width , marginTop:mt , height:height}}
                         >{title}</p> 
                         <p className='text-[10px] mt-[23px] 
                                       w-[46px] 
                                       font-primaryMedium  text-center
                                       font-bold 
                                       smx:text-[11px] 
                                       smx:w-[50px]
                                       smx2:text-[14px]
                                       smx2:w-[65px]
                                       lg:hidden
                                       '
                                       style={{ marginBottom:mbq}}
                                       >{title}</p>
                        <div className="lg:w-[65px] lg:h-[65px] 
                                        max-md:w-[30px] max-md:h-[30px]
                                        max-md:mb-[30px]
                                        md:w-[30px] md:h-[30px]
                                        md:mb-[20px]
                        ">
                         
                         <img 
                              src={src} 
                            
                              className='group-hover:brightness-0 group-hover:invert 
                              mt-[11px]' 
                         />
                         </div>
                    </div>
               </div>
    </Fragment>
  )
}

export default CatItem