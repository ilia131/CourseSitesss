import { Form, Field } from "formik";
import { CoursesSvg, CourseSvg1 } from "./CoursesSvg";

const CourseSearch = () => {
  return (
    <Form>
      <div className="w-full m-0 h-[412px]  flex justify-center  ">
        <div
          className="w-[88%] m-0 h-[271px] mx-0 bg-[#EBF9F982] flex justify-center rounded-[15px] backdrop-blur-[4px]
            shadow-[0px_2px_2px_0px_#00000040]"
        >
          <div className=" hidden lg:block">
            <div className="relative mt-5 right-[25px]  w-[450px] ef:w-[507px] h-[397px] bg-[url(../81.svg)] bg-no-repeat bg-contain backdrop-filter: blur(8px)"></div>
            <div className="bg-[url(../31.svg)] w-[280px] h-[400px] ef:w-[300px] ef:h-[542px] max-lg:bg-contain lg:bg-contain  bg-no-repeat relative left-[80px] bottom-[460px]"></div>
          </div>
          <div className=" w-[80%] grid lg:flex lg:flex-col lg:items-end justify-center lg:justify-start">
        
              <img src="../32.svg" className="relative cd:left-[570px] md:left-[490px] lg:left-0 lg:mr-[33px] top-[42px] 
              sm:left-[410px] sm:top-[46px] lg:top-9 ab:left-[255px] ab:top-[50px]" />
              <p1 className="font-bold text-[35px] text-nowrap text-black text-center sm:text-right lg:mr-[54px]  ">
                دوره های آموزشی
              </p1>
              <p2 className="dark:text-[white] font-[400] text-[16px] sm:text-[20px] text-nowrap lg:ml-0 cd:ml-[240px] md:ml-[160px] lg:mr-[54px] sm:ml-[80px] text-[#AAAAAA]">
                به روز ترین دوره هایی که میتونید پیدا کنید
              </p2>
              
                <Field
                  placeholder="...چی میخوای یاد بگیری؟"
                  className="dark:bg-gray-800 md:w-[480px] sm:w-[400px]  sm:h-[50px] ab:h-[45px] cd:w-[558px] lg:w-[420px] ef:w-[480px] xl:w-[558px] md:h-[65px] rounded-[35px] ab:pr-[20px] sm:pr-[48px] mt-[27px] lg:mr-[20px]   xl:mr-[55px] bg-[#FAFAFA] border-[1px] border-[#DFDFDF80] backdrop-blur-[5px] 
           text-right  shadow-[0px_1px_2px_0px_#00000033]"
                />
                <button className="md:w-[50px] sm:w-[40px] sm:h-[40px]  md:h-[50px] rounded-[25px] bg-[#D47300] bg-[url(../Search.svg)] bg-auto bg-center bg-no-repeat relative lg:mr-[390px] ef:mr-[450px] cd:left-3 cd:bottom-[62px] xl:mr-[560px] md:bottom-[62px] md:left-3 lg:bottom-[55px]
                sm:bottom-14 sm:left-3 ab:w-[35px] ab:bottom-[54px] ab:left-1 ab:h-[35px]"></button>
              
           
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CourseSearch;
