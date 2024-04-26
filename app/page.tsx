"use client";
import TextController from "@/components/TextController";
import Image from "next/image";
import { useState } from "react";
import { text } from "stream/consumers";
import { HeadingProps } from "@/utils/props";
import BingoCard from "@/components/BingoCard";
import Heading from "@/components/Heading";

export default function Home() {
  const [things, setThings] = useState<string[]>([]);
  const [thingText, setThingText] = useState<string>("");

  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [cardAmount, setCardAmount] = useState(10);

  const [extraHeading, setExtraHeading] = useState<HeadingProps>({
    text: "En ekstra overskrift til bingo kortet",
    enabled: false,
    size: 20,
    weight: 2,
    fontFamily: "roboto",
  });

  const [heading, setHeading] = useState<HeadingProps>({
    text: "MEGA MEGET BINGO",
    enabled: true,
    size: 50,
    weight: 5,
    fontFamily: "platypi",
  });

  const [subHeading, setSubHeading] = useState<HeadingProps>({
    text: "En underoverskrift som er mindre vigtig end den anden overskrift",
    enabled: true,
    size: 20,
    weight: 3,
    fontFamily: "roboto",
  });

  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(event.target.id);
  };

  const addThing = () => {
    if (!thingText) return;

    setThings([...things, thingText]);
    setThingText("");
  };

  return (
    <>
      <main className="bg-stone-800 flex p-12 gap-12 h-screen">
        <div className="flex-1 card bg-white/80 rounded-box shadow-xl p-12 glass flex flex-col gap-8 overflow-scroll">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl">Generer bingoplader</h1>
            <div className="flex gap-2">
              <label className="input input-bordered flex items-center gap-2">
                Antal plader
                <input
                  type="number"
                  className="w-16"
                  placeholder="..."
                  value={cardAmount}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setCardAmount(0);
                    } else {
                      let amount = Number(e.target.value);
                      if (amount > 100) {
                        amount = 100;
                      }

                      setCardAmount(amount);
                    }
                  }}
                />
              </label>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => window.print()}
              >
                Print
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col w-full lg:flex-row">
              <label className="text-sm flex-grow">
                Antal rækker
                <input
                  type="range"
                  min={1}
                  max="5"
                  value={rows}
                  className="range"
                  step="1"
                  title="Antal rækker"
                  onChange={(e) => setRows(Number(e.target.value))}
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </label>

              <div className="divider divider-horizontal"></div>

              <label className="text-sm flex-grow">
                Antal kolonner
                <input
                  type="range"
                  min={1}
                  max="5"
                  value={cols}
                  className="range"
                  step="1"
                  title="Antal kolonner"
                  onChange={(e) => setCols(Number(e.target.value))}
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </label>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
              <input
                id="tab1"
                type="radio"
                name="my_tabs_2"
                role="tab"
                aria-controls="panel1"
                className="tab"
                aria-label="Overskrift"
                onChange={handleTabChange}
                checked={activeTab === "tab1"}
              />
              <div
                id="panel1"
                role="tabpanel"
                aria-labelledby="tab1"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                hidden={activeTab !== "tab1"}
              >
                <TextController text={heading} setText={setHeading} />
              </div>

              <input
                id="tab2"
                type="radio"
                name="my_tabs_2"
                role="tab"
                aria-controls="panel2"
                className="tab"
                aria-label="Underskrift"
                onChange={handleTabChange}
                checked={activeTab === "tab2"}
              />
              <div
                id="panel2"
                role="tabpanel"
                aria-labelledby="tab2"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                hidden={activeTab !== "tab2"}
              >
                <TextController text={subHeading} setText={setSubHeading} />
              </div>

              <input
                id="tab3"
                type="radio"
                name="my_tabs_2"
                role="tab"
                aria-controls="panel3"
                className="tab"
                aria-label="Ekstra overskrift"
                onChange={handleTabChange}
                checked={activeTab === "tab3"}
              />
              <div
                id="panel3"
                role="tabpanel"
                aria-labelledby="tab3"
                className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                hidden={activeTab !== "tab3"}
              >
                <TextController text={extraHeading} setText={setExtraHeading} />
              </div>
            </div>

            <div className="flex justify-between w-full items-end">
              <div className="flex gap-4 items-end">
                <label className="form-control flex w-full max-w-xs">
                  <div className="label flex-none">
                    <span className="label-text">
                      Tilføj ting (Brug <kbd className="kbd kbd-sm">Enter</kbd>{" "}
                      knappen)
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Skriv her"
                    className="input input-bordered flex-grow min-w-72"
                    value={thingText}
                    onChange={(e) => setThingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addThing();
                      }
                    }}
                  />
                </label>
                <button
                  type="button"
                  className="btn flex-none"
                  onClick={addThing}
                >
                  Tilføj
                </button>
              </div>
              <p className="text-sm">{things.length} ting tilføjet</p>
            </div>
            <div className="card card-bordered p-4 flex-row flex-wrap gap-2 max-h-40 overflow-scroll bg-white">
              {things.length === 0 ? (
                <p className="text-center text-lg">Ingen ting tilføjet endnu</p>
              ) : (
                things.map((thing, i) => (
                  <button
                    key={i}
                    type="button"
                    className="btn btn-xs"
                    onClick={() => {
                      setThings(things.filter((_, j) => i !== j));
                    }}
                  >
                    {thing} <span className="font-light">x</span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 card bg-white rounded-box shadow-xl p-12 items-center text-center overflow-scroll w-full">
          <div className="w-full">
            <Heading {...extraHeading} />
            <Heading {...heading} />
            <Heading {...subHeading} />
            <BingoCard things={things} rows={rows} cols={cols} />
          </div>
        </div>
      </main>
      <div className="print bg-white grid-cols-2 text-center hidden">
        {Array.from({ length: cardAmount }, (_, i) => (
          <div key={i} className="p-4">
            <Heading {...extraHeading} />
            <Heading {...heading} />
            <Heading {...subHeading} />
            <BingoCard things={things} rows={rows} cols={cols} />
          </div>
        ))}
      </div>
    </>
  );
}
