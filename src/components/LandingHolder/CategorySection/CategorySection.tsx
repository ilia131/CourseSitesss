import CategoryPart from './CategoryPart/CategoryPart'

interface Image {
  securitysvg: string,
  gamecon: string, 
  piechart: string,
  w10: string,
}



interface CategorySectionProps {
   images: Image
}

interface CategoryItem {
  id: number;

  title: string;
  src: string;
  width: string;
  mt: string;
  height: string;
  mbq: string;
}


const CategorySection:React.FC<CategorySectionProps> = ({
  images
}) => {
   const catitem : CategoryItem[]  = [   
      {id: 1,title:'امنیت شبکه', src:images.securitysvg , width:'113px' , mt:'28px' , height:'35px' ,mbq:'0px'}, 
      {id: 2,title:'بازی سازی', src:images.gamecon , width:'92px' , mt:'28px', height:'35px', mbq:'0px'},
      {id: 3 , title: 'تحلیل داده', src:images.piechart , width:'101px', mt:'28px', height:'35px' , mbq:'0px' },
      {id: 4 ,title: 'طراحی صفحات وب' , src:images.w10, width:'105px' , mt:'8px' ,height:'70px', mbq:'-5px'},
   ]


  return (
   <CategoryPart
     catitem={catitem}
   />
  )
}

export default CategorySection