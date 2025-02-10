const SliderImage = ({ img }) => (
  <img className='w-[233px] h-[151px] 
         absolute bottom-[172px]
         flex justify-center items-center bg-gradient-to-r from-[#A259FF] to-[#D47300]
         rounded-[10px] z-[2] ml-[16px]' src={img}/>  );
  
export default SliderImage;