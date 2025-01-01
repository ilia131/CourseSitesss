import React from 'react'
import images from "../../../assets/img/coursDetail/index"

const Card = ({item}) => {
  return (
    <>
    <div className=" w-[92%]   flex flex-wrap relative m-auto
                    ">
              <div className=" w-[100%] h-[112px] bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative
                              
                             ">
                
                <div className=" w-[30.5%] h-[84px]  rounded-[6px] shadow-[0_1px_1px_0px_rgba(0,0,0,0.2)] absolute top-[14px] right-[16px] 
                                ">              
                  <img src={item.tumbImageAddress}/>
                </div>
                  
                <div className=" w-[55%] h-[50px] absolute top-[14px] left-[21px] max-lg:left-4  text-right text-[17px] leading-[21px] font-normal text-[#005351]
                               
                                ">
                                  {item.title}
                </div>
  
                <span className="w-[76px] h-[21px] absolute top-[73px] left-[21px] text-right text-[12px] leading-[21px] font-normal text-[#01B4AF]" > 
                 مشاهده دوره + 
                </span>
                
              </div>
          </div>
    </>
  )
}

export default Card