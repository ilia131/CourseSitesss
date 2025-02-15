import SearchForm from '../../common/SearchForm/SearchForm'
import HeroSectionTitle from './HeroSectionTitle';
interface RightHeroSectionProps {
    formStyle: string;
    inputStyle: string;
    inputdivStyle: string;
}
  

const RightHeroSection: React.FC<RightHeroSectionProps >= ({formStyle , inputdivStyle , inputStyle}) => {
  return (
    <div className="mt-[171px] mb-[118px]  h-[281.54px]  text-right grid w-[494px] justify-end  max-md:px-[10px] max-md:mt-[-30px] max-md:justify-end max-md:text-right max-lg:justify-end max-lg:text-right max-lg:mt-[50px] lg:mt-[120px] xl:mt-[171px]">
        <HeroSectionTitle />
        <SearchForm  formStyle={formStyle} inputStyle={inputStyle} inputdivStyle={inputdivStyle}
        />
    </div>
  )
}

export default RightHeroSection