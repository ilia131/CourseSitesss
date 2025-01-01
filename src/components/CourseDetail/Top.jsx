import React from 'react'
import images from '../../assets/img/coursDetail'

const toPersianNumber = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[digit]);
};

const Top = ({detail , ReserveCOurseUSer}) => {
  return (
    <>
      <div className=" h-[101%] max-sm:h-[360px] w-[49%] max-sm:w-[90%] max-sm:mx-auto bg-[#FFFF] dark:bg-gray-300 flex flex-wrap rounded-2xl shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]" 
      >
        
        <div className=" h-[41px] w-[100%]  flex gap-[30%] max-lg:gap-[5%] max-md:gap-0 mt-[31px] max-md:mt-[20px] " >
        
        
            <div className=" h-[41px] w-[335px] mr-[33px] text-[25px] max-smx2:text-[20px] leading-[42px] font-bold align-middle flex flex-nowrap text-[#333333]">
                <p> {detail?.title} </p> 
            </div>
            <div className=" h-[27px] w-[27px]" >
              <img src={images.save} alt="" />
            </div>
        </div>

        <div className=" w-[100%]  ">
             <div className=" h-[100%] w-[93%]  
             mr-[33px]
             m-auto text-[18px] max-smx2:text-[15px] leading-[27px] font-normal aling-right text-slate-600"> 
             {detail?.miniDescribe}
            </div>
        </div>
        
        <div className=" h-[50px] w-full  justify-between flex max-md:flex-col   ">

            <div className=" h-[43px] w-[400px] flex">
            
               <img src={images.person} alt="" className=" h-[21px] w-[18px] mr-[10%]" />

               <span className=" text-[20px] 
               
               font-normal text-[#005B58] mr-[8px] mt-[-6px] "> {detail?.teacherName}</span>

            </div>

            <div className=" h-[25px] w-[210px] flex max-md:mr-[5%]" >
            
               <span className=" text-[23px] leading-[10px] font-normal text-[#005B58] max-md:order-3"> {detail?.cost} </span>
               <span className=" text-[14px] leading-[15px] font-normal ml-3 mr-1 text-[#006865] max-md:order-2"> تومان </span>
               <img src={images.money} alt="" className=" h-[20px] w-[23px] max-md:order-1" />

               
            </div>
        </div>
        
        <div className=" h-[55px] w-[100%] flex  ">
            <button className=" h-[55px] w-[347px] m-auto bg-[#FF8A00] rounded-[9px] relative"
            onClick={ReserveCOurseUSer}
            > 
            <span className=" mr-8 mt-[50px] text-[25px] max-smx2:text-[19px] text-[#FFFFFF] font-bold "> شرکت در دوره! </span>
            <img src={images.Bpik} alt="" className=" h-[20px] w-[23px] mr-[80px] mt-[-25px]  " />

             </button>

        </div>
    </div>

    <div className=" h-[101%]  w-[49%] max-sm:w-[90%] max-sm:mx-auto " >
    <img src={detail?.imageAddress} className=" w-[101%] h-[103%]
     bg-gradient-to-r from-[#A259FF] to-[#D47300] rounded-md
    "/>
    </div>
    </>
  )
}

export default Top