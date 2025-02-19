import SearchForm from '../../../components/common/SearchForm/SearchForm'
import { formStyle, inputStyle, inputdivStyle } from '../tailwindstyles';
import SectionTitle from '../../../components/common/SectionTitle/SectionTitle'


const CourseHero  = () => {
  const style =" h-[93px]  mt-[38px] mr-[31px]"
  return (
   <section className="w-full flex justify-center pt-[89px] dark:bg-gray-800" >
     <div className="w-[1149px] h-[412px]  flex justify-center">
        <div className="w-[1124px] h-[271px]  rounded-[15px] shadow-md bg-[#EBF9F982] justify-end grid justify-items-end dark:bg-gray-800" >
           <SectionTitle 
             title='دوره های آموزشی'
             subtitle='به روز ترین دوره هایی که میتونید پیدا کنید'
             isStyled={true}
             style={style}
            />
            <SearchForm  formStyle={formStyle} inputStyle={inputStyle} inputdivStyle={inputdivStyle} />             
        </div>
    </div>
  </section>
  )
}

export default CourseHero