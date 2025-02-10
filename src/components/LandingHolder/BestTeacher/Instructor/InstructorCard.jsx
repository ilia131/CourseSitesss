import InstructorImage from './InstructorImage'
import HoverEffect from './HoverEffect'
import InstructorInfo from './InstructorInfo';

const InstructorCard = ({ instructor }) => {
    return (
      <div className="relative group 
        xl:w-[274.26px] xl:h-[364.35px]
        lg:w-[274.26px] lg:h-[364.35px] 
        max-md:justify-center max-md:w-[190px]
        mt-[46.31px] z-[555] lg:left-[120px] lg:bottom-[45px] 
        cursor-pointer max-md:bottom-[100px] max-md:left-[5px]
        max-lg:bottom-[100px] max-lg:left-[5px]
        max-lg:justify-center max-lg:w-[190px]">
        
        <InstructorImage imageUrl={instructor.image} />
        
        <HoverEffect>
          <InstructorInfo
            name={instructor.name}
            courses={instructor.courses}
            students={instructor.students}
            playIcon={instructor.playIcon}
            profileIcon={instructor.profileIcon}
          />
        </HoverEffect>
  
      </div>
    );
};

export default InstructorCard