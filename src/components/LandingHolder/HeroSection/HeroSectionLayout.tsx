import LeftHeroSection from './LeftHeroSection';
import RightHeroSection from './RightHeroSection';

interface HeroSectionLayoutProps {
    images : {
        shape : string;
        Student: string ;
        Teacher: string;
     }
     hero : {
       studentCount: number,
       teacherCount:number
     }
    formStyle: string;
    inputStyle: string;
    inputdivStyle: string;
}



const HeroSectionLayout: React.FC<HeroSectionLayoutProps> = ({images ,hero , formStyle , inputdivStyle , inputStyle}) => {
  return (
    <div className='h-[625px] flex max-md:w-full max-lg:w-full w-[1247px] pt-[11px] max-md:justify-end mt-[1px] justify-between max-lg:justify-end max-md:px-[10px] max-lg:px-[60px] xl:pt-[11px] xl:px-0 xl:w-[1247px] xl:justify-between xl:mr-0 lg:w-[1024px] lg:justify-center  lg:mr-[70px]  lg:px-[10px]   lg:mt-[30px]   duration-700'>
     <LeftHeroSection 
       images={images}
       hero={hero}
      />
     <RightHeroSection
         formStyle={formStyle}
         inputStyle={inputStyle}
         inputdivStyle={inputdivStyle}
     />
  </div>
  )
}

export default HeroSectionLayout