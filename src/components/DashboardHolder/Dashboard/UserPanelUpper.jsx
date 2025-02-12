import AllCourseCard from "./UserPanel/AllCourseCard"
import PercentProfileComponent from "./UserPanel/PercentProfileComponent"
const UserPanelUpper = () => {
  return (
    <div className='flex xl:gap-[37px] max-smx3:grid max-md:justify-between max-md:px-[40px] max-smx3:px-0 max-smx3:justify-center   max-md:ml-0' dir='rtl'> 
       <AllCourseCard/> 
       <PercentProfileComponent/> 
    </div>
  )
}

export default UserPanelUpper