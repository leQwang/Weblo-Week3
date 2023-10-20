import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Nominee, Award } from "../data/dataList";
import cardVal from "../img/cardBg--valorant.png";
import Button from "./Button";

interface NomineeContainerProps {
  award: Award; // Define the 'award' prop
}

export default function NomimeeSlider(props: NomineeContainerProps) {
  const { nominees } = props.award;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 5,
      spacing: 15,
    },
  });

  return (
    <>
      <div className="hidden navigation-wrapper w-[800px] lg:block">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[0].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[0].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[1].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[1].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[2].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[2].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[3].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[3].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[4].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[4].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[5].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[5].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[6].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[6].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[7].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[7].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[8].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[8].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[9].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[9].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[10].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[10].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[11].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[11].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[12].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[12].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[13].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[13].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[14].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[14].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[15].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[15].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[16].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[16].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[17].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[17].name}
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide1 border-none">
            <div className={`mx-auto grid grid-cols-1 h-[380px]`}>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[18].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[18].name}
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src={cardVal}
                  alt={nominees[19].name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominees[19].name}
                </p>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <div className="hidden lg:flex w-full h-fit  justify-center mt-3">
      <Button phrase="Bình Chọn Ngay" />
      </div>

    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
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
