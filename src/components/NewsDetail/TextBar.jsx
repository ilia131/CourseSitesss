import React from 'react'
import images from "../../assets/img/NewsDetail";

const TextBar = ({detail}) => {
  return (
    <>
        <div dir='rtl' className=" h-[1580px] w-[100%] flex flex-wrap gap-0 mt-5 shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] m-auto overflow-hidden relative rounded-2xl bg-[#ffffff]  bg-gradient-custom2">
          <div className="w-[100%] bg-white
          
          
          dark:bg-gray-200 text-[18px] max-smx3:text-[14px] leading-[27px]
           font-normal text-right text-slate-600 pl-10 pr-10 " > 
            {detail?.miniDescribe}
           </div>
           
           <img className="mx-auto h-[320px] my-4 w-full bg-gradient-to-r from-[#A259FF] to-[#D47300]"  src={detail?.currentImageAddressTumb} alt="" />


           <div className="w-[100%] bg-white dark:bg-gray-200 text-[18px] max-smx3:text-[14px] leading-[27px] font-normal text-right text-slate-600 pl-10 pr-10 " > 
             {detail?.describe}
           </div>
          
          <button class=" absolute bottom-[44px] right-[35%] rounded-full border border-[#01CEC9] py-2 px-4 text-center text-[20px] font-normal leading-[32px] transition-all shadow-sm hover:shadow-lg text-[#006865] dark:text-blue-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             مطالعه بیشتر +
          </button>
        </div>
    </>
  )
}

export default TextBar