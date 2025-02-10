import { Fragment , useState , useEffect } from 'react'
import images from '../../../assets/dashboardpng'
import { getmyCourse , getReserveCourse   } from "../../../core/services/api/user"


const toPersianNumber = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[digit]);
};



const Group74 = ({textColor , bgColor}) => {
  const [count , setCount] = useState([])
  const [count1 , setCount1] = useState([])

  const courseCount = count?.length || 0;
  const courseCount1 = count1?.length
  


  const getCount1 = async () => {
    try {
      const data1 = await getReserveCourse()
      setCount1(data1 || []);

   } catch(err) {
     console.log(err)
   }
  }



  const getCount = async () =>{
    try {
       const data = await getmyCourse()
       setCount(data?.listOfMyCourses || []);

    }catch(err) {
      console.log(err)
    }
  }

  useEffect(()=> {
     getCount(),
     getCount1()
  },[])

  return (
    <Fragment>
       <div className='md:w-[424px] h-[105px]  relative mt-[5px] flex gap-[44px] max-md:grid max-smx3:gap-[20px]
        max-smx3:justify-center max-md:gap-[20px]  md:ml-0 
        max-smx3:right-0 max-lg:gap-[20px] max-lg:mr-[-20px] max-md:mr-0
       '
       style={{direction:'ltr'}}
       >
               <div className='w-[190px] h-[105px] relative ' >
                   <img src={images.gp87} height={57} width={57} className='absolute left-[20px]' />
                    <div className='w-[190px] h-[77px]  mt-[26px] text-right pr-[21px] 
                                   rounded-[5px]
                                   shadow-[0px_1px_2px_0px_#00000040]
                                   ' 
                                  style={{direction:'rtl'}}
                     >
                     <p className='w-[63px] h-[43px]  
                       font-primaryMedium 
                       text-[25px] text-[#FFB800] flex items-center
                       pt-[4px] max-smx3:text-[20px] max-md:text-[23px]
                    '
                    // style={{color: bgColor === "" ? '#FFB00': textColor
                    // }}
                    >
                      <span className='text-[30px] ml-[4px] max-smx2:text-[25px]  max-md:text-[28px]'
                        // style={{color: bgColor === "" ? '#FFB00': textColor
                        // }}
                      >{toPersianNumber(courseCount1)}</span>    
                      دوره</p>
                    <span className='w-[86px] h-[26px] text-[#A7A7A7] text-[18px] font-primaryMedium
                    font-[400] max-smx3:text-[15px] max-md:text-[17px]
                    '
                    // style={{color: bgColor === "" ? '#A7A7A7': textColor
                    // }}
                    >رزرو کرده اید</span>
                 </div>
              </div>
              <div className='w-[190px] h-[105px] relative ' >
              <img src={images.gp86} height={57} width={57} className='absolute left-[20px]' />
              <div className='w-[190px] h-[77px]  mt-[26px] text-right pr-[21px] 
                 rounded-[5px]
                 shadow-[0px_1px_2px_0px_#00000040]
              ' 
                  style={{direction:'rtl'}}
                 >
                    <p className='w-[63px] h-[43px] 
                    
                    font-primaryMedium 
                    text-[25px] text-[#00B4AF] flex items-center
                    pt-[4px] max-smx2:text-[20px] max-md:text-[23px] 
                    ' 
                    // style={{color: bgColor === "" ? '#00B4AF': textColor
                    // }}
                    >
                      <span className='text-[30px] max-smx2:text-[25px]  max-md:text-[28px] ml-[4px]'
                      
                      >{toPersianNumber(courseCount)}</span>    
                      دوره</p>
                    <span className='w-[86px] h-[26px] text-[#A7A7A7] text-[18px] font-primaryMedium
                    font-[400] max-smx3:text-[15px] max-md:text-[17px] 
                    '
                    // style={{color: bgColor === "" ? '#A7A7A7': textColor
                    // }}
                    >شرکت کرده اید</span>
                 </div>
              </div>
            </div>
    </Fragment>
  )
}

export default Group74