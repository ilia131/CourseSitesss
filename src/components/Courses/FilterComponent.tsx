import { useGetTechnologyFilterQuery  } from "../../redux/services/api/courseApiSlice";
import CheckBoxComponent from "./CheckBoxComponent"

import { useState } from "react";

interface Props {
    setArray : React.Dispatch<string> 
    setCheck : React.Dispatch<number[]>
    check: number[]
}




const FilterComponent = ({setArray ,check , setCheck } : Props) => {
    const {data : technologydata } = useGetTechnologyFilterQuery(null)


    const [checkbox, setCheckbox] = useState<boolean>(false)

    const HandleCheck = async (id : number) => {
        let updatedItems;
        if (check.includes(id)) {
          updatedItems = check.filter((item) => item !== id);
        } else {
          updatedItems = [...check, id];
        }
      
        setCheck(updatedItems);
        
        const isNotEmpty = updatedItems.length > 0;
        setCheckbox(isNotEmpty);
      
        if (isNotEmpty) {
            const count = updatedItems.join(","); 
            setArray(count)
        }
      };

    const transFormeddata = [
        {
            label: "تکنولوژی",
            items: technologydata ? technologydata.map((item: any , id: number) => ({ name: item.describe , id})) : [], 
            height: "173px",
          },
        
        { label: "وضعیت", items: [
            { name: "Boot strap" },
            { name: "Boot strap" },
            { name: "Boot strap" },
        ], height: "123px" },

        { label: "امتیاز", items: [
            { name: "Boot strap" },
            { name: "Boot strap" },
            { name: "Boot strap" },
            { name: "Boot strap" },
            { name: "Boot strap" },
        ], height: "173px" },
        
        { label: "سطح", items: [
            { name: "Boot strap" },
            { name: "Boot strap" },
            { name: "Boot strap" },
        ], height: "127px" }
    ];
  return (
    <div className="h-[880px] w-[311px] border border-green-400 justify-center px-[20px]">
         <div className="w-[272px] h-[45px] border border-black bg-[#E7E7E7]"></div>
         {transFormeddata.map((section, index) => (
                <CheckBoxComponent 
                    key={index} 
                    technology={section.items} 
                    height={section.height} 
                    labelText={section.label} 
                    HandleCheck={HandleCheck}
                    check={check}
                />
            ))}
    </div>
  )
}

export default FilterComponent