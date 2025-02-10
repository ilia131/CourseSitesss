import CourseInfo from "./CourseInfo";

const InstructorInfo = ({ name, courses, students, playIcon, profileIcon }) => (
    <div className="w-[219px] h-[64px] lg:mt-[262px] 
      max-md:mt-[130px] max-lg:mt-[130px] 
      grid justify-items-center justify-center text-[#E6E6E6D9] gap-[10px]">
      
      <p className="font-primaryMedium font-[700] max-md:text-[16px] text-[20px] max-md:ml-[11px] max-lg:ml-[11px]">
        {name}
      </p>
      
      <div className="flex justify-center max-md:gap-[10px] max-lg:gap-[10px] lg:gap-[15px]">
        <CourseInfo text={`${courses} دوره آموزشی`} icon={playIcon} />
        <CourseInfo text={`${students} دانشجو`} icon={profileIcon} />
      </div>
      
    </div>
);

export default InstructorInfo