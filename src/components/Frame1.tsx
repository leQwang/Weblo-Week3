import React from "react";
import "../index.css";
import title from "../img/title.png";

function Frame1() {
  const scrollToFrame2 = () => {
    const element = document.getElementById("frame2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen overflow-hidden bg-cta-mobile md:bg-cta-desktop bg-no-repeat bg-cover bg-center min-h-screen xl:min-h-screen">
      <div className="absolute hidden md:flex flex-row items-center justify-between text-white top-[5.5rem] w-[100%]">
        <div className="flex items-center">
          <div className="w-2 bg-white h-2 mx-2"></div>
          <div className="uppercase">radiant choice valorant community</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="35"
          viewBox="0 0 100 100"
          width="35"
        >
          <path
            d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
            fill="#fff"
          ></path>
        </svg>

        <div className="flex items-center">
          <div className="uppercase">radiant choice valorant community</div>
          <div className="w-2 bg-white h-2 mx-2"></div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen md:h-fit md:mt-32">
        <img
          src={title}
          alt="title"
          className="w-[90%] md:w-[70%] lg:w-[50%]"
        />
        <p className="flex justify-center text-center text-white w-[85%] lg:w-[40%] mb-6 text-sm font-semibold relative lg:text-xl">
          Giải thưởng nhằm ghi nhận những khoảnh khắc nổi bật và thành tựu xuất
          sắc của cộng đồng Valorant Việt Nam trong năm 2022.
        </p>

        <button
          onClick={scrollToFrame2}
          className=" relative bg-[#ff4655] text-white p-4 px-12 mb-6
        before:contents[''] before:w-[110%] before:border-t before:border-l before:border-r before:h-6 before:border-white before:absolute before:-top-2 before:-left-[5%]
        after:contents[''] after:w-[110%] after:border-b after:border-l after:border-r after:h-6 after:border-white after:absolute after:-bottom-2 after:-right-[5%] button__cta"
        >
          <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden ">
            <div className="relative bg-black w-[120%] h-full -left-[140%] button__cta--skew--box transition-all ease-linear duration-300 -skew-x-12"></div>
          </div>
          <span className="relative text-base font-bold">Tìm Hiểu Ngay</span>
          <div className="absolute bottom-0 right-0 4 w-1 h-1 bg-black button__cta--small--box"></div>
        </button>
      </div>
    </div>
  );
}

export default Frame1;
