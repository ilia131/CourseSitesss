import React from 'react'
import images from "../../assets/img/NewsDetail";


    const CardNewsDetail = () => {
        return (
            <>
            <div className=" h-[480px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap mt-7 relative ">

              <div className=" h-[50px] w-[92%] rounded-t-xl mt-[16px] m-auto bg-[#E8E8E8] shadow-[0_1px_2px_0px_rgba(0,0,0,2)] relative">
        
                    <span className=" w-[70%] h-[21px] text-right text-[20px] leading-[21px] font-normal text-[#555555] absolute top-[14px] right-[27px]">
                         مطالب پیشنهادی
                    </span>

              </div>



            <div className=" w-[92%] h-[393px]  flex flex-wrap relative m-auto">
                <div className=" w-[100%] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
                        
                        <div className=" w-[30.5%] h-[84px]  rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] ">
                        <img className=" w-[100%] h-[100%] " src={images.ReactA}/>

                        </div>
                        
                        <div className=" w-[55%] h-[50px] absolute top-[14px] left-[21px] max-lg:left-4 text-right text-[17px] leading-[21px] font-normal text-[#005351]                     
                                        ">
                        دوره تخصصی ترفند هایه طراحی فرانت اند
                        </div>
        
                        <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                        مشاهده دوره + 
                        </span>
                        
                    </div>

                    <div className=" w-[100%] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative
                                    
                                    ">
                        
                        <div className=" w-[30.5%] h-[84px] rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] 
                                        ">
                                    
                        <img className=" w-[100%] h-[100%] " src={images.Employ}/>

                        </div>
                        
                        <div className=" w-[55%] h-[50px] absolute top-[14px] left-[21px] max-lg:left-4  text-right text-[17px] leading-[21px] font-normal text-[#005351]
                                    
                                    
                                        ">
                        دوره تخصصی ترفند هایه طراحی فرانت اند
                        </div>
        
                        <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                        مشاهده دوره + 
                        </span>
                        
                    </div>

                    <div className=" w-[100%] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative">
                        
                        <div className=" w-[30.5%] h-[84px]  rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] 
                                        ">
                        <img className=" w-[100%] h-[100%] " src={images.Fig}/>

                        </div>
                        
                        <div className=" w-[55%] h-[50px] absolute top-[14px] left-[21px] max-lg:left-4  text-right text-[17px] leading-[21px] font-normal text-[#005351]
                                        
                                        ">
                        دوره تخصصی ترفند هایه طراحی فرانت اند
                        </div>
        
                        <span className=" w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]
                                        " > 
                        مشاهده دوره + 
                        </span>
                        
                    </div>

                    
                </div>
                
             </div>
 
            </>
        )
}
    

export default CardNewsDetail