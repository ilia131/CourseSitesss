const CourseInfo = ({ text, icon }) => (
    <div className="flex items-center lg:gap-[5px] max-md:gap-[4px] max-lg:gap-[4px]">
      <p className="text-[16px] font-[400] font-primaryRegular text-[#E6E6E6BF] 
        max-md:text-[12px] max-lg:text-[12px]" style={{ direction: 'rtl' }}>
        {text}
      </p>
      <div className="w-[18px] h-[18px] max-md:w-[14px] max-md:h-[14px] max-lg:w-[14px] max-lg:h-[14px]">
        <img src={icon} />
      </div>
    </div>
);

export default CourseInfo