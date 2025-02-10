const LogoComponent = ({ logo }) => {
    return (
        <div className='flex justify-center items-center ml-[2px] '>
        <div className='xl:w-[135px] xl:h-[50px] max-md:w-[100px] max-lg:w-[135px] max-lg:h-[135px] lg:w-[125px] lg:h-[50px] lg:mr-[10px] xl:mr-0 lg:relative lg:top-[19px] xl:top-0 xl:mt-0 duration-700'>
           <img src={logo} alt="Logo" />

               </div>
        </div>
    );
  };
  
export default LogoComponent;
  