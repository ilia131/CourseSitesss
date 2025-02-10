import moment from 'moment-jalaali';
const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};




const CourseDetails = ({ teacher, duration, images  }) => (
       <div className='grid gap-[7px] mt-[24px] justify-end justify-items-end'>
                     <div className='flex items-center  mr-[17px] gap-[7.7px]'>
                         <p className='text-[16px] text-[#888888] truncate  w-[105px]
                         '>{teacher}</p>
                         <img src={images.profile1} width={16.31} height={17}/>
                     </div>
                     <div className='flex items-center   mr-[19px] h-[16px] gap-[7.7px]'>
                         <p className='text-[15px] text-[#888888] '>{toPersianDate(duration)}</p>
                         <img src={images.time} width={12} height={12} />
                     </div>
                  </div>
  );
  
export default CourseDetails;