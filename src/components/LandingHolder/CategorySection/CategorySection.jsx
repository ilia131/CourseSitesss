import { useState } from 'react'
import images from '../../../assets/landingpng'
import CategoryPart from './CategoryPart/CategoryPart'
const CategorySection = () => {
   const [catitem, setCatItem] = useState([   
      {title:'امنیت شبکه', src:images.securitysvg , width:'113px' , mt:'28px' , height:'35px' ,mbq:'0px'}, 
      {title:'بازی سازی', src:images.gamecon , width:'92px' , mt:'28px', height:'35px', mbq:'0px'},
      {title: 'تحلیل داده', src:images.piechart , width:'101px', mt:'28px', height:'35px' , mbq:'0px' },
      {title: 'طراحی صفحات وب' , src:images.w10, width:'105px' , mt:'8px' ,height:'70px', mbq:'-5px'},
   ])


  return (
   <CategoryPart
     catitem={catitem}
     images={images}
   />
  )
}

export default CategorySection