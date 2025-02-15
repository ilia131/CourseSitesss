import CatItem from "../CatItem/CatItem"

interface CategoryItem {
    id: number;
    title: string;
    src: string;
    width: string;
    mt: string;
    height: string;
    mbq: string;
}
  
  
  
interface CatGroup {
    catitem: CategoryItem[]
}

const CatGroup : React.FC<CatGroup > = ({catitem}) => {
  return (
    <div className='h-[600px] flex justify-center items-center max-md:mt-[-280px] md:mt-[-150px] lg:mt-0 bg-no-repeat bg-[auto_495px] bg-center bg-catItem'>
       <div className='xl:w-[1093.08]  xl:flex  xl:mb-[20px] xl:items-center  xl:gap-[13.92px] xl:justify-items-center max-md:grid max-md:grid-cols-2	max-md:w-full max-md:justify-items-center max-md:mb-[60px]  md:flex md:gap-[41px] md:w-full md:justify-center lg:flex lg:gap-[70px]'>
          {catitem.map((item) => (
           <div key={item.id}  className='xl:w-[262.08px] xl:h-[262.08px] xl:flex  xl:justify-center xl:items-center xl:mt-[8px] xl:z-[24324] max-md:flex '>
           <CatItem
             item={item}
             title={item.title}
             src={item.src}
             width={item.width}
             height={item.height}
             mt={item.mt}
             mbq={item.mbq}
          />
        </div>
      ))}

    </div>

  </div>
  )
}

export default CatGroup