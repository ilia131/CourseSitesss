import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ArticleItem from './ArticleItem';
import ArticleArrow from './ArticleArrow';

const ArticleTop = ({images}) => {
  return (
    <section className=' lg:h-[864.34px] grid justify-center dark:bg-gray-800'>
        <div className='xl:w-[1247px] flex justify-center  xl:mt-[126px]  max-smx3:mt-[500px] max-smx3:w-full smx3:mt-[500px] md:mt-[550px] lg:mt-[120px]'>
           <SectionTitle 
             title='اخبار ومقالات'
             subtitle='!خـــودت رو با خـــبر کن '
           />          
        </div> 
         <ArticleItem  images={images} />
         <ArticleArrow images={images}/>
    </section>
  )
}

export default ArticleTop