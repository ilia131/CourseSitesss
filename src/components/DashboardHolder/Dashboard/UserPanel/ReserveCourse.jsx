import toPersianNumber from '../../../common/utils/ToPersianNumber'

const ReserveCourse = ({ images, courseCount1 }) => {
    return (
      <div className='w-[190px] h-[105px] relative'>
        <img src={images.gp87} height={57} width={57} className='absolute left-[20px]' />
         <div className='w-[190px] h-[77px] mt-[26px] text-right pr-[21px] rounded-[5px] shadow-[0px_1px_2px_0px_#00000040]' dir='rtl'>
           <p className='w-[63px] h-[43px] font-primaryMedium text-[25px] text-[#FFB800] flex items-center pt-[4px] max-smx3:text-[20px] max-md:text-[23px]'>
             <span className='text-[30px] ml-[4px] max-smx2:text-[25px] max-md:text-[28px]'>
               {toPersianNumber(courseCount1)}
             </span> 
            دوره
          </p>
          <span className='w-[86px] h-[26px] text-[#A7A7A7] text-[18px] font-primaryMedium font-[400] max-smx3:text-[15px] max-md:text-[17px]'>
            رزرو کرده اید
          </span>
        </div>
      </div>
    );
  };
  
  export default ReserveCourse;