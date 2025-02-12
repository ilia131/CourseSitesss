import { Fragment } from "react"

const Tooltip = ({ text, isTooltipVisible ,showTooltip, hideTooltip}) => {
    
  return (
    <Fragment >
    {isTooltipVisible && (
                               
        <div className="absolute  mt-2  transform 
        -translate-x-1/2  bg-cyan-300 border border-gray-300 shadow-lg
         xl:left-[600px] z-[4444] cursor-pointer font-primaryMedium text-[13px]
         rounded-md p-3 
         w-[200px] top-[300px]
        "
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        >
               {text}
        </div>
    )}
    </Fragment>
  )
}

export default Tooltip