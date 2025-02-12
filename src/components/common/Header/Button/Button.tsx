interface ButtonProps {
  label: string;   
  icon: string;   
  onClick: () => void;  
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => (
  <button
    className='bg-[#01CEC9] flex w-[145px] h-[44px] box-content font-primaryRegular  
            items-center justify-center rounded-[26px] text-white max-md:relative max-md:bottom-[7px]
            max-md:h-[38px] max-md:w-[140px]'
    onClick={onClick}
  >
    <img 
      src={icon} 
      width={25} 
      height={25} 
      className='mb-[3px]' 
      alt="button icon" // اضافه کردن ویژگی alt برای بهبود دسترسی و رعایت قوانین دسترسی
    />
    <p className='w-[90px] h-[23px] mt-[5px] mb-[10px] flex items-center justify-center max-md:font-primaryMedium'>
      {label}
    </p>
  </button>
);

export default Button;
