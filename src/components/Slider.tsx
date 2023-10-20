import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { awards } from "../data/dataList";
import "../index.css";
import NomineeContainer from "./NomineeContainer";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: "snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 100,
    },
    breakpoints: {
      "(min-width: 500px)": {
        loop: false,
      },
    },
  });

  useEffect(() => {
    const allSelectedBG = document.querySelectorAll(".bg-selectedBG");
    allSelectedBG.forEach((element) => {
      element.classList.remove("bg-selectedBG");
    });
    const currentSlideElement = document.querySelector(
      `.number-slide${currentSlide + 1}`
    );
    if (currentSlideElement) {
      currentSlideElement.classList.add("bg-selectedBG");
    }
  }, [currentSlide]);

  return (
    <>
      <div className="hidden lg:block navigation-wrapper">
        <div ref={sliderRef} className="keen-slider w-[90%] lg:w-[700px]">
          {awards.map((award, idx) => {
            return (
              <div
                key={idx}
                className={`keen-slider__slide number-slide${
                  idx + 1
                } bg-selectedBG`}
              >
                {award.title}
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      <select name="Award List" id="award-list">
        {awards.map((award, idx) => {
          return (
            <option key={idx} value={award.title}>
              {award.title}
            </option>
          );
        })}
      </select>

      {currentSlide === 0 && <NomineeContainer award={awards[0]} />}
      {currentSlide === 1 && (
        <div>
          <h1 className="text-white text-3xl font-bold">
            SKIN FINISHER YÊU THÍCH NHẤT
          </h1>
          <p className="text-white text-xl">
            Các skin finisher được đánh giá dựa trên các tiêu chí: độ hiếm, độ
            đẹp, độ ấn tượng, độ phù hợp với vũ khí,...
          </p>
        </div>
      )}
      {currentSlide === 2 && <NomineeContainer award={awards[2]} />}
      {currentSlide === 3 && <NomineeContainer award={awards[3]} />}
      {currentSlide === 4 && <NomineeContainer award={awards[4]} />}
      {currentSlide === 5 && <NomineeContainer award={awards[5]} />}
      {currentSlide === 6 && <NomineeContainer award={awards[6]} />}
      {currentSlide === 7 && <NomineeContainer award={awards[7]} />}
    </>
  );
}

function Arrow(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
