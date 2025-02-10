import  { Fragment  , useState ,useRef  } from 'react'
import images from '../../../assets/dashboardpng'
import {Form , Formik , Field , ErrorMessage} from 'formik'
import { AddProfileImage, SelectProfileImage } from '../../../core/services/api/user';
import toast from 'react-hot-toast';

const ImageField1 = ({previewImage ,  handleFileChange , fileInputRef , setPreviewImage , userInfo , setRefetch

  ,bgColor
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage1 , setPreviewImage1] = useState(images.profilepic)
    const [confirmedImage, setConfirmedImage] = useState(null);
    const [image1 , setImage1] = useState([])
    const formikRef = useRef();
    const [selectedId, setSelectedId] = useState(null);

    const handleImageClick1 = async (id) => {
      setSelectedId(id);
      try {
        setConfirmedImage(previewImage);
        
       
    
        const formData = new FormData();
        formData.append("ImageId", id);
    
        const result = await SelectProfileImage(formData);
        
        toast.success('عملیات موفقیت آمیز بود')
        setRefetch((old)=> old + 1)
      } catch (error) {
        console.error("Error in handleConfirm:", error);
      }
    };
    const handleImageClick = () => {
        fileInputRef.current.click();
        setIsModalOpen(true);
    };
    const handleModalImage = () => {
        fileInputRef.current.click();
    }
    const openModal = () => {
        setIsModalOpen(true)
    };
    
    const closeModal = () => {
        setIsModalOpen(false)
    };
  

    const handleConfirm = async () => {
      try {
        setConfirmedImage(previewImage);
        
      
    
        const formData = new FormData();
        formData.append("formFile", image1);
    
        const result = await AddProfileImage(formData);
        toast.success('عملیات موفقیت آمیز بود')
        setRefetch((old)=> old + 1)
      } catch (error) {
        console.error("Error in handleConfirm:", error);
      }
  
    };
     
 

     const handleDelete = () => {
       setConfirmedImage("");
       setPreviewImage(previewImage)
       setRefetch((old)=> old + 1)
    }
   
  return (
    <Fragment>
         <div className='xl:mt-[-5px] relative top-[3px]' >

           <div className='cursor-pointer w-[155px] xl:h-[160px] rounded-full'>
            <img
                src={previewImage? previewImage : userInfo?.currentPictureAddress} 
                alt="Profile"
                onClick={handleImageClick}
                
                className='mt-[7px] cursor-pointer w-[155px] h-[160px] rounded-full'
            />
            </div> 
                 <div className='relative top-[-42px] left-[8px] '>
                        <img src={images.vector61} />
                        <div className='absolute top-[7px] left-[55.44px] '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M8.5827 7.68519C8.37712 8.01948 8.10283 8.30351 7.77907 8.51736C7.45532 8.7312 7.08994 8.86967 6.70857 8.92306C6.27459 8.98642 5.84403 9.05447 5.41347 9.12839C4.21088 9.33373 3.35547 10.4214 3.35547 11.6734V21.5599C3.35547 22.2601 3.6262 22.9316 4.1081 23.4267C4.59 23.9218 5.2436 24.1999 5.92511 24.1999H23.0561C23.7376 24.1999 24.3912 23.9218 24.8731 23.4267C25.355 22.9316 25.6257 22.2601 25.6257 21.5599V11.6734C25.6257 10.4214 24.7692 9.33373 23.5677 9.12839C23.1368 9.05463 22.7051 8.98618 22.2726 8.92306C21.8915 8.86951 21.5263 8.73096 21.2028 8.51713C20.8792 8.30329 20.6051 8.01934 20.3996 7.68519L19.4609 6.14107C19.25 5.78919 18.9598 5.49467 18.6146 5.28247C18.2695 5.07026 17.8797 4.94661 17.4782 4.92197C15.4879 4.81214 13.4933 4.81214 11.503 4.92197C11.1015 4.94661 10.7117 5.07026 10.3666 5.28247C10.0214 5.49467 9.73118 5.78919 9.52033 6.14107L8.5827 7.68519Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.6301 15.3999C19.6301 16.8002 19.0887 18.1432 18.1249 19.1334C17.1611 20.1236 15.8539 20.6799 14.4909 20.6799C13.1278 20.6799 11.8206 20.1236 10.8568 19.1334C9.89302 18.1432 9.35156 16.8002 9.35156 15.3999C9.35156 13.9995 9.89302 12.6566 10.8568 11.6664C11.8206 10.6762 13.1278 10.1199 14.4909 10.1199C15.8539 10.1199 17.1611 10.6762 18.1249 11.6664C19.0887 12.6566 19.6301 13.9995 19.6301 15.3999ZM22.1998 12.7599H22.2089V12.7693H22.1998V12.7599Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
            </div>  
            <Formik
        innerRef={formikRef}
        initialValues={{ imgprofile: null }}
      >
        <Form >
             <Field name="formFile">
            {({ field }) => (
           
            <input
                {...field}
                type="file"
                 ref={fileInputRef}
             
                style={{ display: 'none' }} 
                accept="image/png, image/jpeg"
                onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                    field.onChange(event)
                    handleFileChange(event)
                    setImage1(file)
                }
                
                }}
            />
     
            )}
            
            </Field>
              </Form>
            </Formik >
            <div className="h-[10px] border border-[#FFFFFF] dark:border-gray-800
                                            max-md:w-[150px]
                                            "
                                            // style={{borderColor:bgColor}}

                                            >
                    <ErrorMessage name="img" component="div" 
                            className="text-red-500 font-primaryMedium text-sm truncate" />
                    </div> 
        </div>
       {isModalOpen && (
        <div className="relative  bottom-[294px] right-[100px] max-smx3:hidden max-md:hidden max-lg:hidden
        
           max-xl:right-[150px]
        ">
          <div className="absolute z-[9999999] w-[916px] h-[624px] bg-[#525252B2] rounded-[15px]
            backdrop-blur-[13px]
            shadow-[0px_2px_4px_0px_#00000040]
            
          ">
           <div className='w-[771px] h-[522px]  ml-[116px] mt-[30px]
            justify-center grid
           ' >
             <div>
            <div className='w-[771px] justify-end flex' >
                <button onClick={closeModal} className='w-[26px] h-[26px] bg-[#B9B9B9] 
                justify-center flex items-center 
                rounded-full'>
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.72313 1.72267L10.562 10.5615M10.562 1.72267L1.72313 10.5615" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                </button>
            </div>
             </div>
             <div className='mt-[-5px] w-[771px] justify-center flex'> 
              <img onClick={() => fileInputRef.current.click()}
                       src={previewImage? previewImage : userInfo?.currentPictureAddress} 
                       alt="Profile"
                       className=' cursor-pointer w-[300px] h-[300px] rounded-[15px] mr-[80px]'
              />
              <div className='w-[50px] h-[50px] bg-[#FFFFFF] rounded-full
              flex justify-center items-center  shadow-[0px_1px_3px_0px_#00000040]
              absolute bottom-[235px] left-[582px]
              ' 
              onClick={handleConfirm}
              >
                <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.1121 0.715431C24.8019 0.0164058 25.9204 0.0164058 26.6103 0.715431C27.2916 1.4059 27.3 2.52008 26.6353 3.22094L12.5222 19.9038C12.5086 19.921 12.4941 19.9374 12.4788 19.953C11.7889 20.6521 10.6705 20.6521 9.98067 19.953L1.39235 11.2504C0.70255 10.5514 0.70255 9.41808 1.39235 8.71905C2.08221 8.02003 3.20067 8.02003 3.89053 8.71905L11.1765 16.102L24.0653 0.768967C24.0798 0.75018 24.0954 0.732309 24.1121 0.715431Z" fill="#00A981"/>
                </svg>
              </div>
             </div>
             <div className='flex  gap-[30px] justify-start w-[771px] top-[30px]
              overflow-x-scroll mt-[20px]
             '>
              <div className='absolute w-[26px] h-[26px] bg-[#0f0e0e] rounded-full justify-center
               flex items-center left-[105px] bottom-[195px] 
               
              '
               onClick={handleDelete}
               >
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                             <path d="M1.62902 1.62904L10.2601 10.2601M10.2601 1.62904L1.62902 10.2601" stroke="#CB0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
               </div>
          {userInfo?.userImage.length > 0 && <>
           {userInfo?.userImage.map((item, index)=> (
            
                <img 
                       src={item.puctureAddress} 
                       alt="Profile"
                       className='cursor-pointer w-[110px] h-[110px] rounded-[10px]'
                       onClick={() => {
                        handleImageClick1(item.id); 
                        setPreviewImage(item.puctureAddress); 
                      }}
               />
       
            ))}</>
            }
                  {confirmedImage? (  
              <>
              <img
                       src={confirmedImage? confirmedImage : images.profilepic} 
                       alt="Profile"
                       className=' cursor-pointer w-[110px] h-[110px] rounded-[10px]'
               />
                <div className='w-[110px] h-[110px]  flex justify-center items-center'
                
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                         <path d="M11 1.625V20.375M20.375 11H1.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                </div>
              </> 
              ) : (
                <div className='w-[110px] h-[110px]  flex justify-center items-center'
                
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                         <path d="M11 1.625V20.375M20.375 11H1.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                </div>
               )} 
             </div>
            </div>
          </div>
        </div>
      )} 
    </Fragment>
  )
}

export default ImageField1