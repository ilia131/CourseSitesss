const EditButton = ({ onClick, label = "ویرایش" }) => {
    return (
        <div className='max-smx3:w-full flex justify-center 
        items-center dark:bg-gray-800 
        max-md:h-[150px]
        max-smx3:mt-[-30px] max-smx3:h-[150px]
        max-lg:mt-[40px]
        max-xl:mt-[60px]
        '>
        <button className='w-[113px] h-[30px] rounded-[20px] absolute
           border border-[#01CEC9]
           xl:left-[351px] xl:right-[350px]
           xl:bottom-[39px]
           max-smx3:top-[900px] 
           z-[555] flex items-center
           gap-[12px] justify-center pb-[2px]' onClick={onClick}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_504_741)">
              <path d="M8.20998 2.26647C8.64468 1.79551 8.86203 1.56003 9.09298 1.42267C9.65023 1.09124 10.3365 1.08093 10.9031 1.39548C11.1379 1.52584 11.3619 1.7547 11.8099 2.2124C12.258 2.67011 12.482 2.89896 12.6096 3.13883C12.9175 3.71761 12.9075 4.41859 12.583 4.98787C12.4485 5.2238 12.218 5.44583 11.757 5.88988L6.27151 11.1733C5.39784 12.0148 4.96099 12.4356 4.41503 12.6488C3.86906 12.862 3.26886 12.8464 2.06845 12.815L1.90513 12.8107C1.53969 12.8011 1.35697 12.7964 1.25075 12.6758C1.14453 12.5553 1.15904 12.3691 1.18804 11.9969L1.20379 11.7948C1.28542 10.747 1.32623 10.2232 1.53082 9.75224C1.73542 9.28132 2.08833 8.899 2.79416 8.13425L8.20998 2.26647Z" stroke="#005653" stroke-linejoin="round"/>
              <path d="M7.58301 2.33337L11.6663 6.41671" stroke="#005653" stroke-linejoin="round"/>
              <path d="M8.16699 12.8334H12.8337" stroke="#005653" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_504_741">
              <rect width="14" height="14" fill="white"/>
              </clipPath>
                 </defs>
              </svg>      
              <p className='font-primaryMedium text-[15px] text-[#005653]'>{label}</p>
        </button>  
        </div> 
    );
  };
  
  export default EditButton;
  