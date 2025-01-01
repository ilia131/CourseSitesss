import images from '../../assets/dashboardpng'
import { Fragment, useState , useEffect } from 'react'
import ProfileInfo from './UserProfile/ProfileInfo'
import EditProfile from './UserProfile/EditProfile'
import { getProfile } from '../../core/services/api/user'
import { setItem } from '../../core/services/common/storage.services'
import { useBgColor } from '../../components/BgChangeAdmin/BgColorContext'
const UserProfile = () => {

   const { bgColor , setBgColor} = useBgColor();


   const getComplementaryColor = (hexColor) => {
     const color = hexColor.replace("#", "");
     
     const r = 255 - parseInt(color.substring(0, 2), 16);
     const g = 255 - parseInt(color.substring(2, 4), 16);
     const b = 255 - parseInt(color.substring(4, 10), 16);
   
     return `rgb(${r}, ${g}, ${b})`;
   };
 
   const textColor = getComplementaryColor(bgColor);

  const [profile , setProfile] = useState([
    {firstname: 'فلان فلانی زاده فلان آبادی', last: '', email:'folani99@gmail.com ', birth:' ۱۱ / ۰۵ / ۷۸ ', 
      genre:'', about:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و ', 
      number:'۰۹۳۹۲۲۲۹۹۹۹', telegram:'', linkedin:'', address:' مازندران - ساری - میدان خزر - جاده فرح آباد خیابان دیمطوران  - ساختمان هوتن ۱۲ -واحد ۱۵',
      Xloc:'', yloc:''
    },
  ])
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
               bgColor={bgColor}
               />
         : 
               <ProfileInfo HandleActive={HandleActive} userInfo={userInfo}
               bgColor={bgColor} textColor={textColor}
               />  
        }
     </Fragment>
  )
}

export default UserProfile