import React from "react";

interface MobileButtonProps {
  link?: string;
}

function MobileButton(props: MobileButtonProps) {
  const redirectToLink = () => {
    window.location.href = props.link || "#";
  };
  return (
    <button className="relative bg-[#FF4655] w-full h-12 mb-4 lg:hidden frame2__button--mobile" onClick={redirectToLink}>
      {/* em  dùng tạm một svg khác ở đây */}
      <svg
      className="absolute transform -rotate-[45deg]"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="10.000000pt"
        height="10.000000pt"
        viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
          />
        </g>
      </svg>
      <div className="flex justify-center items-center w-full h-full">Bình Chọn Ngay</div>
      <svg
        className="absolute bottom-0 right-0 transform rotate-[15deg]"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="10.000000pt"
        height="10.000000pt"
        viewBox="0 0 1280.000000 1130.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M6223 11238 c-13 -6 -36 -32 -52 -57 -16 -25 -510 -878 -1099 -1896
-1218 -2107 -2695 -4661 -4078 -7050 -766 -1325 -949 -1648 -952 -1681 -3 -35
1 -47 26 -75 l30 -34 6172 0 6172 0 29 33 c52 58 46 78 -104 337 -74 127 -492
849 -929 1605 -2253 3896 -5066 8758 -5078 8776 -29 47 -90 65 -137 42z"
          />
        </g>
      </svg>
    </button>
  );
}

export default MobileButton;
