import React from "react";

interface ButtonProps {
  phrase: string;
  link?: string;
}

function Button(props: ButtonProps) {
  const redirectToLink = () => {
    window.location.href = props.link || "#";
  };
  return (
    <button onClick={redirectToLink}
      className=" relative bg-[#ff4655] text-white p-4 px-12 mb-6
        before:contents[''] before:w-[110%] before:border-t before:border-l before:border-r before:h-6 before:border-white before:absolute before:-top-2 before:-left-[5%]
        after:contents[''] after:w-[110%] after:border-b after:border-l after:border-r after:h-6 after:border-white after:absolute after:-bottom-2 after:-right-[5%] button__cta"
    >
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden ">
        <div className="relative bg-black w-[120%] h-full -left-[140%] button__cta--skew--box transition-all ease-linear duration-300 -skew-x-12"></div>
      </div>
      <span className="relative text-base font-bold">{props.phrase}</span>
      <div className="absolute bottom-0 right-0 4 w-1 h-1 bg-black button__cta--small--box"></div>
    </button>
  );
}

export default Button;
