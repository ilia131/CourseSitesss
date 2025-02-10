
const ButtonPagination = ({handlePaginationClick ,activeIndex}) => {
  return (
    <div className="flex justify-center gap-[7px] mt-[-35px] max-md:mt-[10px] max-lg:mt-[10px] lg:mt-[10px]">
        {[0, 1, 2].map((index) => (
        <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-[13px] h-[13px]  rounded-full ${
            activeIndex === index ? 'bg-[#D47300] h-[13px] w-[13px] border-[#80e6e4] border-[3px] ' : 'bg-[#01CEC980]'
            }`}
        
        ></button>
        ))}
  </div>   
  )
}

export default ButtonPagination