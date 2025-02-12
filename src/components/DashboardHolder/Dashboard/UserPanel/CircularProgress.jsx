import toPersianNumber from "../../../common/utils/ToPersianNumber";


const CircularProgress = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width="120"
      height="120"
      className="flex justify-center items-center relative"
    >
      <circle
        className="fill-none stroke-gray-300 stroke-[10px]"
        cx="60"
        cy="60"
        r={radius}
      />
      <circle
        className="fill-none stroke-orange-500 stroke-[10px] stroke-linecap-round transition-all duration-300"
        cx="60"
        cy="60"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="text-gray-800 text-base font-primaryRegular"
      >
        {toPersianNumber(percentage)} %
      </text>
    </svg>
  );
};

export default CircularProgress;