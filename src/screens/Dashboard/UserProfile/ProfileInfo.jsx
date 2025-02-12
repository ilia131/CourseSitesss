import { Fragment } from 'react'
import {userInfoFields , userInfoFields2 , geoLocationFields } from '../../../components/DashboardHolder/UserProfile/UserInfo/UserFieldsInfoArray';
import {
    EditButton,
    InfoFields,
    SvgComponent,

} from '../../../components/DashboardHolder/UserProfile/UserInfo/index'
import useProfileDashboard from '../../../components/common/hooks/hookapi/useProfileDashboard'
const ProfileInfo = ({HandleActive}) => {
   const { dataInfo } = useProfileDashboard()
   
   const userInfoProps = {
      userInfoFields,
      userInfoFields2,
      geoLocationFields,
      text: dataInfo?.userAbout,
      dataInfo
    };

  return (
    <Fragment>
         <div className="xl:w-[814px] xl:h-[549px] xl:border xl:border-[#f7f7f7] dark:border-gray-800 xl:mt-[50px] xl:ml-[39px] relative 
                         max-smx3:flex max-smx3:justify-center max-md:flex max-md:justify-center max-lg:flex max-lg:justify-center max-xl:flex max-xl:justify-center">
           <SvgComponent />          
          <div className='xl:w-[814px] xl:h-[521px] max-smx3:w-screen max-md:w-screen relative dark:bg-gray-800'>
          <InfoFields 
             {...userInfoProps}
          />
          <EditButton  onClick={HandleActive}/>  
        </div> 
     </div>
    </Fragment>
  )
}

export default ProfileInfo