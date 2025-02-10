const FooterLinks = ({ links }) => (
    <div className="flex w-[219px] h-[104px] gap-[22px] mr-[10px]">
      {links.map((group, index) => (
        <div key={index} className="h-[104px] w-[219px] flex">
          <div className="grid w-[93px] h-[104px] justify-center justify-items-end text-[#77A9A8]">
            {group.map((link, i) => (
              <p key={i} className="text-[16px] font-primaryRegular">{link}</p>
            ))}
          </div>
          <div className="grid items-center relative top-[2px]">
            {[...Array(group.length)].map((_, i) => (
              <div key={i} className="h-[5px] w-[5px] bg-[#489A98] rounded-full"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

export default FooterLinks