import useHero from '../../common/hooks/hookapi/useHero';
import { ClipLoader } from "react-spinners";
import Loading from '../../common/Loading/Loading';
import ErrorComponent from '../../common/ErrorComponent/ErrorComponent';

import { formStyle, inputStyle, inputdivStyle } from './tailwindstyles';
import HeroSectionLayout from './HeroSectionLayout';


interface Image {
   shape: string;
   Student: string;
   Teacher: string;

}

interface HeroSectionProps {
   images : Image
}



const HeroSection : React.FC<HeroSectionProps> = ({images}) => {
  const { hero, loading, error } = useHero();

  if (loading) {
    return  <Loading loading={loading}/> 
  }
  if (error) {
    return <ErrorComponent error={error} />
  }


                 
  return (
    <section className='h-[652px] flex justify-center  dark:bg-gray-800 '>
       <HeroSectionLayout 
         images={images}
         hero={hero}
         formStyle={formStyle}
         inputStyle={inputStyle}
         inputdivStyle={inputdivStyle}
       />
    </section>
  )
}

export default HeroSection