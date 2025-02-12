import DashArrow from "./DashArrow"
import DashCard from "./DashCard"

const CourseList = ({card}) => {
  return (
    <div className='grid gap-[18px] max-md:mt-[20px] max-md:mb-[20px] '>
    <div className='xl:w-[342px] max-smx3:w-[310px] '>   
        <p className='font-primaryMedium text-[18px] h-[26px] text-[#777777] mb-[4px]'  dir='rtl'>دوره های پیشنهادی:</p>
    </div>
     {card.map((item , index) => (
        <>
           <DashCard
             key={index + 1}
             namedore={item.title}
             teacher={item.teacherName}
             time={item.lastUpdate}
             img={item.tumbImageAddress}
         />
      </>
      ))}
     <DashArrow />
   </div> 
  )
}

export default CourseList