import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SwiperComponent from "./SwiperComponent/SwiperComponent"
import CourseLink from './CoursesPart/CourseLink';
import CourseImage from './CoursesPart/CourseImage';

const CourseSection = ({images}) => {
  return (
    <section className="xl:justify-center dark:bg-gray-800 grid max-md:w-full sm1:w-full">
      <div className="xl:w-[1247px] justify-center grid max-md:w-full duration-700 xl:mt-[112px] max-md:mt-[20px]">
         <SectionTitle 
           title='دوره های آموزشی'
           subtitle='به روز ترین دوره هایی که میتونید پیدا کنید'
         />
      </div>
      <div className="text-left max-md:flex xl:w-[1247px] max-md:w-full max-md:justify-start lg:px-[140px] xl:px-0">
        <CourseLink 
          images={images}
        />
      </div>

      <div className="xl:w-[1247px] xl:mt-[-420px] max-md:mt-[-380px] max-md:grid max-md:justify-center max-lg:grid max-lg:w-full sm1:w-full max-lg:justify-center max-lg:mt-[-380px] lg:w-full lg:grid lg:justify-center lg:mt-[-380px]">
        <CourseImage 
         images={images}
        /> 
        <SwiperComponent />
      </div>
    </section>
  );
};







export default CourseSection;
