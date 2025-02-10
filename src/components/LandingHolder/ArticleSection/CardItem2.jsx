import { NavLink } from "react-router-dom";
import ImageCard from "./ImageCard";
const CardItem2 = ({ images }) => {
  const style = 'xl:w-[522px] xl:h-[200px] max-smx3:w-[310px] max-smx3:h-[150px] max-smx3:mt-[10px] smx3:w-[370px] smx3:h-[180px] smx3:mt-[10px] xl:mt-[-18px] relative group  lg:w-[430px] lg:h-[210px] lg:mt-[-35px] duration-700'
  const style1 = 'xl:w-[250px] xl:h-[250px] lg:w-[210px] lg:h-[210px] max-smx3:w-[150px] max-smx3:h-[150px] smx3:w-[180px] smx3:h-[180px] relative group duration-700'
  const imageData = [
      { image: images.anitem5 },
      { image: images.anitem6 },
    ];
 return ( 
 <div className='grid xl:gap-[24px] duration-700'>   
      <div className='xl:flex xl:gap-[22px]  max-smx3:flex max-smx3:gap-[10px] smx3:flex smx3:gap-[10px]'>
        
       {imageData.map((item , key) => (
           <ImageCard images={item.image} style={style1} key={item.id} />
        ))}
          </div> 
            <ImageCard images={images.anitem4} style={style}/>         
          </div>
 )
};

export default CardItem2