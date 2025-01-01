import React from 'react'
import images from '../../assets/img/NewsDetail/index'

const RateBar = () => {
  return (
    <>

        <div className="w-[100%] h-[52px] flex relative mt-[20px] bg-white dark:bg-gray-200 rounded-lg shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
            
             <div className="h-[100%] flex absolute left-6 max-lg:left-1 gap-6 ">
                    <div className="flex items-center gap-2 order-2 ">
                        <img className="order-2" src={images.share} alt="" />
                        <div className="flex items-center text-[16px] font-normal text-[#888888] order-1">
                        اشتراک گزاری
                        </div>
                    </div>
                    <div className="flex items-center gap-3 order-1">
                        <div className="flex items-center gap-1 ">
                            
                            <img className="order-1" src={images.like} alt="" />
                            <div className="flex items-center text-[16px] font-normal text-[#888888] order-2">
                            ۲۵
                            </div>
                        </div>
                        <div className="flex items-center gap-1 ">
                            
                            <img className="order-1" src={images.disLike} alt="" />
                            <div className="flex items-center text-[16px] font-normal text-[#888888] order-2">
                            ۱
                            </div>
                        </div>
                    </div>

             </div>
             
             <div className="h-[100%] flex absolute right-6 max-lg:right-1 gap-3 ">

                    <div className="flex text-center items-center order-2 text-[18px] font-normal text-[#888888]">
                     امتیاز ۳۵ نفر
                    </div>
                    <div className="flex text-center items-center order-1">
                        <div className='flex items-center  ml-[18px] gap-[3px]'>
                            <img src={images.star} width={15} height={15}/>
                            <img src={images.star} width={15} height={15}/>
                            <img src={images.star} width={15} height={15}/>
                            <img src={images.star} width={15} height={15}/>
                            <img src={images.star1} width={15} height={15}/>

                        </div>
                    </div>
             </div>
        </div>

    </>
  )
}

export default RateBar