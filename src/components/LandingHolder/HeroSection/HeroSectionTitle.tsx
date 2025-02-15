import { Fragment } from "react/jsx-runtime"


const HeroSectionTitle = () => {
  return (
    <Fragment>
            <p className="font-primaryRegular mr-[6.2px] 
                              justify-end font-bold text-[60px]
                              max-md:text-[50px]
                              max-sm:text-[40px]
                              max-md:mr-[-4.5px] text-black
                              dark:text-[#f7f7f7]">عنوان <span className="text-[#01CEC9]   drop-shadow-[#0000004D]"
                              >آموزشگاه</span>
                </p>
                 <p className="font-primaryRegular text-[#555555] text-[20px] 
                              mt-[23.61px] mb-[28.44px] mr-[6.2px] max-md:text-[15.5px] max-md:mb-[110px] max-md:mr-[-4.5px] max-sm:text-[14px]
                              dark:text-[#f7f7f7]">مرجع اموزش زنده و تعاملی برنامه نویسی حوزه وب 
                <br/>
                 با دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی
                </p> 
    </Fragment>
  )
}

export default HeroSectionTitle