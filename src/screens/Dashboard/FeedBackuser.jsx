import { useState } from "react"
import SelectOption from "../../components/common/SelectOption/SelectOption"
import SearchForm from "../../components/common/SearchForm/SearchForm"
import images from '../../assets/dashboardpng'
import Group146 from "../../components/DashboardHolder/FeedBackUser/Group146"
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"
import Skeleton from 'react-loading-skeleton';

const FeedBack = () => {
  const [row2 , setRow2] = useState([
    {number:'#۳۶۶', coursename:'دوره آموزش  جامع  Js' , sorting:'دوره آموزشی', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye , vaziet:'در انتظار تایید' , delete:images.fr111 , color:'#E48900' },
    {number:'#۳۱۶', coursename:'چگونه مدیر پروژه بهتری باشیم' , sorting:'اخبار و مقالات', timestart:'۱۴۰۳/۰۲/۰۸ , ۱۵:۲۸' , eye:images.eye , vaziet:'تایید شده' , delete:images.fr111, color:'#00C070' },
    {number:'#۲۸۳', coursename:'دوره آموزش  جامع  Js' , sorting:'دوره آموزشی', timestart:'۱۴۰۳/۰۳/۰۲ , ۱۶:۲۷' , eye:images.eye , vaziet:'در انتظار تایید' , delete:images.fr111 , color:'#E48900' },

  ])
  const options = [
    { value: 'option1', label: 'جدید ترین' },
    { value: 'option2', label: 'محبوب ترین' },
    { value: 'option3', label: 'ارزان ترین' },
  ];

  const formStyle = `w-[519px] h-[40px] bg-[#FBFBFB] flex rounded-[25px] justify-between 
    items-center 
    shadow-[0px_1px_3px_0px_#00000026_inset]
   pl-[4px] pr-[27px]
    max-lg:w-[400px]
    max-xl:w-[519px]
    max-md:w-[250px]
    max-smx3:w-[250px]

  `
  const inputdivStyle = `w-[34px] h-[34px] bg-[#CC6E00] rounded-full flex justify-center items-center`
  const inputStyle =`w-[189px] placeholder:font-primaryMedium
  placeholder:text-[#AAAAAA] placeholder:text-[16px] place-holder:font-[400] text-right
  border-none outline-none bg-transparent pb-[3px]
  `
  return (
    <div className="xl:w-[875px] grid justify-center mt-[29px] justify-items-center
    max-smx3:dark:bg-gray-800 max-smx3:w-screen max-md:w-screen max-md:dark:bg-gray-800
     max-lg:w-screen
   max-lg:dark:bg-gray-800
     max-xl:w-screen
     max-xl:dark:bg-gray-800

    ">
    <div className="xl:w-[875px] h-[40px]  flex justify-between 
      max-smx3:grid
      max-smx3:justify-items-center max-smx3:gap-[20px] max-md:gap-[30px]
      max-lg:gap-[100px]
      max-xl:gap-[180px]
    " >
    <div>
       <SelectOption  options={options} />
     </div>
     <SearchForm 
      formStyle={formStyle}
      inputdivStyle={inputdivStyle}
      inputStyle={inputStyle}
      
     />
   </div> 
 <div className="w-[874px] h-[545px]  mt-[53px] flex-col
    max-smx3:w-[300px] max-smx3:overflow-x-scroll 
    max-smx3:mt-[100px] max-md:overflow-x-scroll max-md:mt-[60px]
    max-md:w-[480px] max-lg:w-[700px] max-lg:mt-[60px] max-xl:mt-[60px]
    max-xl:w-[874px] max-lg:overflow-x-scroll
 "> 
        <div className="max-smx3:w-[700px] max-md:w-[874px] " >
            <div className="w-[874px] h-[32px] border-b-[1.5px] border-b-[#007875] pr-[157px] pl-[126px] 
              flex justify-end
              dark:border-b-[#59d7d3]
              ">
                <p className="font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                " >زمان</p>
                <p className="ml-[121px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                " >وضعیت</p>
                <p className="ml-[90px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                ">دسته بندی</p>
                <p className="ml-[109px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                ">دیدگاه در</p>
              </div>
              <div className="w-[874px] flex-col pt-[3px]" >
                  {row2.map((item , index) => ( 
                      <Group146 
                        item={item}
                        index={index}
                        key={index}
                      />
                  ))}
                
                  
          </div>
        </div>
   </div>   
     {/* <PagiantionDashboard /> */}
 </div>
  )
}

export default FeedBack