import InstructorCardWrapper from "./InstructorCardWrapper";
import InstructorImages from "./InstructorImages";

const InstructorSection = ({ instructor, images }) => {
    return (
      <div className="relative max-md:w-full max-md:flex max-md:justify-center max-lg:flex max-lg:justify-center left-[-4px]">
        <InstructorCardWrapper instructor={instructor} />
        <InstructorImages images={images} />
      </div>
    );
  };


export default InstructorSection
  

  