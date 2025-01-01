import React from 'react'
import images from "../../assets/img/News";

const SideMenu = () => {
  return (
    <>
                <div className="w-[100%] h-[407px] bg-[#ffffff]  dark:bg-gray-200  rounded-[10px] mb-9 flex flex-wrap relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
              <div className=" w-[80%] h-16 mr-auto ml-auto  flex-col mt-3 ">
                <div className=" w-[100%] h-[50%] relative  pl-[23%] text-[20px] leading-[28px] font-bold text-[#005351] ">
                  مطالب پیشنهادی
                </div>
                <div className=" w-[100%] h-[50%] relative  pl-[10%] align-middle text-[13px] leading-[27px] font-normal text-[#AAAAAA] ">
                  این مطالب هم میتونه براتون جالب باشه
                </div>
              </div>

              <div
                dir="rtl"
                className=" w-[85%] h-[320px] relative  flex flex-col mr-auto ml-auto pt-3  "
              >
                <div className=" w-[85%] h-[70px]   relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-full pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                      چرا فیگما؟
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.figma} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    چگونه یک مدیر پروژه باشیم؟
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.employ} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[130%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    سرعت تکنولوژی در قرن ۲۱
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.run} alt="" />
                </div>
                
              </div>
            </div>

            <div className="w-[100%] h-[407px] bg-[#ffffff] dark:bg-gray-200  rounded-[10px] mb-9 pt-[6px] flex-wrap relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
              <div className=" w-[80%] h-16 mr-auto ml-auto  flex-col mt-3 ">
                <div className=" w-[100%] h-[50%] relative  pl-[23%] text-[20px] leading-[28px] font-bold text-[#005351] ">
                  مطالب پیشنهادی
                </div>
                <div className=" w-[100%] h-[50%] relative  pl-[10%] align-middle text-[13px] leading-[27px] font-normal text-[#AAAAAA] ">
                  این مطالب هم میتونه براتون جالب باشه
                </div>
              </div>

              <div
                dir="rtl"
                className=" w-[85%] h-[320px] relative  flex flex-col mr-auto ml-auto pt-3  "
              >
                <div className=" w-[85%] h-[70px]   relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[2%] text-[11px] leading-[17px] font-bold text-[#006865] ">
                    شروع یادگیری توسعه وب با ری اکت
                    </div>

                    <div className=" w-[122%] pr-[74%] gap-2 h-10 flex ">
                      <div className="flex gap-[2px] text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         58
                         <img src={images.heart} alt="" />

                      </div>
                      <div className="flex text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         
                         124
                         <img src={images.eyseb} alt="" />
                      </div>
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Ads} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[2%] text-[11px] leading-[17px] font-bold text-[#006865] ">
                    شروع یادگیری توسعه وب با ری اکت
                    </div>

                    <div className=" w-[122%] pr-[74%] gap-2 h-10 flex ">
                      <div className="flex gap-[2px] text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         58
                         <img src={images.heart} alt="" />

                      </div>
                      <div className="flex text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         
                         124
                         <img src={images.eyseb} alt="" />
                      </div>
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Ads} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[140%] pr-[2%] text-[11px] leading-[17px] font-bold text-[#006865] ">
                    شروع یادگیری توسعه وب با ری اکت
                    </div>

                    <div className=" w-[122%] pr-[74%] gap-2 h-10 flex ">
                      <div className="flex gap-[2px] text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         58
                         <img src={images.heart} alt="" />

                      </div>
                      <div className="flex text-[13px] leading-[36px] font-normal text-[#AAAA]">
                         
                         124
                         <img src={images.eyseb} alt="" />
                      </div>
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Ads} alt="" />
                </div>
                
              </div>
            </div>

            <div className="w-[100%] h-[407px] bg-[#ffffff] dark:bg-gray-200  rounded-[10px] mb-9 pt-[6px] flex-wrap relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] ">
              <div className=" w-[80%] h-16 mr-auto ml-auto  flex-col mt-3 ">
                <div className=" w-[100%] h-[50%] relative  pl-[23%] text-[20px] leading-[28px] font-bold text-[#005351] ">
                  مطالب پیشنهادی
                </div>
                <div className=" w-[100%]  h-[50%] relative  pl-[10%] align-middle text-[13px] leading-[27px] font-normal text-[#AAAAAA] ">
                  این مطالب هم میتونه براتون جالب باشه
                </div>
              </div>

              <div
                dir="rtl"
                className=" w-[85%] h-[320px] relative  flex flex-col mr-auto ml-auto pt-3  "
              >
                <div className=" w-[85%] h-[70px]   relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-full pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    دوره جامع انگولار
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.Angolar} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[138%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    دوره جامع فیگما
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.figma} alt="" />
                </div>
                <div className=" w-[85%] h-[70px] mt-9  relative  flex flex-wrap rounded-lg bg-[#F9F9F9] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                  
                  <div className="w-[57%] flex flex-col mr-3 pt-[10px] ">
                    <div  className=" w-[130%] pr-[3%] text-[14px] leading-[17px] font-bold text-[#006865] ">
                    سرعت تکنولوژی در قرن ۲۱
                    </div>

                    <div className=" w-full pr-[3%] h-10 text-[11px] leading-[46px] font-normal text-[#01B4AF]">
                      مشاهده مطلب +
                    </div>
                  </div>
                  <img className="w-[37%] absolute left-[-40px] bottom-[-5px]" src={images.React} alt="" />
                </div>
                
              </div>
            </div>
    </>
  )
}

export default SideMenu