const toPersianNumber = (number) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return number
      .toString()
      .replace(/\d/g, (digit) => persianDigits[digit]);
  };


const SliderRating = ({ student, images }) => (
        <div className='grid gap-[7px] mt-[24px] '>
                     <div className='flex items-center  ml-[18px] gap-[3px]'>
                        <img src={images.hat} width={15} height={15} />
                        <p className='text-[16px] text-[#888888]' >{toPersianNumber(student)}</p>
                     </div>
                     <div>
                     <div className='flex items-center  ml-[18px] gap-[3px]'>
                        <img src={images.stars} width={15} height={15}/>
                        <img src={images.stars} width={15} height={15}/>
                        <img src={images.stars} width={15} height={15}/>
                        <img src={images.stars} width={15} height={15}/>
                        <img src={images.star1} width={15} height={15}/>
    
                     </div>
                 </div>
        </div>
  );
  
export default SliderRating;