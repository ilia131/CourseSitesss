import { Outlet } from "react-router-dom"
import SideBarDashboard from "../common/SideBarDashboard/SideBarDashboard"
import images from '../../assets/dashboardpng'
import Header from '../common/Header/Header'
import { Fragment } from "react"
import HeaderDashboard from "../common/HeaderDashboard/HeaderDashboard"
import { useBgColor } from '../../components/BgChangeAdmin/BgColorContext.jsx'



const MainLayout = () => {
  const { bgColor , setBgColor} = useBgColor();


  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  const textColor = getComplementaryColor(bgColor);
  
  return (
  <Fragment>
    
    <div className="mb-[-119px]">
    <HeaderDashboard />
    </div>
    <div className='flex justify-center dark:bg-gray-800 max-md:h-screen'
                    style={{ backgroundColor: bgColor }}

    >
      <div className='xl:w-[1250px] md:mt-[144px] md:mb-[67px] flex justify-between xl:h-[813px]'>
          <div className=" xl:w-[942px] xl:shadow-[0px_1px_10px_0px_#00000040] max-md:mt-[40px]
           rounded-[15px_0_0_15px]  pt-[31px] xl:pl-[32px]" >
              <div className='w-[30px] h-[30px] max-xl:hidden'>
                 <img src={images.home} />
              </div> 
              <Outlet /> 
           </div>  
           <div  className="max-md:hidden max-lg:hidden max-xl:hidden" >
           <SideBarDashboard />
           </div>
      </div>
    </div>
    </Fragment>
  )
}

export default MainLayout