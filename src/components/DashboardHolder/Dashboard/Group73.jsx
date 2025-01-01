import { Fragment , useState, useEffect} from 'react'
import images from '../../../assets/dashboardpng'
import { getProfile  } from "../../../core/services/api/user"
import './CircularProgress.css';


const toPersianNumber = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[digit]);
};



const CircularProgress = ({ percentage }) => {
  const radius = 50; 
  const circumference = 2 * Math.PI * radius; 
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="120" height="120" className="circular-progress">
      <circle
        className="background-circle"
        cx="60" 
        cy="60" 
        r={radius}
      />
      <circle
        className="progress-circle"
        cx="60"
        cy="60"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" 
      className={`percentage-text ${'font-primaryRegular dark:stroke-white'}
       
      `}>
        {toPersianNumber(percentage)}
         {" "} %
      </text>
    </svg>
  );
};


const Group73 = ({bgColor ,textColor}) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const getProfileCompletionPercentage = async () => {
    try {
      const profile = await getProfile();
  
      const fields = Object.keys(profile);
  
      const filledFields = fields.filter(field => profile[field]);
  
      const completionPercentage = (filledFields.length / fields.length) * 100;
  
      return completionPercentage;
    } catch (error) {
      console.error("Error fetching profile data:", error);
      return 0;
    }
  };
  useEffect(()=> {
    const fetchCompletionPercentage = async () => {
      const percentage = await getProfileCompletionPercentage();
      setCompletionPercentage(percentage);
    };

     fetchCompletionPercentage();
  },[])
  return (
    <Fragment>
           <div className='md:w-[336px] md:h-[110px]  flex md:gap-[34px] 
                 max-md:grid
                 max-md:justify-items-center
                 max-md:justify-end
                 max-smx3:mt-[140px]
                 max-smx3:justify-center
                 max-md:mt-[20px]
                 '
                 style={{direction:'ltr'}}
                 >
              <div className='w-[110px] h-[110px] max-smx3:w-[100px] max-md:mr-[25px]'>
              <CircularProgress percentage={completionPercentage.toFixed(2)} />
              </div>
              <div className='w-[192px] md:h-[69px] mt-[27px]  text-center max-md:mt-[10px] '
                style={{direction:'rtl'}} 
                >
                 <p
                  className='font-primaryMedium text-[#ABABAB] text-[16px] font-[400] leading-[22.7px]
                   max-smx3:text-[13px] max-md:ml-[20px] max-lg:mt-[10px] max-lg:mr-[20px]
                  '
                  style={{color: bgColor === "" ? '#A7A7A7': textColor
                  }}
                 >برای شرکت در دوره ها باید حداقل ٪ ۸۰ از پروفایل خود را تکمیل کنید.</p>
              </div>
            </div>
    </Fragment>
  )
}

export default Group73