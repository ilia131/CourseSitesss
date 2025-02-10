const toPersianNumber = (number) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return number
      .toString()
      .replace(/\d/g, (digit) => persianDigits[digit]);
  };


const SliderPrice = ({ price, images  }) => (
    <div className='flex justify-between ml-[17px] mr-[17px] '>
        <div className='flex items-center w-[134px] h-[25px] gap-[5px]'> 
            <span className='text-[12px] text-[#006865] 
            mt-[7px]  pl-[2px]'>تومان</span>
        <p  className='text-[23px] text-[#006865] mt-[-2px] '>{toPersianNumber(price)}</p>
        </div>
        <div className='mt-[3px] mr-[1px]' >
            <img src={images.buyit} width={21.9} height={23} />
        </div>    
     </div>
  );
  
export default SliderPrice;