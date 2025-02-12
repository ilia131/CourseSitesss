import toPersianDate from "../../../common/utils/ToPersianDate"

const NewsItem = ({title ,date}) => {
  return (
    <div className='xl:flex xl:justify-between text-[14px] xl:w-[710px] font-primaryMedium max-lg:mt-[20px] max-md:mt-0 text-[#555555] items-center max-md:grid max-md:justify-items-center h-[38.34px] max-smx3:mt-0 max-lg:flex max-lg:gap-[350px] max-xl:gap-[380px]
                   max-xl:flex max-xl:mt-[50px]  max-md:gap-0  border-dashed max-lg:w-[750px] max-md:w-full max-xl:w-full max-xl:justify-between border-b-[1px] border-[#AAAAAA]'>
                 <p className='h-[20px] max-smx3:w-[200px] max-smx3:text-center dark:text-[#979797] truncate   max-md:w-[310px] max-lg:w-full'>
                    {title} 
                   <span className='xl:mr-[7px] text-[#DC0000]' >جدید</span>
                 </p>
                <p  className='text-[13px] text-[#999999] max-smx3:mt-[1px] max-md:mt-[1px]' dir='ltr'>
                   {toPersianDate(date)}
                </p> 
     </div>  
  )
}

export default NewsItem