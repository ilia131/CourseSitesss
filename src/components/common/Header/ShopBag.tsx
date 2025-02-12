interface ShopBagProps {
  images: {
    shopbag: string; 
  };
}


const ShopBag: React.FC<ShopBagProps> = ({ images }) => {
  return (
    <div className="w-[32px] h-[32px] mb-[15px] mt-[7px] flex justify-end max-md:hidden">
      <img 
        src={images.shopbag} 
        width={32} 
        height={32} 
        className="w-[32px]"
        alt="Shop Bag"
      /> 
      <span className="absolute text-[13px] flex items-center justify-center text-white pb-[0.7px] w-[14px] h-[14px] rounded-full bg-[#E48900] font-primaryMedium left-[181px] top-[24px] pl-[0.5px]">
        ۲
      </span> 
    </div>
  );
};

export default ShopBag;