import { Fragment , useState , useRef , useEffect } from 'react'
import {Form , Formik , Field} from 'formik'
import images from '../../../assets/dashboardpng'
import {EditProfileFunc} from '../../../core/services/api/user'
import Group155 from '../../../components/DashboardHolder/UserProfile/EditProfile/Group155';
import RightEditProfile from '../../../components/DashboardHolder/UserProfile/EditProfile/Group156';
import dayjs from 'dayjs';
import HeaderEditProfile from '../../../components/DashboardHolder/UserProfile/EditProfile/HeaderEditProfile'
import { formStyles } from '../../../components/DashboardHolder/UserProfile/EditProfile/tailwindcss/formstyle';
import {validationSchema} from '../../../components/DashboardHolder/UserProfile/EditProfile/validationSchema/validationSchema'

import {  toast } from 'react-toastify';
const EditProfile = ({userInfo , setRefetch , bgColor}) => {
  const [submittedDate, setSubmittedDate] = useState();
  const [previewImage, setPreviewImage] = useState(images.profile)

  const handleFormSubmit = async (values) => {
    const validateBirthday = dayjs(values.BirthDay).locale("en").format("YYYY-MM-DD")
    const genderValue = values.Gender === 'male' ? false : true; 
    const formData = new FormData(); 
         formData.append('LName', values.LName);  
         formData.append('FName', values.FName);  
         formData.append('UserAbout', values.UserAbout); 
         formData.append('LinkdinProfile', values.LinkdinProfile);  
         formData.append('TelegramLink', values.TelegramLink);  
         formData.append('ReceiveMessageEvent', false); 
         formData.append('HomeAdderess', values.HomeAdderess);  
         formData.append('NationalCode', values.NationalCode);  
         formData.append('Gender', genderValue);
         formData.append('BirthDay',  validateBirthday);
         formData.append('Latitude', values.Latitude);  
         formData.append('Longitude', values.Longitude); 
    
    const user = await EditProfileFunc(formData) 
    if (user.message === 'عملیات با موفقیت انجام شد.') {
         
         toast.success(user.message)
     }
  };


  const fileInputRef = useRef();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      };
      
      reader.readAsDataURL(file)
    }
    
  };

 




 
  
  
  const initialValues = {
    FName: userInfo?.fName,
    LName: userInfo?.lName,
    NationalCode: userInfo?.nationalCode,
    Gender: userInfo?.gender,
    BirthDay: userInfo?.birthDay,
    phonenumber:userInfo?.phoneNumber,
    email:userInfo?.email,
    TelegramLink:userInfo?.telegramLink,
    LinkdinProfile:userInfo?.linkdinProfile,
    HomeAdderess:userInfo?.homeAdderess,
    img: userInfo?.userImage?.puctureAddress,
    UserAbout:userInfo?.userAbout,
    Longitude:userInfo?.longitude,
    Latitude:userInfo?.latitude,
  };
  return (
    <Fragment>
        <div className='xl:w-[800px] xl:h-[681px]  xl:ml-[38px] mt-[13px] '>

             <HeaderEditProfile />

                   <Formik   
                            initialValues={initialValues}  
                            // validationSchema={validationSchema}  
                            onSubmit={handleFormSubmit} 
                    >
                      {({ setFieldValue }) => (
                       <Form className={formStyles.form} dir='rtl'>                        
                            <RightEditProfile setFieldValue={setFieldValue}/>
                         <Group155 
                         previewImage={previewImage}
                         setRefetch={setRefetch}
                         setPreviewImage={setPreviewImage}
                         fileInputRef={fileInputRef}
                         setFieldValue={setFieldValue}
                         handleFileChange={handleFileChange}
                         handleImageClick={handleImageClick}
                         userInfo={userInfo}
                         />  
                          
                       </Form>
                        )}
                    </Formik> 
             
            
         </div>
    </Fragment >
  )
}

export default EditProfile