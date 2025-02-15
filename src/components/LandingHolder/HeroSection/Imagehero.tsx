interface ImageProps {
  images: {
    shape: string;
  };
}

const Imagehero: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className='relative right-[60px] top-[1px] w-[604.3px] h-[447px] lg:w-[500px] xl:w-[604px]'>
       <img src={images.shape} alt='imagehero' />
    </div>
  );
}

export default Imagehero;
