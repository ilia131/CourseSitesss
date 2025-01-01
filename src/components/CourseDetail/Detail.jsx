import React from 'react'
import images from '../../assets/img/coursDetail'

const Detail = () => {
  return (
    <>
   <div className=" w-[89%] h-[570px]  border-t-[#F6F6F6] border-b-[#F6F6F6] border-t-2 border-b-2 absolute top-[186px] right-[22px] flex flex-wrap">
          
          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative mt-5"> 
          
          <div className=" w-[133px] h-[44px] absolute top-[12px] right-[74px] flex flex-wrap " >
                <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> دسته بندی  </span>
                <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > فرانت اند  </span>
          </div>

          <div className=" w-[28px] h-[28px] absolute top-[22px] right-[29px] " >
            <img src={images.file} className=" w-[28px] h-[28px]  "/>
          </div>      
          
          </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
            
              <div className=" w-[133px] h-[44px] absolute top-[12px] right-[74px] flex flex-wrap " >
                <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> پیش نیاز ها </span>
                <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351] " > HTML , CSS , JS </span>
              </div>
              
              <div className=" w-[28px] h-[28px] absolute top-[22px] right-[29px] " >
                  <img src={images.time} className=" w-[28px] h-[28px]  "/>
              </div>      
               
          </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
          
             <div className=" w-[150px] h-[44px] absolute top-[12px] right-[74px] flex flex-wrap  " >
                <span className=" w-full h-[50%] text-[14px] leading-[23px] font-normal text-[#888888] "> نوع اموزش </span>
                <span className=" w-full h-[50%] text-[16px] leading-[23px] font-normal text-[#005351]" > حضوری و غیر حضوری </span>
              </div>

              <div className=" w-[28px] h-[28px] absolute top-[22px] right-[29px] " >
                <img src={images.form} className=" w-[28px] h-[28px]  "/>
              </div>      
             </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
            
            <div className=" w-[133px] h-[44px] absolute top-[12px] right-[74px] flex flex-wrap " >
                  <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> وضعیت دوره </span>
                  <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > درحال برگزاری </span>
                </div>

            <div className=" w-[28px] h-[28px] items-center justify-center flex  absolute top-[22px] right-[29px]  " >
              <img src={images.tik} className=" w-[28px] h-[28px]  "/>
            </div>      
          </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative "> 
             
            <div className=" w-[133px] h-[44px] absolute top-[12px] right-[74px] flex flex-wrap " >
                  <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> تاریخ شروع دوره </span>
                  <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > 1403/02/12 </span>
            </div>

            <div className=" w-[28px] h-[28px] absolute top-[22px] right-[29px] " >
            <img src={images.time} className=" w-[28px] h-[28px]  "/>

              </div>      
            </div>

          <div className=" w-full h-[71px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">
            
            <div className=" w-[133px] h-[44px] absolute top-[12px] right-[74px] flex flex-wrap " >
              <span className=" w-full h-[50%]  text-right text-[14px] leading-[23px] font-normal text-[#888888]"> تاریخ پایان دوره  </span>
              <span className=" w-full h-[50%]  text-right text-[16px] leading-[23px] font-normal text-[#005351]" > 1403/06/09 </span>
            </div>

            <div className=" w-[28px] h-[28px] absolute top-[22px] right-[29px] " >
            <img src={images.time} className=" w-[28px] h-[28px]  "/>
            </div>      
         </div>

        </div>
    </>
  )
}

export default Detail