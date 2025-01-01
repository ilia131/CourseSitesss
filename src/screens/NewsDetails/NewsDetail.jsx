import {useState, useEffect} from 'react'
import images from "../../assets/img/NewsDetail";
import Card from '../../components/common/SideCard/card';
import CardNewsDetail from '../../components/NewsDetail/CardNewsDetail';
import TextBar from '../../components/NewsDetail/TextBar';
import RateBar from '../../components/NewsDetail/RateBar';
import {useParams} from 'react-router-dom'
import Comment from '../../components/common/CommentNews/Comment';
import { getCourseList  } from '../../core/services/api/course';
import { GetNewsById, getNewsComment ,PostNewsComment } from '../../core/services/api/News';
import { IoMdClose } from "react-icons/io";
import { Formik , Field ,ErrorMessage , Form } from 'formik';
import * as Yup from "yup";
import { getItem } from '../../core/services/common/storage.services';
import moment from 'moment-jalaali';

import { useBgColor } from '../../components/BgChangeAdmin/BgColorContext';

const toPersianDate = (date) => {
  return moment(date).format('jYYYY/jMM/jDD');
};









const NewsDetail = () => {
  const { bgColor , setBgColor} = useBgColor();


  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const textColor = getComplementaryColor(bgColor);  
 

  const [cards ,setCards] = useState([])
  const [detail , setDetail] = useState([])
  
  const {id} = useParams()
  const userId = getItem("userId")
  const getNewsDetail = async () =>{
    const dataa2 = await GetNewsById(id)
    setDetail(dataa2?.detailsNewsDto)
  }

  const getCourseCard = async () => {
    const data1 = await getCourseList()
    setCards(data1)
  }
  const [comment, setComment] = useState([])
  const getComment = async () => {
    const data2 = await getNewsComment(id)
    setComment(data2)
  }
  
  useEffect(()=> {
     getCourseCard()
     getNewsDetail()
     getComment()
  },[])
  
  const [open , setIsOpen] = useState(false)
  const HandleOpen = () => {
    setIsOpen(true)
  }


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
    console.log("Submitted Data:", values);
    const formData ={
      newsId: id,
      userIpAddress: "198.1.2.3",
      title: values.subject,
      describe: values.description,
      userId: userId
    }
    // const formData = new FormData(); 
    // formData.append('CourseId',uuid);  
    // formData.append('Title', values.subject);  
    // formData.append('Describe', values.description); 
    const user = await PostNewsComment(formData) 

    setIsOpen(false); 
  };
  
    return (
    <>
    
       <div className="w-full h-full flex font-primaryMedium justify-center dark:bg-gray-800 pt-[40px]"
             style={{ backgroundColor: bgColor }}

       >
          
          <div className=" w-[81%] max-lg:w-[85%] max-cd:w-[92%] max-smx3:w-[98%] flex max-md:flex-col gap-4  ">
             
             <div id='Left' className="w-[40%] max-md:w-[100%] h-fit  flex flex-wrap max-md:order-2">
                
                <div className="w-[100%] h-[329px] flex justify-center dark:bg-gray-800 rounded-tr-[10px]  rounded-bl-[10px] rounded-tl-[75px] rounded-br-[10px] ">
                    <img className="shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]" src={images.Women} alt="" />
                </div>
                  

                <div className=" h-[601px] w-[100%] bg-[#FFFF] dark:bg-gray-300 rounded-[15px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)] flex flex-wrap mt-7 relative ">

                  <div className=" h-[50px] w-[92%] rounded-t-xl mt-[16px] m-auto bg-[#E8E8E8] shadow-[0_1px_2px_0px_rgba(0,0,0,2)] relative">
              

                    <span className=" w-[50%] h-[21px]  text-right text-[20px] leading-[21px] font-normal text-[#555555] absolute top-[14px] right-[27px]">
                      دوره های مرتبط 
                    </span>

                  </div>
                                                   {cards.slice(0,3).map((item, index) =>(
                                                          <Card 
                                                           item={item}
                                                          /> 
                                                     ))}
                </div>

                                                  
                                                         <CardNewsDetail 
                                                        />
                                               
             </div>                              

        
             <div id='Right' className="w-[60%] max-md:w-[100%] h-[100%] flex flex-wrap max-md:order-1">
                 
                <div dir='rtl' className="w-[100%] h-[149px] flex justify-center relative bg-custom-gradient backdrop-blur-md rounded-tr-[75px]  
                rounded-bl-[10px] rounded-tl-[5px] rounded-br-[10px] shadow-[0_1px_2px_0px_rgba(0,0,0,0.25)]">
                        
                        <div className=" w-[94%] h-[86px] flex absolute right-[35px] max-cd:right-[20px]  top-[32px]  ">
                            <div className=" w-[14px] h-[14px] rounded-full bg-[#01CEC9] relative top-4   "></div>

                            <div className=" w-[98%] h-[50%] font-bold text-[22px]
                            
                            leading-[33px] dark:text-[#01CEC9] text-[#005351] mr-3 ">
                              {detail?.title}
                            </div>

                        
                        </div>

                        <div className=" w-[60%] max-xl:w-[355px] max-xl:gap-1 h-[30px]  flex absolute left-[10%]  max-cd:left-[6%] max-smx2:left-[1%] top-[103px]  ">
                               
                               <div className=" w-[30%] max-xl:w-[91px] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] ">
                                      <span>
                                      {detail?.currentView} بازدید
                                      </span>
                                      <img className="mr-2" src={images.eyse} alt="" />
                               </div>
                               <div className=" w-[30%]max-xl:w-[111px] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA] ">
                                      <span>
                                        {toPersianDate(detail?.insertDate)}
                                      </span>
                                      <img className="mr-2" src={images.callender} alt="" />
                               </div>
                               <div className=" w-[30%] 
                               truncate
                                max-xl:w-[111px] h-5 flex font-normal text-[15px] leading-[16px] text-[#AAAA]  ">
                                      <span>
                                        {detail?.addUserFullName}
                                      </span>
                                      <img className="mr-2" src={images.person} alt="" />
                               </div>
                                  <img className="  pr-[15px] max-smx4:pr-[2px] h-full  " src={images.save} alt="" />
                        </div>
                </div>
                


                                                          <TextBar 
                                                           detail={detail}
                                                          />

                                                          <RateBar />

                <div dir='rtl' className=" w-full   relative p-0 mt-[20px]" >
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
                        <div className="fixed top-[150px] left-[400px] right-0 bottom-0 h-[400px] w-[750px] 
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
                         <div className='relative left-[30px]'>
                                {comment.map((item, index)=> (
                                  <Comment
                                    uuid={id}
                                    item={item}
                                  />
                                  ))} 
                        </div>
                </div>  


                  

             </div>
          </div>
      </div>
    </>
  )
}

export default NewsDetail