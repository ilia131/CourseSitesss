
import { Formik,Form,Field } from "formik"
import CourseSearch from "../../components/Courses/CourseSearch"

import { useState , useEffect } from "react"
import "../../components/Courses/Course.css"
import SideBarFilter from "../../components/Courses/SideBarFilter"
import FinalList from "../../components/Courses/FinalList"
import FinalGrid from "../../components/Courses/FinalGrid"
import { getTech , getAllCourse, getCourseType, filterByTypeCourse, filterByLevelCourse, filterbyCostdp } from "../../core/services/api/course"




const Courses = () => {
  const [active, setActive]=useState(1)
  const [check , setCheck] = useState([])
  const [checkbox, setCheckbox] = useState(false)
 
  const HandleCheck = async (id) => {
    let updatedItems;
  
    if (check.includes(id)) {
      updatedItems = check.filter((item) => item !== id);
    } else {
      updatedItems = [...check, id];
    }
  
    setCheck(updatedItems);
    
    const isNotEmpty = updatedItems.length > 0;
    setCheckbox(isNotEmpty);
  
    if (isNotEmpty) {
      await getTechList(updatedItems);
    }
  };

  const [selectedId1, setSelectedId1] = useState(null); 
  const [selectedId2, setSelectedId2] = useState(null); 

  const handleChange =  async (id) => {
    setSelectedId1(id); 
    const data = await filterByTypeCourse(id)
    setSliderCard(data?.courseFilterDtos)
    
  };

  const handleChange1 =  async (id) => {
    setSelectedId2(id); 
    const data = await filterByLevelCourse(id)
    setSliderCard(data?.courseFilterDtos)
    
  };



  const [slidercard , setSliderCard] = useState([])
  const getCardCourse = async () => {
    const data = await getAllCourse()
    setSliderCard(data?.courseFilterDtos)
  }

   const [card , setCard] = useState([])
 
 


  const [gettech , setGettech] = useState([])
 
  const getTechList = async (updatedItems) => {

    try {
      const listTech = updatedItems.join(",");
      console.log("sdsad" , listTech)
  
      const data = await getTech(1, listTech);
  
      if (data) {
        setSliderCard(data?.courseFilterDtos);
        console.log(data);
      } else {
        console.error("داده‌ای از سرور دریافت نشد.");
      }
    } catch (error) {
      console.error("خطا در ارسال به بک‌اند:", error);
    }
  };
  // useEffect(()=> {
  //   getCardCourse()
  //   getTechList()
  // }, [])
 useEffect(()=>{
    if (checkbox) {
       getTechList();
    } else {
      getCardCourse();
    }
   },[checkbox])
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(20000000);
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = async () => {
    const result =  await filterbyCostdp(minValue , maxValue)
    setSliderCard(result?.courseFilterDtos)
  };

  useEffect(() => {
    handleFilter()
  } , [minValue, maxValue])
  return (
    <Formik>
      <div className="overflow-visible font-primaryRegular text-black  justify-center dark:bg-gray-800 pt-[77px] pb-4">
        <CourseSearch/>
        <div className="flex mx-auto w-[92%] justify-center gap-[40px]  dark:bg-gray-800 mt-10 ">
          <div className=" lg:w-[72%] cd:w-[94%] ">
                <div className="md:w-[80%] sm:w-[70%] cd:w-full h-[45px] cd:ml-0 sm:ml-[150px] md:ml-[100px] qr:ml-3 qr:mr-0 ab:mr-24 wx:mr-40 flex ab:justify-center sm:justify-between ">
                  <div className="h-full   flex gap-[10px] cd:ml-0 md:ml-[-50px] sm:ml-[-40px]">
                    <button onClick={()=>setActive(old=>old+1)} className="h-[45px] w-[45px] rounded-b-[1px] rounded-tl-[10px] rounded-tr-[1px] bg-[#E7E7E7]
                    shadow-[0px_1px_2px_0px_#00000040] bg-[url(../33.svg)] bg-no-repeat bg-center dark:bg-gray-200"> </button>
                    <button onClick={()=>setActive(old=>old-1)} className="h-[45px] w-[45px] rounded-b-[1px] rounded-tl-[1px] rounded-tr-[10px] bg-[#FFFFFF]
                    shadow-[0px_1px_2px_0px_#00000040] bg-[url(../34.svg)] z-50  bg-no-repeat bg-center dark:bg-gray-200 "> </button>   
                        <label id="label" htmlFor="my-drawer-4" className="dark:bg-gray-200 block lg:hidden drawer-button btn bg-white border-0 shadow-[0px_1px_2px_0px_#00000040] relative "><img src="../38.svg" className="mt-3"/></label>
                  </div>
                  <div className="h-full w-[207px] dark:bg-gray-200  bg-[#FFFFFF] rounded-t-[10px] rounded-b-[1px]  ml-20 op:ml-28 sm:ml-0 qr:flex hidden
                  shadow-[0px_1px_3px_0px_#00000040]">
                    <img src="../35.svg" className="h-[12px] w-[20px] ml-4 my-auto"/>
                    <button className="text-[22px] font-[400] my-auto ml-7">جدیدترین</button>
                    <img src="../36.svg" className="h-[18px] w-[27px] ml-6 my-auto"/>
                  </div>                  
                </div>
            <div className="mb-[200px]">
              {active?<FinalGrid  slidercard={slidercard} setActive={setActive} />  : <FinalList slidercard={slidercard}/>}
            </div>
          </div>
        <SideBarFilter HandleCheck={HandleCheck}
          handleChange={handleChange}
          handleChange1={handleChange1}
          check={check}
          minValue={minValue}
          maxValue={maxValue}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
            /> 
            
        </div>
    </div>
    </Formik>
  )
}

export default Courses