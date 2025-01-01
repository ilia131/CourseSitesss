import React, { useState , useEffect } from 'react'
import images from "../../assets/img/News";
import { NavLink } from 'react-router-dom';


const Card = ({item}) => {   
    return (
      
      <div
      dir="rtl"
      className=" w-[291px] h-[381px] border bg-[#FFFFFF] dark:bg-gray-200 rounded-t-[146px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]  "
    >
      <img
        src={item.currentImageAddressTumb}
        alt=""
        className="w-[87%] h-[50%] rounded-[18px] mr-auto ml-auto mt-2 
        bg-gradient-to-r from-[#A259FF] to-[#D47300]
        "
      />

      <div className="w-[87%] h-[50%] mr-auto ml-auto mt-[15px] ">
        <div className=" h-[25px] w-[220px] text-[18px] leading-[27px]
        truncate
        font-bold align-middle flex flex-nowrap text-[#003B39]">
          <NavLink to={`/news-Detail/${item.id}`}>{item.title} </NavLink>
        </div>

        <div className=" h-[61px] w-[100%]  ">
          <div className=" h-[100%] w-[105%]  m-auto text-[11px] leading-[16px] font-normal 
          truncate
          align-middle text-[#AAAAAA] mt-3">
            {item.miniDescribe}
          </div>
        </div>

        <div className=" h-[20px] w-[110%]  flex gap-[109px] ">
          <div className=" h-[15px] w-[65px] flex">
            <img
              src={images.Eyse}
              alt=""
              className=" h-[100%] w-[15px] "
            />

            <span className=" text-[12px] leading-[12px] font-normal text-[#888888] mr-1 mt-[2px] ">
              
              {item.currentView} بازدید
            </span>
          </div>

          <div className=" h-[15px] w-[86px] flex">
            <span className=" text-[12px] leading-[12px] font-normal text-[#888888] ml-1 ">
              {" "}
              {/* {date} */}
            </span>
            <img
              src={images.Callender}
              alt=""
              className=" h-[15px] w-[15px]"
            />
          </div>
        </div>

        <div className=" h-[55px] w-[100%] flex  ">
          <button className=" h-[40px] w-[350px]  relative border-t border-[#F3F3F3] ">
            <span className=" mr-8 mt-[px] text-[11px] leading-4 text-[#D47300] font-bold ">
              {" "}
              مطالعه بیشتر +{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
    
    );
  };
  
  //   return (
  //   <>
  //       {cards.map((card, index) => (
  //       <Card key={index} title={card.title} description={card.description} date={card.date} seen={card.seen} />
  //     ))}
  //   </>
  // )


export default Card