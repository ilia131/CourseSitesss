import {Fragment}from 'react'
import images from '../../../assets/dashboardpng'
import moment from 'moment-jalaali';

const toPersianNumber = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[digit]);
};

const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};


const Group144 = ({item , index}) => {
  return (
    <Fragment>

                <div className="xl:w-[874px] h-[40px] px-[27px] flex  items-center justify-between bg-[#F6FFFF]
                shadow-[0px_1px_2px_0px_#00000026] mt-[9px] max-smx3:gap-[1px] 
                dark:bg-gray-800 
                " >
                    <div className="xl:mr-[98.11px]" >
                      <img src={images.eye} />
                    </div>
                    <div className="xl:mr-[88px] ">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white
                      '>{toPersianNumber(item.cost)}</p>
                    </div>
                    <div className="xl:mr-[82px] w-[100px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700] dark:text-white
                       truncate
                      ' >{toPersianDate(item.lastUpdate)}</p>
                    </div>
                    <div className="xl:mr-[68px] w-[100px]">
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700] dark:text-white
                       truncate
                      ' >{item.fullName}</p>
                    </div>
                    <div className="xl:mr-[80px]  w-[100px]" style={{direction:'rtl'}} >
                      <p className='font-primaryRegular text-[#555555] text-[14px] font-[700]
                      dark:text-white truncate
                      ' >{item.courseTitle}</p>
                    </div>
                    <div className="h-[30px] w-[30px]" >
                      <img src={item.tumbImageAddress} />
                    </div> 
                  </div>
    </Fragment>
  )
}

export default Group144