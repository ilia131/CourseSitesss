const InstructorImages = ({ images }) => {
    const imageStyles = [
      "lg:w-[300px] lg:h-[351px] relative lg:bottom-[409px] lg:left-[71px] z-[554] max-md:w-[290px] max-md:right-[150px] max-md:bottom-[50px] max-md:hidden max-lg:hidden",
      "lg:w-[314px] relative lg:bottom-[755px] lg:left-[34px] z-[553] max-md:hidden max-lg:hidden",
      "relative lg:bottom-[1135px] lg:w-[327px] lg:right-[-7px] max-md:hidden max-lg:hidden"
    ];
  
    return (
      <>
        {images.map((imgSrc, index) => (
          <div key={index} className={imageStyles[index]}>
            <img src={imgSrc} />
          </div>
        ))}
      </>
    );
  };

export default InstructorImages