import toPersianNumber from '../../../components/common/utils/ToPersianNumber'
import InputRangeSlider from './InputRangeSlider'
import { useRange } from '../../common/hooks/hookCoursesScreen/useRangehook';

const InputRange = () => {
  const { range, handleChange } = useRange();
  
  return (
   <div className="w-full p-4  rounded-lg  ">
      <div className="flex justify-between text-green-800 font-bold text-[14px] mb-3 font-primaryMedium">
           <span>{toPersianNumber(range[0].toLocaleString())}</span>
           <span>{toPersianNumber(range[1].toLocaleString())}</span>
      </div>
          <InputRangeSlider  range={range} handleChange={handleChange}/>     
      </div>
  )
}

export default InputRange