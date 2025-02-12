import {useState , useEffect } from "react";
import Accordion from "../../components/CourseDetail/Accordion";
import Top from "../../components/CourseDetail/Top";
import Detail from "../../components/CourseDetail/Detail";
import images from '../../assets/img/coursDetail';
import Comment from '../../components/common/Comment/Comment.jsx';
import Card from '../../components/common/SideCard/card';
import {getCommentById, getCourseDetail, getCourseList , postComment , ReserveCourse} from '../../core/services/api/course'
import { useParams } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";

import {Formik , Form , Field} from 'formik'
import { setItem } from "../../core/services/common/storage.services";



const CourseDetail = () => {

  const [detail , setDetail] = useState([])
  const [cards , setCards] = useState([])
  const [comment , setComment] = useState([])
  const [commentReply , setCommentReply] = useState([])
  const {uuid} = useParams()
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
  setItem('courseId', uuid)

  const ReserveCOurseUSer = async () => {
    const add = {
      courseId: uuid
    }     
    const data = await ReserveCourse(add)
 }
  
  const handleSubmit = async (values) => {
    console.log("Submitted Data:", values);
    const formData = new FormData(); 
    formData.append('CourseId',uuid);  
    formData.append('Title', values.subject);  
    formData.append('Describe', values.description); 
    const user = await postComment(formData) 

    setIsOpen(false); 
  };



  const getCourseDetail1 = async () => {
    const data = await getCourseDetail(uuid)
    setDetail(data)
  }

  const [open , setIsOpen] = useState(false)

  const getComment = async () => {
    const data2 = await getCommentById(uuid)
    setComment(data2)
  }

  const getCourseCard = async () => {
    const data1 = await getCourseList()
    setCards(data1)
  }

  const HandleOpen = () => {
    setIsOpen(true)
  }

  useEffect(()=> {
      getCourseDetail1()
      getCourseCard()
      getComment()
  },[])
   
  
  return (
    <>
   <div dir="rtl" className="  font-['BYekan'] bg-[#F9F9F9] dark:bg-gray-800 "
                // style={{ backgroundColor: bgColor }}

   >
     
     <div id="ADS" className=" h-[395px] max-sm:h-fit w-[81.3%] max-xl:w-[90%] max-cd:w-[97%] max-md:w-[100%]  mx-auto flex max-sm:flex-col-reverse gap-[29px] max-cd:gap-[15px] max-md:gap-[5px] pt-[35px]" >
       <Top
        detail={detail}
        ReserveCOurseUSer={ReserveCOurseUSer}
       />
    </div>
    
  <div className=" flex max-md:flex-col gap-[30px] pt-7 " >
    
    <div id="right" className=" w-[53.3%] max-cd:w-[58%] max-md:w-[70%] max-smx3:w-[98%] flex flex-wrap max-md:order-2 mr-auto max-md:mx-auto " >

      <div className=" h-[620px] w-full  flex  flex-wrap " >
        
        <div className=" h-[33px] w-[100%] " > 
           <p className=" text-[25px] leading-[32px] font-bold aling-right text-[#005351] dark:text-blue-400 " > توضیحات </p> 
        </div>
       

        <div className=" h-[570px] w-[810px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.3)] m-auto overflow-hidden relative rounded-2xl backdrop-opacity-60 bg-gradient-to-b from-[#ffffff] to-gray-400"
                       >
          <div className="w-[100%] border-2 m-auto pt-6 
          text-[18px] max-smx3:text-[14px] leading-[27px] 
          font-normal aling-right text-slate-600 pl-10 pr-10 " > 
          {detail?.describe}
          </div>
          
          <button class=" absolute bottom-[44px] right-[35%] rounded-full border border-[#01CEC9] py-2 px-4 text-center text-[20px] font-normal leading-[32px] transition-all shadow-sm hover:shadow-lg text-[#006865] dark:text-blue-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
             مطالعه بیشتر +
          </button>
        </div>
        

      </div>

      <div className="  w-full flex flex-wrap relative " >
        
        <Accordion />

      </div>
      
      <div className=" w-full  flex flex-wrap relative p-0 mt-[20px] " >
      <div className="flex justify-between w-full">
        <p className="text-[25px] text-[#005351]">نظرات</p>
      <div className="bg-[#00E2DC] w-[185px] text-[#005653] flex justify-center 
        gap-[8.38px] 
        h-[37px] rounded-[7px] items-center mt-[31px] cursor-pointer hover:bg-[#3df3ed]"
        onClick={HandleOpen}
        >
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
        <path d="M5.82813 7.5C5.82813 7.57874 5.79685 7.65425 5.74117 7.70992C5.6855 7.7656 5.60999 7.79687 5.53125 7.79687C5.45251 7.79687 5.377 7.7656 5.32133 7.70992C5.26565 7.65425 5.23438 7.57874 5.23438 7.5C5.23438 7.42126 5.26565 7.34575 5.32133 7.29008C5.377 7.2344 5.45251 7.20312 5.53125 7.20312C5.60999 7.20312 5.6855 7.2344 5.74117 7.29008C5.79685 7.34575 5.82813 7.42126 5.82813 7.5ZM5.82813 7.5H5.53125M8.79688 7.5C8.79688 7.57874 8.7656 7.65425 8.70992 7.70992C8.65425 7.7656 8.57874 7.79687 8.5 7.79687C8.42126 7.79687 8.34575 7.7656 8.29008 7.70992C8.2344 7.65425 8.20313 7.57874 8.20313 7.5C8.20313 7.42126 8.2344 7.34575 8.29008 7.29008C8.34575 7.2344 8.42126 7.20312 8.5 7.20312C8.57874 7.20312 8.65425 7.2344 8.70992 7.29008C8.7656 7.34575 8.79688 7.42126 8.79688 7.5ZM8.79688 7.5H8.5M11.7656 7.5C11.7656 7.57874 11.7343 7.65425 11.6787 7.70992C11.623 7.7656 11.5475 7.79687 11.4688 7.79687C11.39 7.79687 11.3145 7.7656 11.2588 7.70992C11.2032 7.65425 11.1719 7.57874 11.1719 7.5C11.1719 7.42126 11.2032 7.34575 11.2588 7.29008C11.3145 7.2344 11.39 7.20312 11.4688 7.20312C11.5475 7.20312 11.623 7.2344 11.6787 7.29008C11.7343 7.34575 11.7656 7.42126 11.7656 7.5ZM11.7656 7.5H11.4688M15.625 7.5C15.625 11.1068 12.4346 14.0312 8.5 14.0312C7.81694 14.0321 7.13678 13.9424 6.47729 13.7645C5.54769 14.4183 4.41367 14.7153 3.28292 14.6012C3.1572 14.5891 3.03201 14.572 2.90767 14.5498C3.29785 14.0899 3.56433 13.5382 3.68192 12.9467C3.75317 12.5849 3.57663 12.2334 3.31221 11.9761C2.11125 10.8076 1.375 9.23296 1.375 7.5C1.375 3.89317 4.56542 0.96875 8.5 0.96875C12.4346 0.96875 15.625 3.89317 15.625 7.5Z" stroke="#005351" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className="text-[15px] cursor-pointer
        "
     
        >ارسال  دیدگاه جدید
        </p>
      </div>
        </div>
        {open && 
        <>
             <div 
              className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-[22221]" 
         />
          <div className="fixed top-[150px] left-[400px]  bottom-0 h-[400px] w-[750px]
           backdrop:blur-sm 
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
           {comment.map((item, index) => (
             <Comment  
              item={item}
              uuid={uuid}
             /> 
            ))}
      </div>

    </div>

    <div id="left" className=" h-[1616px] w-[27%] max-md:w-[70%]  max-xl:w-[33%] max-cd:w-[40%] max-smx3:w-[92%] flex flex-wrap max-md:order-1 relative ml-auto max-md:mx-auto ">

      <div className=" h-[1015px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap relative">

        <div className=" w-[90%] h-[71px]  flex mt-[24px] m-auto gap-[15px]">

          <div className=" w-[49%] h-full bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative ">

            <div className=" w-[42px] h-[43px]  absolute top-[16px] right-[42px] flex flex-wrap
                           
                          ">
              <span className=" w-full h-[50%]  text-center text-[19px] leading-[21px] font-normal"> {detail?.capacity}</span>
              <span className=" w-full h-[50%]  text-center text-[15px] leading-[21px] font-normal text-[#888888] "> دانشجو </span>
            </div>

            <div className=" w-[35px] h-[35px]  absolute top-[19px] left-[20%] max-lg:left-[5%] ">
            <img src={images.peopole}/>
            </div>

          </div>

          <div className=" w-[49%] h-full bg-[#F7F7F7] flex rounded-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)] relative">

           <div className=" w-[42px] h-[43px] absolute top-[18px] right-[40px] flex flex-wrap">
              <span className=" w-full h-[50%]  text-center text-[19px] leading-[21px] font-normal"> {detail?.likeCount}</span>
              <span className=" w-full h-[50%]  text-center text-[15px] leading-[21px] font-normal text-[#888888] "> رضایت</span>
            </div>

            <div className=" w-[35px] h-[35px] absolute top-[18px] left-[20%] max-lg:left-[5%]">    

            <img src={images.star} />
            </div>
            

          </div>
        </div>
        
        <div className=" w-[88%] h-[44px]   absolute top-[119px] right-[23px] flex flex-wrap  leading-[21px] font-normal text-center text-[#00504E]" >

          <div className=" w-[95px] h-[21px] text-[13px] " > درصد تکمیل دوره </div>
          <div className=" w-[27px] h-[21px] text-[15px] absolute left-2 " > 87% </div>

          <div className=" w-full h-[8px] bg-[#F0F0F0]  rounded-[7px] mb-[-7px] relative ">
            <div className=" w-[87%] h-[8px] bg-[#01CEC9] rounded-[7px] absolute left-0 "></div>
          </div>
        </div>
          
                 <Detail />

         <div className=" w-[177px] h-[199px] flex flex-wrap absolute bottom-[36px] right-[27%] ">
          
            
            <img src={images.mehdi} className="w-[135px] h-[135px] m-auto  rounded-full shadow-[0_3px_4px_0px_rgba(0,0,0,0)]"/>

            <button class=" w-[177px] h-[40px] mt-[22px]   rounded-full border border-[#E48900] py-2 px-4 text-center text-[15px] font-normal leading-[21px] transition-all shadow-sm hover:shadow-lg text-[#6B3A00] hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              پروفایل مدرس دوره           
            </button>

         </div>
      </div>

      <div className=" h-[601px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap mt-7 relative 
                       ">

        <div className=" h-[50px] w-[378px] rounded-t-xl mt-[16px] m-auto bg-[#E8E8E8] shadow-[0_1px_2px_0px_rgba(0,0,0,2)] relative">
     

           <span className=" w-[114px] h-[21px]  text-center text-[20px] leading-[21px] font-normal text-[#555555] absolute top-[14px] right-[27px]">
             دوره های مرتبط 
           </span>

        </div>
      {cards.slice(0,3).map((item, index)=>( 
        <Card 
        item={item}
        index={index}
        />
      ))} 
      </div>

    </div>

  </div>

  </div> 
    </>
   )
}

export default CourseDetail