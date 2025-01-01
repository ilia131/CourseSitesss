import React from 'react'
import SearchForm from "../../components/common/SearchForm/SearchForm";
import images from "../../assets/img/News";

const HeroSection = () => {
    const placeHolder ='چی میخوای یاد بدونی؟... '
    const formStyle =`w-[100%] h-[64.81px] 
    shadow-lg pl-[6.3px] rounded-[35px] 
    py-[7.2px] flex items-center justify-between 
    border border-[#DFDFDF]
    font-['BYekan1']
    backdrop-blur-md `;
    const inputStyle = `font-primaryRegular text-right 
                          placeholder:text-[18px] w-[159px] 
                          h-[21.25px] mr-[39.27px] border-none 
                          outline-none font-['BYekan1']
                          text-[#AAAAAA]
                          max-sm:placeholder:text-[15px]
                          dark:placeholder:dark:text-[#f7f7f7]
                          bg-transparent
                          smx:text-[18px]`;            
                          
      const inputdivStyle =`w-[48.57px] h-[49.94px] bg-[#D47300] 
                                          rounded-full flex justify-center 
                                          items-center
                                          max-sm:h-[37px]
                                          max-sm:w-[37px]
                                          smx:h-[49.94px]
                                          smx:w-[48.57px] ` ;
 
 
 
    return (
    
    <>
    <div className=" w-[76%] max-xl:w-[80%] max-lg:w-[90%] max-smx3:w-[95%] h-[500px] mr-auto ml-auto  ">
          <div
            dir="rtl"
            className=" w-[98%] h-[272px] flex ml-auto mt-[74px] rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[10px] rounded-br-[10px] bg-[#EBF9F982] shadow-[0_1px_2px_0px_rgba(0,0,0,0.4)] "
          >
            <div className=" w-[55%] h-[100%]  relative ">
              <div className=" w-[300px] h-[86px] flex flex-wrap absolute right-[33px] top-[40px]  ">
                <div className=" w-[14px] h-[14px] rounded-full bg-[#01CEC9] relative top-5   "></div>

                <div className=" w-[80%] h-[50%] font-bold text-[35px] leading-[50px] text-[#000000] mr-3 ">
                  اخبار و مقالات
                </div>

                <div className=" w-[60%] h-[50%] font-normal text-[20px] leading-[45px] text-[#AAAAAA] mr-6">
                  با ما خودت رو به روز کن
                </div>
              </div>
              
              <div dir='ltr' className="w-[90%] max-md:w-[160%] h-[64px]  absolute top-[158px] right-[55px] max-md:right-[35px] max-smx:right-[20px] flex ">
                
                <SearchForm 
                  placeholder={placeHolder}
                  formStyle={formStyle}
                  inputStyle={inputStyle}
                  inputdivStyle={inputdivStyle}
                />
             
              </div>
            </div>

            <img
              className="w-[45%] h-[490px] relative bottom-[46px] right-[25px] max-md:hidden "
              src={images.Student}
              alt=""
            />
          </div>
        </div>

    </>
  )
}

export default HeroSection