interface StudentCountProps {
    images: {
        Student: string;
    };
    hero: {   
        studentCount: number;
    };
}




const StudentCount: React.FC<StudentCountProps> = ({images , hero}) => {
  return (
    <div className='w-[200px] h-[139px] drop-shadow-lg max-lg:hidden xl:grid grid relative  xl:bottom-[460px]  xl:right-[105px] lg:bottom-[510px] lg:right-[35px]'>
                <div className='xl:h-[68px] xl:w-[68px] bg-[#FFB803]  rounded-full flex justify-center items-center absolute xl:left-[72px] xl:bottom-[100.5px] lg:w-[64px] lg:h-[64px] lg:left-[55px] lg:bottom-[100.5px]'>
                <img 
                src={images.Student} 
                width={45} 
                height={45}
                alt='Student'
                />
                </div>
                <p 
                className='font-primaryRegular text-[27px] xl:w-[200px] 
                xl:h-[105px]  flex justify-center bg-[#FFFFFF] shadow-lg
                items-center rounded-[10px] mt-[5px] pt-[20px]
                lg:w-[170px]
                lg:h-[90px]
                text-black
                '
                dir='rtl'
                >
            <span className='xl:text-[27px] lg:text-[22px]' > {hero.studentCount} +</span> 
                &nbsp;
            <span className='xl:text-[27px] lg:text-[22px] relative left-[-4px]'>دانشجو</span>
        </p>
</div>
  )
}

export default StudentCount