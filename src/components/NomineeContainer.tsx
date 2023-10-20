import React from "react";
import { Nominee, Award } from "../data/dataList";
import cardVal from "../img/cardBg--valorant.png";
import Button from "./Button";
import MobileButton from "./MobileButton";

interface NomineeContainerProps {
  award: Award; // Define the 'award' prop
}

function NomineeContainer(props: NomineeContainerProps) {
  const { nominees } = props.award;
  return (
    <div className="lg:grid lg:place-items-center">
      <MobileButton link={props.award.votingLink}/>
      {nominees.length <= 5 && (
        <>
        <div
          className={`grid grid-cols-2 lg:grid-cols-${nominees.length} gap-2`}
        >
          {nominees.map((nominee, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cardVal}
                  alt={nominee.name}
                  className="w-full h-[200px] lg:h-[332px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 lg:h-10 text-sm font-bold lg:text-lg bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominee.name}
                </p>
              </div>
            );
          })}

        </div>
        <div className="w-full h-fit justify-center mt-5 hidden lg:flex">
          <Button phrase="Bình Chọn Ngay" link={props.award.votingLink} />
        </div>
        </>
      )}
      {nominees.length === 8 && (
        <>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {nominees.map((nominee, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cardVal}
                  alt={nominee.name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-sm font-bold lg:text-lg bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominee.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit hidden lg:flex justify-center mt-5">
          <Button phrase="Bình Chọn Ngay" link={props.award.votingLink} />
        </div>

        </>
      )}

      {nominees.length > 10 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:hidden">
          {nominees.map((nominee, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cardVal}
                  alt={nominee.name}
                  className="w-full h-[200px] lg:w-[200px] lg:h-[150px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 text-sm font-bold lg:text-lg bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominee.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NomineeContainer;
