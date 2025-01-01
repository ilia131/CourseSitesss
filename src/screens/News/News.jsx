import React , {useState , useEffect}from "react";
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard";
import Card from "../../components/News/Card";
import HeroSection from "../../components/News/HeroSection";
import SideMenu from "../../components/News/SideMenu";
import Selection from "../../components/News/Selection";
import { getNewsCard } from '../../core/services/api/News';
import { useBgColor } from "../../components/BgChangeAdmin/BgColorContext";
// import { getNewsFilter } from "../../core/services/api/course";


const News = () => {
  const [data , setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const { bgColor , setBgColor} = useBgColor();


  const getComplementaryColor = (hexColor) => {
    const color = hexColor.replace("#", "");
    
    const r = 255 - parseInt(color.substring(0, 2), 16);
    const g = 255 - parseInt(color.substring(2, 4), 16);
    const b = 255 - parseInt(color.substring(4, 10), 16);
  
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const textColor = getComplementaryColor(bgColor);  

  const getNews = async () => {

    const result = await getNewsCard()
    console.log(result) 
    setData(result?.news)

  }

  useEffect(() => {
    getNews()
  } ,[])
  return (
    <>
  
      <div className="w-[100%]   flex flex-wrap relative bg-NewsBg bg-[#F9F9F9] dark:bg-gray-800 font-primaryRegular"
      
      style={{ backgroundColor: bgColor }}

      >
        
                                                          <HeroSection />


        <div className="w-[100%]  flex max-sm:flex-col gap-7 ">
          <div
            id="left"
            className=" w-[20%] max-cd:w-[40%] max-xl:w-[30%] max-sm:w-[303px] ml-auto max-sm:mr-auto "
          >
                                                          <SideMenu />
          </div>

          <div
            id="right"
            className="  w-[62%] max-cd:w-[55%] max-sm:w-[100%]  mr-auto max-sm:ml-auto mt-[-4%] flex-wrap "
          >
                                            
                                                   <Selection/>

            <div className="w-[100%] xl:h-[600px] flex flex-wrap justify-center gap-[25px] max-md:grid max-md:justify-items-center">
        {currentItems.length > 0 &&
                   <>                                 
          {currentItems.map((item, index) =>(
              <Card 
                item={item}
              /> 
              ))}  
              </>
               }                            
              
            </div>
            <div className="absolute top-[1400px] left-[900px]">
                                                  <PagiantionDashboard
                                                       paginate={paginate}
                                                       row={data}
                                                       itemsPerPage={itemsPerPage}
                                                       currentPage={currentPage}
                                                     
                                                     /> 
                                                </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
