const InstructorImage = ({ imageUrl }) => (
    <img 
      src={imageUrl} 
      className="object-cover transition duration-300 ease-in-out group-hover:shadow-lg group-hover:blur-[2px]" 
    />
);

export default InstructorImage