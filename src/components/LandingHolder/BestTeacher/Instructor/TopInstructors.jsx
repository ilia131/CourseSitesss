import InstructorSection from "./InstructorSection";
import SectionHeader from "./SectionHeader";

const TopInstructors = ({ instructors, images, background }) => {
    return (
      <section className="h-[573px] pt-[106px] duration-700 dark:bg-gray-800">
        <div 
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'auto 400px',
          }}
        >
          <div className="flex justify-center h-[467px] duration-700 items-center w-full">
            <div className="xl:w-[1247px] h-[467px] duration-700 max-md:w-full max-md:flex max-md:justify-center max-md:mt-[10px] max-lg:w-full max-lg:flex max-lg:justify-center max-lg:mt-[10px] z-[8888] xl:pl-[117.5px] xl:pr-[93px] mt-[-27px] lg:w-full lg:pr-0 lg:pl-0 lg:px-6 lg:flex lg:justify-center absolute">
              <div className="flex justify-between max-md:grid max-md:w-full max-md:justify-center max-lg:grid max-lg:w-full max-lg:justify-center lg:flex lg:justify-between lg:w-[1024px] lg:px-[40px] xl:px-0 duration-700">
                
                <div className="flex xl:w-[395px] xl:h-[399.9px] lg:w-[395px] lg:h-[395px] mt-[46px] max-md:grid max-md:w-full max-md:justify-center max-lg:grid max-lg:w-full max-lg:justify-center">
                  
                  <div className="grid gap-[5.16px] w-[9px] h-[67.71px] lg:mt-[260px] max-md:pt-[140px] max-lg:hidden lg:relative lg:left-[20px] xl:left-[4px]">
                    <div className="h-[9px] w-[9px] rounded-full bg-white"></div>
                    <div className="h-[9px] w-[9px] rounded-full bg-white"></div>
                    <div className="h-[25.71px] w-[9px] rounded-full bg-[#00AFAB]"></div>
                    <div className="h-[9px] w-[9px] rounded-full bg-white"></div>
                  </div>  
  
                  <div className="relative max-md:w-full max-md:flex max-md:justify-center max-lg:flex max-lg:justify-center left-[-4px]">
                    <InstructorSection instructor={instructors} images={images} />
                  </div>
                </div> 
  
                <SectionHeader
                  title="برترین اساتید"
                  subtitle="رو همینجا پیدا میکنید!!"
                  description={
                    <>
                      <p>برجسته‌ترین اساتید بزرگترین مجموعه برنامه‌نویسی</p>
                      <p>استان مازندران رو بهترین بشناسیم</p>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default TopInstructors
  