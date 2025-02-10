import images from '../../../assets/landingpng'
import TopInstructors from './Instructor/TopInstructors';
const BestTeacher = () => {
  const instructor = {
    name: 'مهدی اصغری',
    courses: '۲',
    students: '۱۶۸',
    playIcon: images.play,
    profileIcon: images.profile1,
    image: images.t1,
  };
  
  const imagesArray = [images.t2, images.t3, images.t4]
  return (
    <TopInstructors 
        instructors={instructor}
        images={imagesArray}
        background={images.rec667}
    />
  )
}

export default BestTeacher





