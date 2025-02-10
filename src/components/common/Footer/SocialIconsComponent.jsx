const SocialIconsComponent = ({ socialLinks }) => {
    return (
      <div className='flex justify-center gap-[6.22px] max-md:mt-[-10px] max-lg:mt-[-10px]'>
        {socialLinks.map(({ icon, alt, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-[35px] h-[35px] bg-[#008D8A] rounded-full flex justify-center items-center">
              <img src={icon} alt={alt} width={22} height={22} />
            </div>
          </a>
        ))}
      </div>
    );
  };
  
export default SocialIconsComponent;
  