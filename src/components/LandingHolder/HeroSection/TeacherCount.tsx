interface TeacherCountProps {
     images : {
        Teacher :string
     }
     hero :{
        teacherCount: number
     }
}




const TeacherCount : React.FC<TeacherCountProps>= ({images , hero}) => {
  return (
    <div  className='w-[200px] h-[139px] drop-shadow-lg  font-primaryRegular text-[27px] grid  relative  xl:left-[395px] xl:bottom-[152px]  max-lg:hidden lg:grid lg:relative lg:left-[280px] lg:bottom-[225px] xl:grid'>
    <div className='bg-[#E48900] xl:h-[68px]  xl:w-[68px]   flex justify-center   items-center absolute xl:right-[60px] bottom-[106px] rounded-full z-[244] lg:right-[79px] lg:w-[64px] lg:h-[64px]'>
        <img 
        src={images.Teacher} 
        width={45} 
        height={45}  
        alt='Teacher'
        />
     </div>
      <p  dir="rtl" className='xl:w-[200px] xl:h-[105px] shadow-lg text-center items-center flex justify-center pt-[10px] rounded-[10px] relative   bottom-[2px] bg-[#FFFFFF] lg:w-[170px]  lg:h-[90px] text-black' >
                <span className='xl:text-[27px] lg:text-[22px] '  > {hero.teacherCount}+ </span>
                &nbsp;  
                <span className='xl:text-[27px] lg:text-[22px] relative left-[-4px]' >مدرس</span>
      </p>
   </div>
  )
}

export default TeacherCount