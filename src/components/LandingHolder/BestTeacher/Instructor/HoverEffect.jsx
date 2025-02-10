const HoverEffect = ({ children }) => (
    <div className="opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 ease-in-out rounded-[20px]
      absolute inset-0 bg-gradient-to-b from-transparent to-black/90  
      flex justify-center w-[266.5px] left-[4.5px] 
      max-md:w-[187px] max-md:h-[255.35px] max-md:left-[1px]
      max-lg:w-[187px] max-lg:h-[255.35px] max-lg:left-[1px]">
      {children}
    </div>
);

export default HoverEffect