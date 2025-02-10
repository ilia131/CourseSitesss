const ServiceItem = ({ imgSrc, altText, additionalClasses }) => (
    <div className={additionalClasses}>
      <img src={imgSrc} alt={altText} width={211} height={170} />
    </div>
  );
  
  export default ServiceItem;