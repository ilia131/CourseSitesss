import DashCardDore from "./DashCardDore"
import DashArrow from "./DashArrow"

const CourseCardList = ({cardore}) => {
  return (
    <div className='grid gap-[13px] mt-[2px] '>
    <div className='xl:w-[342px]'>
     <p className='font-primaryMedium text-[18px] h-[26px] text-[#777777]
        mb-[4px] max-md:text-[18px] max-md:px-[10px]'
       dir='rtl' >دوره های در حال برگزاری:</p>
   </div> 
      {cardore.map((item , index) => (
        <>
          <DashCardDore
                namedore={item.title}
                teacher={item.teacherName}
                time={item.lastUpdate}
                img={item.tumbImageAddress}
                
           />
       </>
       ))} 
       <div>
       <DashArrow />
      </div>
    </div>
  )
}

export default CourseCardList