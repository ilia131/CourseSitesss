import { Fragment , useState , useRef , useEffect } from 'react'
import { Box } from "@mui/material";
import {Form , Formik , Field} from 'formik'
import images from '../../../assets/dashboardpng'
import {EditProfileFunc} from '../../../core/services/api/user'
import Group155 from '../../../components/DashboardHolder/UserProfile/EditProfile/Group155';
import Group156 from '../../../components/DashboardHolder/UserProfile/EditProfile/Group156';
import * as Yup from 'yup';
import moment from 'moment-jalaali'
import dayjs from 'dayjs';


const EditProfile = ({userInfo , setRefetch , bgColor}) => {
  const [submittedDate, setSubmittedDate] = useState();
  const [previewImage, setPreviewImage] = useState(images.profile)

  const handleFormSubmit = async (values) => {
   
    const validateBirthday = dayjs(values.BirthDay).locale("en").format("YYYY-MM-DD")
    console.log(validateBirthday)
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

   const validationSchema = Yup.object().shape({
    FName: Yup.string()
     .min(2, 'نام باید حداقل دو حرف باشد')
      .max(50, 'نام نمی‌تواند بیش از 50 حرف باشد')
     .required('نام الزامی است'),
  
    LName: Yup.string()
      .min(2, 'نام خانوادگی باید حداقل دو حرف باشد')
     .max(50, 'نام خانوادگی نمی‌تواند بیش از 50 حرف باشد')
       .required('نام خانوادگی الزامی است'),
  
   NationalCode: Yup.string()
       .matches(/^\d{10}$/, 'کد ملی باید ۱۰ رقم باشد')
    .required('کد ملی الزامی است'),
  
   TelegramLink: Yup.string()
    .matches(/^@[A-Za-z0-9_]{5,32}$/, 'نام کاربری تلگرام باید با @ شروع شود و حداقل ۵ و حداکثر ۳۲ کاراکتر باشد')
     .required('نام کاربری تلگرام الزامی است'),
  
     BirthDay: Yup.date()
       .required('تاریخ تولد الزامی است')
      .max(new Date(), 'تاریخ تولد نمی‌تواند در آینده باشد'),
  
     phonenumber: Yup.string()
      .matches(/^(\+98|0)?9\d{9}$/, 'شماره تماس باید شماره معتبر ایران باشد')
      .required('شماره تماس الزامی است'),
  
  email: Yup.string()
     .email('ایمیل نامعتبر است')
    .required('ایمیل الزامی است'),
  
   LinkdinProfile: Yup.string()
     .url('لینک لینکداین نامعتبر است') .matches(/^https:\/\/(www\.)?linkedin\.com\/.*$/, 'لینک باید از سایت لینکداین باشد')
     .required('لینک لینکداین الزامی است'),
  
  HomeAdderess: Yup.string()
     .min(10, 'آدرس باید حداقل ۱۰ حرف باشد')
    .max(200, 'آدرس نمی‌تواند بیش از ۲۰۰ حرف باشد')
   .required('آدرس الزامی است'),
   
   UserAbout: Yup.string()
     .max(500, 'نمی‌تواند بیش از ۵۰۰ حرف باشد'),

 location: Yup.object().shape({
     lat: Yup.number()
       .required('عرض جغرافیایی الزامی است'),
      lng: Yup.number()
        .required('طول جغرافیایی الزامی است'),
    })
   
 });




 
  
  
  // console.log(submittedDate?.format?.("D MMMM YYYY"))
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
            <div className='xl:w-[800px] h-[50px]  xl:top-[2px] xl:relative 
            xl:flex justify-center items-center 
            mb-[-4px] 
            max-smx3:grid 
            max-smx3:justify-center
            max-smx3:justify-items-center
            max-smx4:gap-[30px]
            max-md:grid
            max-md:justify-center
            max-md:justify-items-center
            max-md:gap-[30px]
            max-lg:grid
            max-lg:justify-center
            max-lg:justify-items-center
            max-lg:gap-[30px]
            max-xl:grid
            max-xl:justify-center
            max-xl:justify-items-center
            max-xl:gap-[30px]
            '
            >
            <div className='w-[50px] h-[50px] xl:left-[440px] 
                            relative z-[555] dark:bg-gray-800 
                            justify-center flex flex-col items-center gap-[2px]  shadow-[0px_1px_2px_0px_#00000040]
                            rounded-[10px] bg-[#F7F7F7]
            '>
           <div className='flex relative left-[7.5px] gap-[2px]'>
            <svg 
                
                width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#B5B5B5" stroke-width="2"/>
             </svg>
             <svg 
                className='relative top-[2px]'
                xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.03683 1.94273C7.4095 1.53903 7.59566 1.3372 7.79366 1.21946C8.27133 0.935379 8.85949 0.926546 9.34516 1.19616C9.54649 1.3079 9.73849 1.50406 10.1225 1.89638C10.5065 2.2887 10.6987 2.48486 10.808 2.69046C11.0718 3.18657 11.0633 3.7874 10.7852 4.27535C10.6698 4.47758 10.4723 4.66789 10.0772 5.0485L5.37533 9.57716C4.62649 10.2984 4.25199 10.6591 3.78399 10.8419C3.31599 11.0247 2.80166 11.0112 1.77266 10.9843L1.63266 10.9806C1.31949 10.9724 1.16282 10.9684 1.07182 10.865C0.980822 10.7617 0.993154 10.6022 1.01799 10.2831L1.03149 10.1098C1.10149 9.21178 1.13649 8.76276 1.31182 8.35912C1.48715 7.95547 1.78966 7.62774 2.39466 6.97226L7.03683 1.94273Z" stroke="#B5B5B5" stroke-width="2" stroke-linejoin="round"/>
              </svg>
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="13" viewBox="0 0 26 13" fill="none">
              <path d="M5.77011 3.03723C3.88374 4.19552 -1.06219 6.56066 1.95022 9.52033C3.42175 10.966 5.06066 12 7.12117 12H18.8788C20.9394 12 22.5783 10.966 24.0498 9.52033C27.0622 6.56066 22.1163 4.19552 20.2299 3.03723C15.8064 0.320924 10.1936 0.320924 5.77011 3.03723Z" stroke="#B5B5B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
            </div>   
            <p className=' h-[28px]  text-[#9D9D9D]
               font-primaryRegular text-[20px] mt-[-10px] relative xl:right-[41px]
              ' >ویرایش اطلاعات کاربری</p>
            </div>
                 
              
                   <Formik 
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                       
                    >
                       
                      {({ setFieldValue }) => (
                       <Form  className='flex xl:w-[800px] xl:h-[631px]  xl:pr-[15px] xl:pl-[17px] xl:pt-[27px]
                                        justify-between 
                                        max-smx3:dark:bg-gray-800 
                                        max-smx3:w-screen
                                        max-smx3:justify-center
                                        max-smx3:mt-[80px]
                                        max-smx3:grid
                                        max-md:w-screen
                                        max-md:justify-center
                                        max-md:mt-[80px]
                                        max-md:flex
                                        max-md:gap-[60px]
                                        max-lg:w-screen
                                        max-lg:justify-center
                                        max-lg:mt-[100px]
                                        max-lg:flex
                                        max-lg:gap-[80px]
                                        max-md:dark:bg-gray-800
                                        max-md:pb-[30px]
                                        max-xl:w-screen
                                        max-xl:justify-center
                                        max-xl:mt-[120px]
                                        max-xl:flex
                                        max-xl:gap-[180px]
                       ' 
                       style={{direction:'rtl'}}
                       >                        
                     
                     
                      <Group156 
                      bgColor={bgColor}
                         setFieldValue={setFieldValue}
                         
                       />
                       <Group155 
                            bgColor={bgColor}

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