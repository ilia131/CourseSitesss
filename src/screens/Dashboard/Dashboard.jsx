import { useState , useEffect} from 'react'
import images from '../../assets/dashboardpng'
import { DashCard, Group73, Group74, Group85 } from '../../components/DashboardHolder/Dashboard/index.js'
import DashCardDore from '../../components/DashboardHolder/Dashboard/DashCardDore.jsx'
import { getCourseDash } from '../../core/services/api/user.js'
import { useBgColor } from '../../components/BgChangeAdmin/BgColorContext.jsx'
const Dashboard = () => {
  const { bgColor , setBgColor} = useBgColor();


  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };

  const textColor = getComplementaryColor(bgColor);



  const [card , setCard] = useState([])
  const [cardore , setCardore] = useState([
  ])


  const getCourseDash1 = async () => {
     const data = await getCourseDash()
     setCardore(data?.courseFilterDtos.slice(0, 2) || [])
     setCard(data?.courseFilterDtos.slice(0, 2) || [])
  }

  useEffect(()=> {
     getCourseDash1()
  })



  return (
    <div className='flex justify-center xl:pr-[32px] xl:pt-[27px] '
     
    >
      <div className='xl:w-[797px] xl:h-[661px] ' >
         <div className='flex xl:gap-[37px] max-smx3:grid max-md:justify-between max-md:px-[40px] max-smx3:px-0
         max-smx3:justify-center   max-md:ml-0
         '
          style={{direction:'rtl'}} 
         > 
            <Group74 
            bgColor={bgColor}
            textColor={textColor}
            /> 
            <Group73 
            bgColor={bgColor}
            textColor={textColor}
            /> 
            </div>
             <Group85 
             bgColor={bgColor}
             
             />   
           <div className='xl:w-[751px] xl:h-[252px]  xl:mt-[59px]  xl:ml-[20px]
                            grid max-smx3:mt-[-10px] max-md:pr-[50px] max-smx3:pr-0
                            max-smx3:mr-0 max-smx3:h-screen max-smx3:dark:bg-gray-800 max-smx3:grid
                            max-smx3:justify-center max-smx4:pt-[30px] max-md:h-screen max-md:dark:bg-gray-800
                            max-md:w-screen
                            max-smx3:pt-[200px] 
                            max-lg:justify-center
                            max-xl:justify-center
               '> 
            
          <div className='flex gap-x-[68px]  mt-[12px] relative xl:left-[5px]  max-md:justify-end max-md:grid
                smx4:relative smx4:left-[20px] md:left-0 max-smx3:mt-[-180px] 
              '>
                 <div className='grid gap-[13px] mt-[2px] '  
                 >
                  <div className='xl:w-[342px] '>
                   <p className='font-primaryMedium 
                   
                   text-[18px] h-[26px] text-[#777777]
                      mb-[4px] max-md:text-[18px] max-md:px-[10px]
                     '
                      style={{direction:'rtl'}} 
                      >دوره های در حال برگزاری:</p>
                 </div> 
                
                    {cardore.map((item , index) => (
                      <>
                        <DashCardDore
                        bgColor={bgColor}
                              namedore={item.title}
                              teacher={item.teacherName}
                              time={item.lastUpdate}
                              img={item.tumbImageAddress}
                              
                         />
                     </>
                     ))} 
                     <div>
                     <div className='flex xl:w-[342px] justify-center gap-[5px]  '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                          <path d="M9.30869 9.75L4.87598 6L9.30869 2.25" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                        <p className='text-[11px] font-primaryMedium text-[#B7B7B7] font-[400]
                          mt-[-4px] cursor-pointer
                        ' >مشاهده همه</p>
                     </div>  
                       
                    </div>
                  </div>
                 <div className='grid gap-[18px] max-md:mt-[20px] max-md:mb-[20px] '>
                  <div className='xl:w-[342px] max-smx3:w-[310px] '>   
                      <p className='font-primaryMedium text-[18px] h-[26px] text-[#777777]
                                    mb-[4px] 
                                   '
                  style={{direction:'rtl'}} 
                  >دوره های پیشنهادی:</p>
                  </div>
                   {card.map((item , index) => (
                      <>
                         <DashCard
                           bgColor={bgColor}

                           namedore={item.title}
                           teacher={item.teacherName}
                           time={item.lastUpdate}
                           img={item.tumbImageAddress}
                       />
                    </>
                    ))}
                        <div className='flex xl:w-[342px] justify-center gap-[5px]  '> 
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                       <path d="M9.30869 9.75L4.87598 6L9.30869 2.25" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                    <p className='text-[11px] font-primaryMedium text-[#B7B7B7] font-[400]
                      mt-[-4px] cursor-pointer
                    ' >مشاهده همه</p>
                   
                 </div> 
                 </div> 
                 
              </div> 
            </div>     
      </div>
    </div>
  )
}

export default Dashboard