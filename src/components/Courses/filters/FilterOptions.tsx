import { useAppDispatch } from "../../../redux/hook"
import { resetFilters } from "../../../redux/features/coursesSlice"
import FilterSvg from "../common/FilterSvg"
interface Props {
   handleSideBar: ()=> void
}


const FilterOptions = ({handleSideBar}: Props) => {
    const dispatch = useAppDispatch()
    const handleResetFilter = () => {
        dispatch(resetFilters())
    }
  return (
    <div className="w-[272px] h-[45px] shadow-lg  bg-[#E7E7E7]  flex justify-between items-center pr-[16px] pl-[13px] mb-[10px]">
     <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none"
      onClick={handleResetFilter}
     >
                <path d="M7.15625 3.98959V3.20834C7.15625 1.90626 8.19792 0.864594 9.5 0.864594C10.8021 0.864594 11.8437 1.90626 11.8437 3.20834V3.98959" stroke="#DB3838" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M1.42725 3.98959H17.5731" stroke="#DB3838" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M16.0107 10.2396V3.98959" stroke="#DB3838" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M2.98975 7.73959V18.0521C2.98975 19.1979 3.92725 20.1354 5.07308 20.1354H13.9272C15.0731 20.1354 16.0106 19.1979 16.0106 18.0521V14.1458" stroke="#DB3838" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M7.67725 8.15625V15.9687" stroke="#DB3838" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M11.3232 8.15625V15.9687" stroke="#DB3838" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </svg>
     <div className="flex gap-[8px] items-center">
         <p className="font-primaryMedium text-[18px] text-[#333333]">فیلترها</p>
         <FilterSvg />
    </div>
  </div>
  )
}

export default FilterOptions