import Slider from "rc-slider";
import "rc-slider/assets/index.css";
 
interface InputRangeSliderProps {
    range: number[],
    handleChange: (values: number[]) => void;

}


const InputRangeSlider = ({range, handleChange} : InputRangeSliderProps) => {
    const trackAndHandleStyle = {
        track: { backgroundColor: "orange", height: 6 },
        handle: [
          { backgroundColor: "orange", borderColor: "white", width: 10, height: 10, marginTop: -1.7 },
          { backgroundColor: "orange", borderColor: "white", width: 10, height: 10, marginTop: -1.7 },
        ],
        rail: { backgroundColor: "#ccc", height: 6 },
      };
  return (
    <Slider
            range
            min={100000}
            max={20000000}
            value={range}
            onChange={(values) => handleChange(values as number[])}
            trackStyle={[trackAndHandleStyle.track]}
            handleStyle={trackAndHandleStyle.handle}
            railStyle={trackAndHandleStyle.rail}
     />
  )
}

export default InputRangeSlider