import { Fragment } from "react"
import Imagehero from './Imagehero'
import StudentCount from './StudentCount';
import TeacherCount from './TeacherCount';

interface LeftHeroSectionProps {
   images : {
      shape : string;
      Student: string ;
      Teacher: string;
   }

   hero : {
     studentCount: number,
     teacherCount:number
   }
}


const LeftHeroSection: React.FC<LeftHeroSectionProps > = ({images, hero}) => {
  return (
    <Fragment >
    <div className="w-[604px] h-[447px] mt-[88px] mb-[36px] ml-[107px] max-md:hidden max-lg:hidden">

     <Imagehero  images={images}/>
     <StudentCount images={images} hero={hero}/>
     <TeacherCount  images={images} hero={hero}  />
     </div>
  </Fragment>
  )
}

export default LeftHeroSection