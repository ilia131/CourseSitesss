import CardItem from './CardItem';
import CardItem2 from './CardItem2'
const ArticleItem = ({images}) => {
  return (
    <div className='xl:w-[1247px] flex  justify-center xl:mt-[55.5px] max-smx3:mt-[10px] smx3:mt-[30px]  lg:w-full xl:ml-[18px] duration-700 max-md:ml-[10px] max-smx2:ml-0'>
               <div className='xl:w-[1068px] h-[474px] lg:w-[1024px] max-xl:flex max-xl:justify-center'>
                 <div  className='xl:flex h-[474px] xl:gap-[22px] lg:flex max-smx3:grid max-xl:flex max-xl:gap-[22px] smx3:grid duration-700'>         
                         <CardItem images={images} />   
                         <CardItem2 images={images} />
                 </div>
                 </div>
            </div>
  )
}

export default ArticleItem