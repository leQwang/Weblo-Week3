import React from "react";
import { Nominee, Award } from "../data/dataList";
import cardVal from "../img/cardBg--valorant.png";

interface NomineeContainerProps {
  award: Award; // Define the 'award' prop
}

function NomineeContainer(props: NomineeContainerProps) {
  const { nominees } = props.award;
  return (
    <div className="lg:grid lg:place-items-center">
      {nominees.length <= 5 && (
        <div className={`grid grid-cols-2 lg:grid-cols-${nominees.length} gap-4`}>
          {nominees.map((nominee, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cardVal}
                  alt={nominee.name}
                  className="w-full lg:w-[200px] lg:h-[300px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 lg:h-10 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominee.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {nominees.length === 8 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {nominees.map((nominee, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cardVal}
                  alt={nominee.name}
                  className="w-full lg:w-[200px] lg:h-[200px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 lg:h-10 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
                  {nominee.name}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {nominees.length === 10 && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {nominees.map((nominee, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cardVal}
                  alt={nominee.name}
                  className="w-full lg:w-[200px] lg:h-[200px] object-cover"
                />
                <p className="flex items-center justify-center text-white w-full h-8 lg:h-10 text-xl bg-cardBG--mobile bg-cover lg:bg-cardBG--desktop">
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
