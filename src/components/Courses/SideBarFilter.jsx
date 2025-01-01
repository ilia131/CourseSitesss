
import { useState , useEffect } from "react"
import { Field } from "formik"
import { getFilterCourseBytech } from "../../core/services/api/course"
import Daisyui from "daisyui"
import {Slider} from "antd" 
import "../Courses/Course.css"
import { getCourseType , getCourseLevel } from "../../core/services/api/course"

const SideBarFilter =({HandleCheck , check , handleChange , handleChange1
, minValue , maxValue ,setMaxValue, setMinValue


})=>{
  const [type , setType] = useState([])
  const [level , setLevel] = useState([])
  const getlevelCourse1 = async () => {
    const result = await getCourseLevel()
    setLevel(result)
  }

  const getTypeCourse1 = async () => {
    const result = await getCourseType()
    setType(result)
  }
  
  useEffect(()=> {
    getTypeCourse1()
    getlevelCourse1()
  }, [])


 
    console.log(minValue, maxValue)
    
  const [openbox,setOpenBox]  =useState(false)
  const [openbox1,setOpenBox1] =useState(false)  
  const [openbox2,setOpenBox2] =useState(false)
  const [openbox3,setOpenBox3] =useState(false)    
  const [openbox4,setOpenBox4] =useState(false)      
  const handleAccordion = ()=>{
    if(!openbox){
      setOpenBox(true)
    }else{
      setOpenBox(false)
    }
  }
  const handleAccordion1 = ()=>{
    if(!openbox1){
      setOpenBox1(true)
    }else{
      setOpenBox1(false)
    }
  }
  const handleAccordion2 = ()=>{  
    if(!openbox2){
      setOpenBox2(true)
    }else{
      setOpenBox2(false)
    }
  }
  const handleAccordion3 = ()=>{
    if(!openbox3){
      setOpenBox3(true)
    }else{
      setOpenBox3(false)
    }
  }  
  const handleAccordion4 = ()=>{
    if(!openbox4){
      setOpenBox4(true)
    }else{
      setOpenBox4(false)
    }
  }
  const [tech , setTech] = useState([])
   const getFilterbytech1 = async () => {
     const data = await getFilterCourseBytech()
     setTech(data)
    }

    useEffect(()=> {
       getFilterbytech1()
    }, [])
  
    return(
    <>
     <div className="w-[23%]  dark:bg-gray-200 hidden lg:block drawer drawer-end bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#0000004D]">
     <div className="w-[85%]  ef:w-[92%]  mx-auto h-[45px] rounded-t-[5px] rounded-b-[1px] bg-[#E7E7E7] 
     shadow-[0px_1px_2px_0px_#00000040]  mt-[14px] flex ">
       <img src="../37.svg" className="h-[25px] w-[25px] my-auto ml-[10px]"/>
       <p className="text-[18px] font-[400] my-auto ml-[38%] ef:ml-[48%] text-[#333333]">فیلترها</p>
       <img src="../38.svg" className="h-[22px] w-[22px] my-auto ml-[10px] "/>

     </div>
     <div className="grid gap-[15px] mx-auto w-[90%] mt-[18px]">
      <div className={`w-[85%] ml-1 ef:w-[92%] ef:mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox? 'h-[24px]':''}`}>
          
         <div onClick={handleAccordion} 
         className="justify-between flex
          
         w-[90%] mx-auto border-[#E6E6E6] dark:border-[#EBF9F982] border-b 
         
         ">    
               <img src="../35.svg" className={`my-auto rotate-180  ${openbox? 'rotate-0 ' : ''}`}/><span className="text-right ">تکنولوژی</span></div>
             
      
      {openbox ? (
        <></>
      ) : (
        <div className="mt-[20px] h-[356px] overflow-y-scroll">
          {tech.map((item, index) => (
            <div
              key={index}
              className="justify-start text-right relative bottom-2 pr-[10px] mt-[3px]"
            >
              <label
                htmlFor={`check${index}`}
                className="text-[16px]"
              >
                {item.techName}
              </label>
              <input
                type="checkbox"
                id={`check${index}`}
                name={item.techName}
                value={item.id}
                checked={check.includes(item.id)}
                onChange={() => HandleCheck(item.id)}
                className="size-3 ml-2"
              />
            </div>
          ))}
        </div>
      )}


      </div>
        <div className={`w-[85%] ml-1 ef:w-[92%] h-[123px] ef:mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox1? 'h-[24px]':''}`}>
          
        <div onClick={handleAccordion1} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6] dark:border-[#EBF9F982] border-b ">    
              <img src="../35.svg" className={`my-auto rotate-180  ${openbox1? 'rotate-0 ' : ''}`}/><span className="text-right ">وضعیت</span></div>

          {openbox1 ?
          (<></>)
        : (
          <div className="justify-start text-right relative bottom-2 pr-[10px] mt-[20px]">
          {type.map((item) => (
            <div key={item.id}> 
              <label htmlFor={`check-${item.id}`} className="text-[16px]">
                {item.typeName}
              </label>
              <input
                type="radio"
                id={`check-${item.id}`} 
                className="size-3 ml-2"
                name="item1" 
                onChange={() => handleChange1(item.id)}
              />
            </div>
            ))}                                   
          </div>
        )  
        
        }
        
      </div>
      <div className={`w-[85%] ml-1 ef:w-[92%] h-[173px] ef:mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox2? 'h-[24px]':''}`}>
          
          <div onClick={handleAccordion2} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6]  dark:border-[#EBF9F982] border-b ">    
                <img src="../35.svg" className={`my-auto rotate-180  ${openbox2? 'rotate-0 ' : ''}`}/><span className="text-right ">امتیاز</span></div>

            {openbox2 ?
            (<></>)
          : (
            <div className=" text-right relative top-3 grid gap-3 pr-[10px] items-end justify-end">
          <div className="flex"><label for="check10" className="text-[16px] mt-[-3px] right-2 relative  w-[85px] h-[17px]  bg-[url(../39.svg)] bg-contain bg-no-repeat"> </label><Field type="checkBox" id="check10" className="size-3 "/></div>
          <div className="flex"><label for="check11" className="text-[16px] mt-[-3px] right-2 relative w-[85px] h-[17px] bg-[url(../40.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check11" className="size-3 "/></div>                                   
          <div className="flex"><label for="check12" className="text-[16px] mt-[-3px] right-2 relative w-[85px]  h-[17px] bg-[url(../41.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check12" className="size-3 "/></div>
          <div className="flex"><label for="check13" className="text-[16px] mt-[-3px] right-2 relative w-[85px]  h-[17px] bg-[url(../42.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check13" className="size-3 "/></div>
          <div className="flex"><label for="check14" className="text-[16px] mt-[-3px] right-2 relative  w-[85px]  h-[17px] bg-[url(../43.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check14" className="size-3 "/></div>
            </div>
          )  
          
          }
          
        </div>
      <div className={`w-[85%] ml-1 ef:w-[92%] h-[123px] ef:mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox3? 'h-[24px]':''}`}>
          
          <div onClick={handleAccordion3} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6]  dark:border-[#EBF9F982] border-b ">    
                <img src="../35.svg" className={`my-auto rotate-180  ${openbox3? 'rotate-0 ' : ''}`}/><span className="text-right ">سطح</span></div>

        
                {openbox1 ?
          (<></>)
        : (
          <div className="justify-start text-right bottom-2 pr-[10px] mt-[20px]
          overflow-y-scroll h-[80px]
          ">
          {level.map((item) => (
            <div key={item.id}> 
              <label htmlFor={`check-${item.id}`} className="text-[16px]">
                {item.levelName}
              </label>
              <input
                type="radio"
                id={`check-${item.id}`} 
                className="size-3 ml-2"
                name="item" 
                onChange={() => handleChange1(item.id)}
              />
            </div>
            ))}                                   
          </div>
        )  
        
        }
          
        </div>   
        <div className={`w-[85%] ml-1 ef:w-[92%] h-[123px] ef:mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox4? 'h-[24px]':''}`}>
          
          <div onClick={handleAccordion4} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6]  dark:border-[#EBF9F982] border-b ">    
                <img src="../35.svg" className={`my-auto rotate-180 ${openbox4? 'rotate-0 ' : ''}`}/><span className="text-right ">قیمت(تومان)</span></div>

            {openbox4 ?
            (<></>)
          : (
            <div className="justify-start text-right relative bottom-2 pr-[10px]">
                    <span>{minValue} </span>
                   
              <Slider id="rangeInput"
                max={200000000}
                min={1}
                className=" w-[90%] mx-auto  h-[0px] bg-[#FEE9CA]"
                onChange={(f) => setMinValue(f[0]) &console.log(f[1])}
                range
                step={100000}
                
                defaultValue={[1, 20000000]}
                styles={{track:{background:"#FFA31A",position:"relative",bottom:"2px"},thumb:{background:"yellow"}}}
                

              />
              <div className="flex items-end justify-end gap-5  mr-2">
              <div><label for="check21" className="text-[16px]">غیر رایگان</label><Field type="checkBox" id="check21" className="size-3 ml-2 "/></div>             
              <div><label for="check20" className="text-[16px]">رایگان</label><Field type="checkBox" id="check20" className="size-3 ml-2 "/></div>                                   


              </div>

            </div>
          )  
          
          }
          
        </div>  
                                           
    </div>
  </div>
  <div className="  block lg:hidden  h-[1000px] w-[0px]">
  <div className="drawer drawer-end  ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  </div>
  <div className="drawer-side  z-50 ">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="w-[311px] dark:bg-gray-200 mt-14 wx:mr-0  mr-[5%] h-[950px] z-[30000] drawer drawer-end bg-[#FFFFFF] shadow-[0px_1px_2px_0px_#0000004D]">
    <div className="w-[272px] h-[45px] rounded-t-[5px] rounded-b-[1px] bg-[#E7E7E7] 
    shadow-[0px_1px_2px_0px_#00000040] mx-auto mt-[14px] flex ">
      <img src="../37.svg" className="h-[25px] w-[25px] my-auto ml-[10px]"/>
      <p className="text-[18px] font-[400] my-auto ml-[120px] text-[#333333]">فیلترها</p>
      <img src="../38.svg" className="h-[22px] w-[22px] my-auto ml-[10px]"/>

    </div>
    <div className="grid gap-[15px] mx-auto w-[273px] mt-[0px]">
      <div className={`w-[272px] h-[173px] mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox? 'h-[24px]':''}`}>
          
        <div onClick={handleAccordion} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6] border-b ">    
              <img src="../35.svg" className={`my-auto rotate-180  ${openbox? 'rotate-0 ' : ''}`}/><span className="text-right ">تکنولوژی</span></div>

          {openbox ?
          (<></>)
        : (
          <div className="justify-start text-right relative bottom-2 pr-[10px]">
          <div><label for="check1" className="text-[16px]">Boot Strap</label><Field type="checkBox" id="check1" className="size-3 ml-2 mt-5"/></div>
          <div><label for="check2" className="text-[16px]">React</label><Field type="checkBox" id="check2" className="size-3 ml-2"/></div>                                   
          <div><label for="check3" className="text-[16px]">Java Script</label><Field type="checkBox" id="check3" className="size-3 ml-2"/></div>
          <div><label for="check4" className="text-[16px]">.Net Core</label><Field type="checkBox" id="check4" className="size-3 ml-2"/></div>
          <div><label for="check5" className="text-[16px]">tailwind</label><Field type="checkBox" id="check5" className="size-3 ml-2"/></div></div>
        )  
        
        }
        
      </div>
        <div className={`w-[272px] h-[123px] mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox1? 'h-[24px]':''}`}>
          
        <div onClick={handleAccordion1} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6] border-b ">    
              <img src="../35.svg" className={`my-auto rotate-180  ${openbox1? 'rotate-0 ' : ''}`}/><span className="text-right ">وضعیت</span></div>

          {openbox1 ?
          (<></>)
        : (
          <div className="justify-start text-right relative bottom-2 pr-[10px]">
          <div><label for="check6" className="text-[16px]">شروع نشده</label><Field type="checkBox" id="check6" className="size-3 ml-2 mt-5"/></div>
          <div><label for="check7" className="text-[16px]">در حال برگزاری</label><Field type="checkBox" id="check7" className="size-3 ml-2"/></div>                                   
          <div><label for="check8" className="text-[16px]">تمام شده</label><Field type="checkBox" id="check8" className="size-3 ml-2"/></div>
          </div>
        )  
        
        }
        
      </div>
      <div className={`w-[272px] h-[173px] mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox2? 'h-[24px]':''}`}>
          
          <div onClick={handleAccordion2} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6] border-b ">    
                <img src="../35.svg" className={`my-auto rotate-180  ${openbox2? 'rotate-0 ' : ''}`}/><span className="text-right ">امتیاز</span></div>

            {openbox2 ?
            (<></>)
          : (
            <div className=" text-right relative top-3 grid gap-3 pr-[10px] items-end justify-end">
          <div className="flex"><label for="check10" className="text-[16px] mt-[-3px] right-2 relative  w-[85px] h-[17px]  bg-[url(../39.svg)] bg-contain bg-no-repeat"> </label><Field type="checkBox" id="check10" className="size-3 "/></div>
          <div className="flex"><label for="check11" className="text-[16px] mt-[-3px] right-2 relative w-[85px] h-[17px] bg-[url(../40.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check11" className="size-3 "/></div>                                   
          <div className="flex"><label for="check12" className="text-[16px] mt-[-3px] right-2 relative w-[85px]  h-[17px] bg-[url(../41.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check12" className="size-3 "/></div>
          <div className="flex"><label for="check13" className="text-[16px] mt-[-3px] right-2 relative w-[85px]  h-[17px] bg-[url(../42.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check13" className="size-3 "/></div>
          <div className="flex"><label for="check14" className="text-[16px] mt-[-3px] right-2 relative  w-[85px]  h-[17px] bg-[url(../43.svg)] bg-contain bg-no-repeat"></label><Field type="checkBox" id="check14" className="size-3 "/></div>
            </div>
          )  
          
          }
          
        </div>
    
      <div className={`w-[272px] h-[123px] mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox3? 'h-[24px]':''}`}>
          
          <div onClick={handleAccordion3} className="justify-between flex  w-[90%] mx-auto border-[#E6E6E6] border-b ">    
                <img src="../35.svg" className={`my-auto rotate-180  ${openbox3? 'rotate-0 ' : ''}`}/><span className="text-right ">سطح</span></div>

            {openbox3 ?
            (<></>)
          : (
            <div className="justify-start text-right relative bottom-2 pr-[10px]">
            <div><label for="check15" className="text-[16px]">مقدماتی</label><Field type="checkBox" id="check15" className="size-3 ml-2 mt-5"/></div>
            <div><label for="check16" className="text-[16px]">متوسط</label><Field type="checkBox" id="check16" className="size-3 ml-2"/></div>                                   
            <div><label for="check17" className="text-[16px]">پیشرفته</label><Field type="checkBox" id="check17" className="size-3 ml-2"/></div>
            </div>
          )  
          
          }
          
        </div>   
        <div className={`w-[272px] h-[123px] mx-auto shadow-[0px_1px_2px_0px_#00000040] dark:bg-gray-800 
        dark:text-white  rounded-[6px] bg-[#FAFAFA] ${openbox4? 'h-[24px]':''}`}>
          
          <div onClick={handleAccordion4} className="justify-between flex  w-[90%] mx-auto
          pb-[30px]
          border-[#E6E6E6] border-b ">    
                <img src="../35.svg" className={`my-auto rotate-180 ${openbox4? 'rotate-0 ' : ''}`}/><span className="text-right 
                ">قیمت(تومان)</span></div>

            {openbox4 ?
            (<></>)
          : (
            <div className="justify-start text-right relative bottom-2 pr-[10px]
            mt-[30px]
            ">
                                        <div className="mt-12 mx-auto ">
                 
                 <div className="w-[222px] h-[4px] mx-auto z-[3000] bg-[#FEE9CA]"><div className="w-[151px] h-[4px] mx-auto bg-[#FFA31A] relative "></div></div>
                 {/* <span>{minValue}</span> - <span>{maxValue}</span> */}
      <Slider
        id="rangeInput"
        max={200000000}
        min={1}
        className="w-[90%] mx-auto h-[0px] bg-[#FEE9CA] mt-[30px]"
        onChange={(f) => {
          setMinValue(f[0]);
          setMaxValue(f[1]);
        }}
        range
        step={100000}
        defaultValue={[1, 20000000]}
        styles={{
          track: { background: "#FFA31A", position: "relative", bottom: "2px" },
          thumb: { background: "yellow" },
        }}
      />
              <div className="flex items-end justify-end gap-5  mr-2">
              <div><label for="check21" className="text-[16px]">غیر رایگان</label><Field type="checkBox" id="check21" className="size-3 ml-2 "/></div>             
              <div><label for="check20" className="text-[16px]">رایگان</label><Field type="checkBox" id="check20" className="size-3 ml-2 "/></div>                                   


              </div>

                    
                
                   </div>
            </div>
          )  
          
          }
          
        </div>  
                                           
    </div>
  </div>
  </div>
</div>
  </div>
  </>
)
}

export default SideBarFilter