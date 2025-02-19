import SelectOptionFilter from '../filters/SelectOptionFilter';
import ChangeButton from '../common/ChangeButton';
import IconLeft from "../../../assets/coursesvg/IconLeft"
import IconRight from "../../../assets/coursesvg/IconRight"


const TopAllCourse = () => {
  return (
    <div className='w-[904px] h-[45px] mb-[37px] flex justify-between'>
     <ChangeButton />
     <SelectOptionFilter 
            text="جدیدترین"
            onClick={() => console.log("Filter Clicked!")}
            LeftIcon={IconLeft}    
            RightIcon={IconRight}
      />
    </div>
  )
}

export default TopAllCourse