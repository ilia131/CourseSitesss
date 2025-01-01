import Group145 from "../../components/DashboardHolder/MyReserveCourse/Group145"
import PagiantionDashboard from "../../components/common/PaginationDashboard/PagiantionDashboard"
import { useEffect, useState } from "react"
import SelectOption  from "../../components/common/SelectOption/SelectOption"
import SearchForm from "../../components/common/SearchForm/SearchForm"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import images from '../../assets/dashboardpng'
import { getReserveCourse } from "../../core/services/api/user"
const MyReserveCourse = () => {
  const [row1 , setRow1] = useState([])
  const [loading, setLoading] = useState(true)

  const toPersianNumber = (number) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return number
      .toString()
      .replace(/\d/g, (digit) => persianDigits[digit]);
  };

  const options = [
    { value: 'option1', label: 'جدید ترین' },
    { value: 'option2', label: 'محبوب ترین' },
    { value: 'option3', label: 'ارزان ترین' },
  ];

  const formStyle = `xl:w-[519px] h-[40px] bg-[#FBFBFB] flex rounded-[25px] justify-between 
    items-center 
    shadow-[0px_1px_3px_0px_#00000026_inset]
    pl-[4px] pr-[27px]
    max-lg:w-[400px]
    max-xl:w-[519px]
    max-md:w-[250px]
    max-smx3:w-[250px]

  `
  const inputdivStyle = `w-[34px] h-[34px] bg-[#CC6E00] rounded-full flex justify-center items-center`
  const inputStyle =`w-[189px] placeholder:font-primaryMedium
  placeholder:text-[#AAAAAA] placeholder:text-[16px] place-holder:font-[400] text-right
  border-none outline-none bg-transparent pb-[3px]
  `
  const getReserveCourse1  = async () => {
    try {
     const data = await getReserveCourse()
     setRow1(data)
    } catch(error) {
         console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=> {
     getReserveCourse1()
  },[])


  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = row1.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  
  return (
    <div className="xl:w-[875px] grid justify-center mt-[16px] justify-items-center
    max-smx3:dark:bg-gray-800 max-smx3:w-screen max-md:dark:bg-gray-800 max-md:w-screen 
    ">
       <div className="xl:w-[875px] h-[40px]  flex justify-between 
       max-smx3:grid
      max-smx3:justify-items-center max-smx3:gap-[20px] max-md:gap-[30px]
      max-lg:gap-[100px]
      max-xl:gap-[180px]
       " >
       <div>
          <SelectOption  options={options} />
        </div>
        <SearchForm 
         formStyle={formStyle}
         inputdivStyle={inputdivStyle}
         inputStyle={inputStyle}
         
        />
      </div> 
     <div className="xl:w-[874px] h-[545px]  mt-[53px] flex-col
     max-smx3:w-[300px] max-smx3:overflow-x-scroll 
    max-smx3:mt-[100px] max-md:overflow-x-scroll max-md:mt-[60px]
    max-md:w-[480px] max-lg:w-[700px] max-lg:mt-[60px] max-xl:mt-[60px]
    max-xl:w-[874px] max-lg:overflow-x-scroll
  
     "> 
     <div className="max-smx3:w-[874px] max-md:w-[874px] max-lg:w-[874px]">
              <div className="xl:w-[874px] h-[32px] border-b-[1.5px] border-b-[#007875] lg:pr-[133px] lg:pl-[126px] 
               dark:border-b-[#59d7d3]
                flex justify-end max-smx3:gap-[70px]
                max-smx3:justify-center
                max-smx3:pl-[50px]
                max-md:justify-center
                max-md:gap-[70px]
                max-md:pl-[50px]
                max-lg:justify-center
                max-lg:gap-[80px]
                ">
                  <p className=" font-primaryMedium text-[17px] text-[#003B39]
                  dark:text-[#59d7d3] max-smx3:ml-[-30px]
                  max-md:ml-[-30px] max-lg:ml-[10px]
                  ">وضعیت</p>
                  <p className="lg:ml-[48px] font-primaryMedium text-[17px] text-[#003B39]
                  dark:text-[#59d7d3] max-smx3:ml-[-10px] max-md:ml-[-10px]
                  max-lg:ml-[-30px]
                  " >قیمت(تومان)</p>
                  <p className="lg:ml-[50px] font-primaryMedium text-[17px] text-[#003B39]
                  dark:text-[#59d7d3] max-smx3:ml-[-10px]
                  max-md:ml-[-20px] max-lg:ml-[-40px]
                  " >تاریخ شروع</p>
                  <p className="lg:ml-[79px] font-primaryMedium text-[17px] text-[#003B39]
                  dark:text-[#59d7d3]
                  ">مدرس دوره</p>
                  <p className="lg:ml-[100px] font-primaryMedium text-[17px] text-[#003B39]
                  dark:text-[#59d7d3]
                  max-smx3:ml-[40px] max-md:ml-[40px]
                  max-lg:ml-[10px]
                  ">نام دوره</p>
                </div>
                {loading ? (
        <ul>
          {Array(10).fill().map((_, index) => (
            <li key={index}>
              <Skeleton height={40} width={`100%`}  />
            </li>
          ))}
        </ul>
      ) : (
                <div className="xl:w-[874px] flex-col pt-[3px]" >
                {currentItems.map((item , index) => ( 
                    <Group145 
                      item={item}
                      index={index}
                      key={index}
                    />
                ))}
               
                </div> 
      )}
        </div>
      </div>  
        
          <PagiantionDashboard 
            paginate={paginate}
            row={row1}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
          />
    </div>
  )
}

export default MyReserveCourse