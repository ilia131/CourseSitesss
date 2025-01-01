import {Fragment}from 'react'
import moment from 'moment-jalaali';



const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};




const Group149 = ({item , index}) => {
  return (
    <Fragment>
        
                <div className="w-[874px] h-[40px]  flex  items-center  bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px] pr-[27px] pl-[28px] dark:bg-gray-800
                " >
                    <div className=" flex gap-[14px]" >
                      <img src={item.delete}/>  
                      <img src={item.eye} />
                    </div>
                    <div className="w-[65px] text-center ml-[68.69px] ">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white truncate
                      '>{item.teacheName}</p>
                    </div>
                    <div className="ml-[135px] ">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{toPersianDate(item.lastUpdate)}</p>
                    </div>
                    <div className="ml-[110px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.levelName}</p>
                    </div>
                    <div className="
                    ml-[63px]
                    w-[156px] text-center" style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      ' >{item.courseTitle}</p>
                    </div>
                    <div className="h-[30px] w-[30px] ml-[55px]" >
                      <img src={item.tumbImageAddress} />
                    </div>
                  </div>
    </Fragment>
  )
}

export default Group149