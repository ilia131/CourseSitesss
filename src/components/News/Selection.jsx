import React from 'react'

const Selection = () => {
  return (
    <>
     <div dir="rtl" className="w-[100%]  flex max-cd:flex-col gap-8 max-cd:gap-2 mb-6  ">
              <div className=" w-[251px] h-[38px]  relative text-[26px] leading-[39px] font-bold text-[#005351]  dark:text-gray-50 ">
                جدیدترین اخبار و مقالات  
              </div>
              <div className=" w-[207px] h-[38px]  relative ">
                <div className="h-full w-full flex justify-center bg-[#FFFFFF] rounded-[31px] shadow-[0px_1px_3px_0px_#00000025]">
                  <img src="../36.svg" className="h-[21px] w-[21px] my-auto ml-[15%] "/>
                  <button className="text-[18px] leading-4 font-normal text-[#333333] ">جدیدترین</button>
                  <img src="../35.svg" className="h-[13px] w-[15px] my-auto mr-[15%] "/>
                </div>  
              </div>
            </div>
    </>
  )
}

export default Selection