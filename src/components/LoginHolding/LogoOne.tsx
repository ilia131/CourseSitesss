


const LogoOne = () => {
  return (
    <div className='relative bottom-[65px] left-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
              <g filter="url(#filter0_d_281_498)">
                <rect x="-3" y="25.8198" width="42" height="42" rx="13" transform="rotate(-45 -3 25.8198)" fill="#FCFCFC"/>
              </g>
              <defs>
                <filter id="filter0_d_281_498" x="0.384766" y="0.506084" width="52.6274" height="52.6274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_498"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_498" result="shape"/>
                </filter>
              </defs>
            </svg>
            <p className='absolute bottom-[15px] left-[23.5px] font-primaryMedium text-[20px] text-[#D47300] font-[700]'>۱</p>
        </div>
  )
}

export default LogoOne