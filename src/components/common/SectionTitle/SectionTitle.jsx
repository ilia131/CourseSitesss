
const SectionTitle = ({ title, subtitle , style , style1}) => {
    return (
        <div className={style}>
            <div className=" h-[93px] grid xl:ml-[35px] xl:mb-[41px] max-md:ml-[13px]">
                <div className="flex h-[57.64px] items-center gap-[10px] justify-center">
                  <p className="font-primaryMedium text-[#000000] xl:text-[35px] h-[57.64px] xl:ml-[20px] max-md:text-[25px] md:text-[30px] dark:text-[#f7f7f7]">
                  {title}
                </p>
            <div className="h-[13px] w-[13px] bg-[#01CEC9] rounded-md max-md:mb-[12px] md:mb-[5px] xl:mb-0" />
          </div>
          <div>
            <p className=" h-[32.02px] font-primaryRegular text-[#AAAAAA] xl:text-[20px] flex justify-center mt-[2px] max-md:text-[16px] max-md:mt-[-15px] md:text-[18px]">
              {subtitle}
            </p>
          </div>
        </div>
    </div > 
    );
};

export default SectionTitle