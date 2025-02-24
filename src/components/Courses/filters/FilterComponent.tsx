import CheckBoxComponent from "./CheckBoxComponent"
import { ClipLoader } from "react-spinners";
import FilterOptions from "./FilterOptions";



type FilterItem = {
  id: number;
  label: string;
  items: { id: string; name: string }[] | null;
  height: string;
};


interface Props {
  check: string[];
  radioCheckLevel: string;
  radioCheckType:string;
  transFormeddata: FilterItem[];
  isLoadingLevel: boolean
  handleSideBar: ()=> void
}



const FilterComponent = ({
  check , 
  radioCheckLevel , 
  radioCheckType,
  transFormeddata,
  isLoadingLevel,
  handleSideBar,
  
}: Props) => {  
  if (isLoadingLevel) {
    return <div className="w-[311px] justify-center flex mt-[100px]">
            <ClipLoader />
           </div>
    }
  return (
    <div className="h-[880px] w-[311px]   flex flex-col px-[20px] gap-y-[2px]">
         <FilterOptions handleSideBar={handleSideBar} />
          {transFormeddata.map((section, index) => (
                <CheckBoxComponent 
                    key={index} 
                    id2={section.id}
                    technology={section.items} 
                    height={section.height} 
                    labelText={section.label} 
                    check={check}
                    radioCheckLevel={radioCheckLevel}
                    radioCheckType={radioCheckType}
                />
            ))}
     </div>
  )
}

export default FilterComponent