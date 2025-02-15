import SectionTitle from '../../../common/SectionTitle/SectionTitle'
import CatItem from '../CatItem/CatItem'
import CatGroup from './CatGroup';

interface CategoryItem {
  id: number;
  title: string;
  src: string;
  width: string;
  mt: string;
  height: string;
  mbq: string;
}



interface CategoryPartProps {
  catitem: CategoryItem[]
}



const CategoryPart: React.FC<CategoryPartProps> = ({ catitem }) => {
  const style = 'w-full grid justify-center xl:mt-[70px] max-md:mt-[-380px] md:mt-[-250px]  lg:mt-[29px]'
  const style1 = 'w-[12.49px] h-[13.05px] bg-[#01CEC9] rounded-full mt-[-5px] ml-[10px]'

  return (
    <section className='grid gap-[10px] duration-700 dark:bg-gray-800 w-full'>
      <SectionTitle
        title="محبوب‌ترین دسته‌بندی‌ها"
        subtitle="گستره وسیعی از محبوب‌ترین دوره‌ها"
        style={style}
        style1={style1}
      />
      <CatGroup 
        catitem={catitem}
      />

    </section>
  )
}

export default CategoryPart