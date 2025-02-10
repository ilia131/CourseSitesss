import { useEffect, useState } from "react"
import Group149 from "../../components/DashboardHolder/MyFavorite/Group149"
import images from '../../assets/dashboardpng'
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"
import { getFavoriteCourse } from "../../core/services/api/user"
import Skeleton from 'react-loading-skeleton';

const Favorite = () => {
  const [row3 , setRow3] = useState([])  
  const [loading, setLoading] = useState(true)


  const getFavoriteCourse1 = async () => {
    try {
    setLoading(true)
    const result = await getFavoriteCourse()
    setRow3(result?.favoriteCourseDto)
    } catch(error) {
     console.log(error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(()=> {
    getFavoriteCourse1()
  }, [])

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = row3.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="xl:w-[875px] grid justify-center mt-[16px] justify-items-center 
    max-smx3:dark:bg-gray-800 max-smx3:w-screen max-md:w-screen max-md:dark:bg-gray-800
     max-lg:w-screen
   max-lg:dark:bg-gray-800
     max-xl:w-screen
    ">
      <div className="h-[545px] mt-[4px] flex-col
      max-smx3:w-[300px] max-smx3:overflow-x-scroll 
      max-smx3:mt-[100px] max-md:overflow-x-scroll max-md:mt-[60px]
      max-md:w-[480px] max-lg:w-[700px] max-lg:mt-[60px] max-xl:mt-[60px]
      max-xl:w-[874px]
      max-lg:overflow-x-scroll
      ">
        <div >
              <div className="w-[871px] h-[32px] border-b-[1.5px] border-b-[#007875] pl-[149px] 
              dark:border-b-[#59d7d3]
                  flex">
                <p className="mr-[104px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                " >نویسنده</p>
                <p className="mr-[92px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                " >زمان انتشار</p>
                <p className="mr-[118px] font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                ">دسته بندی</p>
                <p className=" font-primaryMedium text-[17px] text-[#003B39]
                dark:text-[#59d7d3]
                ">عنوان</p>
              </div>
              <div className="w-[874px] flex-col pt-[3px]" >
              {loading > 0? (
        <ul>
         {Array(10).fill().map((_, index) => (
            <li key={index}>
              <Skeleton height={40} width={`100%`}  />
            </li>
          ))} 
        </ul>
      ) : (
       <div>
        {currentItems.map((item , index) => ( 
             <Group149 
               item={item}
               index={index}
               key={index}
             />
        ))}
        </div>
      )}
          
              
             
              </div>
        </div>
      </div>
      <PagiantionDashboard 
            paginate={paginate}
            row={row3}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          />
    </div>
  )
}

export default Favorite