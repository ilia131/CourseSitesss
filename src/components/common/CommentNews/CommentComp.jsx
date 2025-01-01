import { useState , useEffect } from 'react';
import moment from 'moment-jalaali';
import {getReplayComment , PostReplyNewsComment} from '../../../core/services/api/News'
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";

import {Formik , Form , Field} from 'formik'
import { getItem } from '../../../core/services/common/storage.services';
const toPersianDate = (date) => {
    return moment(date).format('jYYYY/jMM/jDD');
  };
  

const CommentComp = ({item, uuid}) => {
    const [cmReply , setCmReply] = useState([])
    const userId = getItem("userId")
    
    const getReplyCm = async () => {
        const data = await getReplayComment(item.id)
        console.log(data)
        setCmReply(data)
    }
    useEffect(()=> {
        getReplyCm()
    },[])

    const validationSchema = Yup.object().shape({
        subject: Yup.string()
          .min(5, "موضوع باید حداقل 3 کاراکتر باشد")
          .required("وارد کردن موضوع اجباری است"),
        description: Yup.string()
          .min(10, "توضیحات باید حداقل 10 کاراکتر باشد")
          .required("وارد کردن توضیحات اجباری است"),
      });
    
      const initialValues = {
        subject: "",
        description: "",
      };
      
      const handleSubmit = async (values) => {
        const formData = {
          newsId: uuid,
          userIpAddress: "198.1.1.1",
          title: values.subject,
          describe: values.description,
          userId: userId,
          parentId: item.id
        }
        // const formData = new FormData(); 
        // formData.append('CommentId', item.id)
        // formData.append('CourseId',uuid);  
        // formData.append('Title', values.subject);  
        // formData.append('Describe', values.description); 
          const user = await PostReplyNewsComment(formData) 
    
        setIsOpen(false); 
      };
    
    
    
    
    
      const [open , setIsOpen] = useState(false)


 return (
    <>
       {open && 
       <>
        <div 
      className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-[22221]" 
    />
          <div className="fixed top-[150px] left-[400px] bottom-0 h-[400px] w-[750px] 
                  bg-gray-200 rounded-[7px] shadow-lg z-[22222]
           ">
            <div className="flex justify-between">
          <p className="font-primaryMedium mx-[10px] mt-[10px] font-bold text-[20px] 
          text-[#005351] 
          ">ارسال نظر</p>
          <p className="font-primaryMedium mx-[10px] mt-[10px] font-bold text-[20px] 
          text-[#005351] 
          ">
            <IoMdClose onClick={() =>setIsOpen(false)} />
          </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
     {({ errors, touched }) => (

           <Form className="flex items-center justify-center h-full gap-[20px] mt-[-30px]">
            <div className="grid gap-[4px]">
              <label>موضوع</label>
              <Field 
               name="subject"

              className="border-none outline-none h-[30px]
              w-[500px] rounded-[7px] px-[10px] bg-white
             "
             placeholder="لطفا موضوع دیدگاه خود را وارد کنین..."
              />
               {errors.subject && touched.subject && (
                <span className="text-red-500 text-sm">{errors.subject}</span>
              )}
              <label >توضیحات</label>
                <Field className="border-none outline-none h-[200px]
                 w-[500px] rounded-[7px] px-[10px] bg-white
                " 
                name="description"

                as='textarea'
                 placeholder="لطفا دیدگاه خود را وارد کنید..."
                />
                  {errors.description && touched.description && (
                <span className="text-red-500 text-sm">{errors.description}</span>
              )}
                </div>
                <button
                 className="bg-[#00E2DC] text-white px-[10px] py-[5px] rounded-[5px] 
                 w-[100px] h-[40px] mt-[250px]
                 "
                 type="submit"
                > ارسال دیدگاه</button>
           </Form>
     )}
              </Formik>
            </div>
      </>
          }
   {cmReply.map((it , index) =>( 
   
     <div className='w-[721px] h-[162px]  rounded-[10px] 
        shadow-[0px_1px_2px_0px_#00000040_inset] bg-[#ECECEC] border-r-[#01CEC9] border
        border-r-[4px]
        '>
              <div className='h-[70px] w-[721px] flex 
       justify-between px-[20px] mt-[13px]
       '> 
           <div className='w-[202px] h-[62px]  flex gap-[8px]'>
                <img src={it.pictureAddress} className="rounded-full w-[50px] h-[50px]" /> 
              
               <div>
                   <p className='text-[#003B39] font-primaryRegular'>{it.author}</p>
                   <p className='text-[14px]'>{toPersianDate(it.insertDate)}</p> 
                 


               </div>
           </div>
           <div className='w-[141px] h-[33px]  flex gap-[9.03px] justify-center'>
               <div className='flex items-center gap-[7.54px]'>
               <p className='text-[16px] '>{it.likeCount}</p>
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                               <g clip-path="url(#clip0_354_3103)">
                               <path d="M5.23718 10.8625H3.06637C2.35388 10.8625 1.71569 10.3805 1.64 9.67152C1.60849 9.37511 1.59272 9.07724 1.59277 8.77916C1.59277 6.8014 2.28166 4.98475 3.43234 3.55629C3.70178 3.22158 4.11775 3.05005 4.54691 3.05005H7.33578C7.67161 3.04984 8.00529 3.10378 8.32396 3.20977L10.4864 3.93199C10.8051 4.03798 11.1388 4.09191 11.4746 4.09171H12.3732M5.23718 10.8625C5.66635 10.8625 5.92537 11.3653 5.74065 11.7527C5.4089 12.4509 5.23736 13.2144 5.23857 13.9874C5.23857 14.4018 5.40319 14.7993 5.69622 15.0923C5.98924 15.3853 6.38666 15.5499 6.80106 15.5499C6.93919 15.5499 7.07167 15.4951 7.16934 15.3974C7.26701 15.2997 7.32189 15.1672 7.32189 15.0291V14.5895C7.32189 14.1916 7.39828 13.7979 7.5455 13.4284C7.75661 12.9007 8.19132 12.5048 8.6934 12.2375C9.46419 11.8262 10.1407 11.2585 10.6795 10.5708C11.0253 10.1305 11.5309 9.82082 12.0906 9.82082H12.3573M5.23718 10.8625H6.76634M12.3732 4.09171C12.3802 4.12643 12.3927 4.16115 12.4086 4.19448C12.8204 5.02781 13.051 5.9653 13.051 6.95626C13.051 7.98889 12.801 8.96319 12.3573 9.82082M12.3732 4.09171C12.3205 3.83824 12.5003 3.57088 12.7725 3.57088H13.4031C14.0204 3.57088 14.5927 3.9306 14.7725 4.52087C15.0079 5.2917 15.1343 6.10905 15.1343 6.95626C15.1343 8.03473 14.9295 9.06458 14.5572 10.0104C14.3447 10.5479 13.8031 10.8625 13.2253 10.8625H12.4941C12.1663 10.8625 11.9767 10.4764 12.1468 10.1958C12.2213 10.0733 12.2915 9.94821 12.3573 9.82082" stroke="#D47300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                               </g>
                               <defs>
                               <clipPath id="clip0_354_3103">
                               <rect width="16.6665" height="16.6665" fill="white" transform="translate(0.0302734 0.272339)"/>
                               </clipPath>
                               </defs>
                   </svg>
            
               </div>
               <div className='flex items-center gap-[7.54px]'>
                <p className='text-[16px] '>{it.disslikeCount}</p> 

               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                   <g clip-path="url(#clip0_354_3099)">
                   <path d="M5.45681 7.39037C6.01653 7.39037 6.52138 7.08065 6.86721 6.64038C7.40628 5.95262 8.08297 5.38496 8.854 4.97372C9.35608 4.70706 9.79149 4.30984 10.0019 3.78276C10.1497 3.4135 10.2256 3.0194 10.2255 2.62166V2.18208C10.2255 2.04395 10.2804 1.91148 10.3781 1.8138C10.4757 1.71613 10.6082 1.66125 10.7463 1.66125C11.1607 1.66125 11.5582 1.82587 11.8512 2.1189C12.1442 2.41192 12.3088 2.80934 12.3088 3.22374C12.3088 4.02373 12.1283 4.78136 11.8068 5.45844C11.622 5.84594 11.8811 6.34871 12.3102 6.34871M12.3102 6.34871H14.481C15.1935 6.34871 15.8317 6.83065 15.9074 7.53967C15.9387 7.83273 15.9546 8.12995 15.9546 8.43203C15.9575 10.3322 15.3081 12.1759 14.1151 13.6549C13.8456 13.9896 13.4297 14.1611 13.0005 14.1611H10.2116C9.87621 14.1611 9.54219 14.107 9.22344 14.0014L7.06096 13.2792C6.74229 13.1732 6.40861 13.1193 6.07278 13.1195H4.95057M12.3102 6.34871H10.7463M4.95057 13.1195C5.0082 13.2618 5.0707 13.4007 5.13806 13.5375C5.27487 13.8153 5.0839 14.1611 4.77487 14.1611H4.14432C3.52697 14.1611 2.95475 13.8014 2.77489 13.2111C2.53437 12.4217 2.41244 11.601 2.41309 10.7758C2.41309 9.69729 2.61795 8.66744 2.99017 7.72162C3.20266 7.18412 3.74433 6.86954 4.32279 6.86954H5.05404C5.38181 6.86954 5.57139 7.25565 5.40126 7.5362C4.80813 8.51255 4.49531 9.63337 4.4971 10.7758C4.4971 11.6049 4.65821 12.3959 4.95126 13.1195H4.95057Z" stroke="#D47300" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   </g>
                   <defs>
                   <clipPath id="clip0_354_3099">
                   <rect width="16.6665" height="16.6665" fill="white" transform="translate(0.850586 0.272339)"/>
                   </clipPath>
                   </defs>
                   </svg>
            
               </div>
               <div className='flex items-center gap-[7.54px]'
               onClick={() =>setIsOpen(true)}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.61804 0.473119C5.71557 0.570774 5.77036 0.703151 5.77036 0.841171C5.77036 0.979191 5.71557 1.11157 5.61804 1.20922L2.34029 4.48697H9.41662C10.6598 4.48697 11.8521 4.98083 12.7311 5.8599C13.6102 6.73896 14.1041 7.93124 14.1041 9.17443C14.1041 10.4176 13.6102 11.6099 12.7311 12.489C11.8521 13.368 10.6598 13.8619 9.41662 13.8619H7.3333C7.19517 13.8619 7.06269 13.807 6.96502 13.7093C6.86735 13.6117 6.81247 13.4792 6.81247 13.3411C6.81247 13.2029 6.86735 13.0704 6.96502 12.9728C7.06269 12.8751 7.19517 12.8202 7.3333 12.8202H9.41662C9.89539 12.8202 10.3695 12.7259 10.8118 12.5427C11.2541 12.3595 11.656 12.0909 11.9946 11.7524C12.3331 11.4139 12.6017 11.0119 12.7849 10.5696C12.9681 10.1273 13.0624 9.6532 13.0624 9.17443C13.0624 8.69565 12.9681 8.22157 12.7849 7.77924C12.6017 7.33691 12.3331 6.935 11.9946 6.59646C11.656 6.25791 11.2541 5.98937 10.8118 5.80615C10.3695 5.62293 9.89539 5.52863 9.41662 5.52863H2.34029L5.61804 8.80638C5.66921 8.85406 5.71025 8.91156 5.73872 8.97545C5.76719 9.03933 5.78249 9.1083 5.78373 9.17823C5.78496 9.24816 5.7721 9.31763 5.7459 9.38248C5.71971 9.44733 5.68072 9.50624 5.63126 9.5557C5.5818 9.60516 5.52289 9.64415 5.45804 9.67034C5.39319 9.69654 5.32372 9.7094 5.25379 9.70817C5.18386 9.70693 5.11489 9.69163 5.051 9.66316C4.98712 9.63469 4.92962 9.59365 4.88194 9.54248L0.715306 5.37585C0.617772 5.2782 0.562988 5.14582 0.562988 5.0078C0.562988 4.86978 0.617772 4.7374 0.715306 4.63975L4.88194 0.473119C4.97959 0.375585 5.11197 0.320801 5.24999 0.320801C5.38801 0.320801 5.52038 0.375585 5.61804 0.473119Z" fill="#01B4AF"/>
                     </svg>
               </div>
           </div>
            </div>
            <div className='h-[40px] w-[721px] text-[13px] px-[20px] '>
            <p>{it.title}</p>
           <p>{it.describe}</p>
          
            </div> 
        </div>
       
        
        ))}
   </>
  )
}

export default CommentComp