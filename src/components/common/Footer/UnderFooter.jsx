
const UnderFooter = ({text , icon}) => {
  return (
    <div className="w-full h-[42px] bg-[#008D8A] mt-[16px] flex justify-center items-center font-primaryMedium xl:text-[16px] text-[#FFFFFF] gap-[1px] max-smx2:text-[13px] max-md:text-[14px]  max-md:relative max-md:top-[520px] max-smx2:top-[590px] max-lg:top-[520px] max-lg:relative z-[44545] duration-700">
             {icon && <img src={icon} width={15} height={15} alt="Copyright Icon" className="mb-[18px] mt-[9px]" />}
             <p>{text}</p>
          </div>  
  )
}

export default UnderFooter