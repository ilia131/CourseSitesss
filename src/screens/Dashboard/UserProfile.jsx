import images from '../../assets/dashboardpng'
import { Fragment, useState , useEffect } from 'react'
import ProfileInfo from './UserProfile/ProfileInfo'
import EditProfile from './UserProfile/EditProfile'
import { getProfile } from '../../core/services/api/user'

const UserProfile = () => {

  


  const [refetch , setRefetch] = useState(1)
  
  const [isactive , setIsActive] = useState(false)
  const HandleActive = () => {
     setIsActive(true)
  }
  const [userInfo , setUserInfo] = useState([])

  const getProfileFunc = async () => {

    const user = await getProfile()
    setUserInfo(user)
    
 }
   
 useEffect(() => {
    getProfileFunc()

 },[])
 

  return (
     <Fragment>
        {isactive?  
               <EditProfile userInfo={userInfo} setRefetch={setRefetch} 
               />
         : 
               <ProfileInfo HandleActive={HandleActive} userInfo={userInfo}
               />  
        }
     </Fragment>
  )
}

export default UserProfile