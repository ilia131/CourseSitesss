const EmailComponent = ({ email }) => {
    return (
         <div className='lg:w-[204px] lg:h-[35px] rounded-[20px] max-md:w-[190px] max-lg:w-[204px] max-lg:h-[35px] max-md:h-[35px] bg-[#008D8A] flex justify-center  items-center duration-700 '>
             <p className='font-primaryMedium text-[#FFFFFF] text-[15px] max-md:text-[13px]' >{email}</p>
         </div>
    );
  };
  
export default EmailComponent;
  