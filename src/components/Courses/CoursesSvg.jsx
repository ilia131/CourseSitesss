const CoursesSvg = () => {
  return (
    <svg
      width="350"
      height="401"
      viewBox="0 0 350 401"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_132_126)">
        <path
          d="M4 22C4 10.9543 12.9543 2 24 2H325.318C336.999 2 346.194 11.9682 345.253 23.6113L321.05 323.055C320.327 332.011 313.719 339.385 304.896 341.083L27.7802 394.423C15.4448 396.797 4 387.345 4 374.783V22Z"
          fill="url(#paint0_linear_132_126)"
          fill-opacity="0.4"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_132_126"
          x="-4"
          y="-6"
          width="357.319"
          height="408.79"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_132_126"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_132_126"
            result="effect2_dropShadow_132_126"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_132_126"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_132_126"
          x1="319.601"
          y1="332.5"
          x2="8.82086"
          y2="3.94003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01CEC9" stop-opacity="0.5" />
          <stop offset="0.9" stop-color="#FEB700" stop-opacity="0.61" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const CourseSvg1 = () =>{
  return( <svg width="508" height="401" viewBox="0 0 508 401" fill="none" className="" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_bd_133_191)">
<path d="M79 22C79 10.9543 87.9543 2 99 2H400.318C411.999 2 421.194 11.9682 420.253 23.6113L396.05 323.055C395.327 332.011 388.719 339.385 379.896 341.083L102.78 394.423C90.4448 396.797 79 387.345 79 374.783V22Z" fill="url(#paint0_linear_133_191)" fill-opacity="0.4" shape-rendering="crispEdges"/>
</g>
<path d="M488.9 265.048C478.53 303.083 364.882 305.223 235.061 269.827C105.241 234.432 8.40679 174.904 18.7771 136.869C29.1474 98.8337 142.795 96.6938 272.616 132.089C402.437 167.485 499.27 227.012 488.9 265.048Z" stroke="url(#paint1_linear_133_191)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 10"/>
<defs>
<filter id="filter0_bd_133_191" x="71" y="-6" width="357.319" height="408.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_133_191"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_backgroundBlur_133_191" result="effect2_dropShadow_133_191"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_133_191" result="shape"/>
</filter>
<linearGradient id="paint0_linear_133_191" x1="394.601" y1="332.5" x2="83.8209" y2="3.94003" gradientUnits="userSpaceOnUse">
<stop stop-color="#01CEC9" stop-opacity="0.5"/>
<stop offset="0.9" stop-color="#FEB700" stop-opacity="0.61"/>
</linearGradient>
<linearGradient id="paint1_linear_133_191" x1="18.7771" y1="136.869" x2="488.9" y2="265.048" gradientUnits="userSpaceOnUse">
<stop stop-color="#01CEC9"/>
<stop offset="0.28" stop-color="#E78B00" stop-opacity="0"/>
<stop offset="0.655" stop-color="#E88B00" stop-opacity="0"/>
<stop offset="1" stop-color="#01CEC9"/>
</linearGradient>
</defs>
</svg>)
}




export { CoursesSvg,CourseSvg1 };
