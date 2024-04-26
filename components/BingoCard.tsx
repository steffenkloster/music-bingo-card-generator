import { HeadingProps } from "@/utils/props";
import React from "react";
import { Dispatch, SetStateAction } from "react";

type BingoCardProps = {
  things: string[];
  rows: number;
  cols: number;
};

const getFontSize = (text: string) => {
  return `${Math.max(14, Math.min(35, 35 - text.length * 3))}px`;
};

const getGridColumnClass = (cols: number) => {
  switch (cols) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    default:
      return "grid-cols-5";
  }
};

const BingoCard: React.FC<BingoCardProps> = React.memo(
  ({ things, rows, cols }) => {
    const generateBingoCard = () => {
      const availableThings = [...things];
      return Array.from({ length: rows * cols }, (_, i) => {
        let thingText;
        if (availableThings.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * availableThings.length
          );
          thingText = availableThings[randomIndex];
          availableThings.splice(randomIndex, 1);
        } else {
          thingText = "?";
        }

        return (
          <div
            className="border-2 border-black p-2"
            style={{ fontSize: getFontSize(thingText) }}
            key={`box-${i}`}
          >
            {thingText}
          </div>
        );
      });
    };

    return (
      <div
        className={`bingo-card border-2 border-black w-full mt-8 ${getGridColumnClass(
          cols
        )}`}
      >
        {generateBingoCard()}
      </div>
    );
  }
);

BingoCard.displayName = "BingoCard";

export default BingoCard;
