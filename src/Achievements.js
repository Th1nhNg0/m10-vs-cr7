import React from "react";
import { useEffect, useState } from "react";
const achivements_awards = require("./achivements_awards.json");
const achivements_title = require("./achivements_title.json");

export default function Achievements() {
  const [type, settype] = useState("Award");
  const [data, setdata] = useState(achivements_awards);
  const [awardsName, setawardsName] = useState([]);
  const [showMore, setshowMore] = useState(false);
  useEffect(() => {
    const awards = new Set();
    let myData;
    if (type === "Award") {
      for (let aw of achivements_awards) {
        awards.add(aw.Award);
      }
      myData = achivements_awards;
    }
    if (type === "Title") {
      for (let aw of achivements_title) {
        awards.add(aw.Title);
      }
      myData = achivements_title;
    }
    const arr = Array.from(awards);
    arr.sort(
      (a, b) =>
        myData.reduce((pv, cv) => {
          return pv + (cv.Award === b);
        }, 0) -
        myData.reduce((pv, cv) => {
          return pv + (cv.Award === a);
        }, 0)
    );
    setdata(myData);
    setawardsName(arr);
  }, [type]);
  return (
    <div>
      <div className="flex items-center justify-center my-5">
        <p className=" shine">Achievements</p>
      </div>
      <div className="flex gap-10 mb-10 justify-evenly">
        <button
          onClick={() => settype("Award")}
          className={`px-5 py-3 text-white ${
            type === "Award" ? "bg-yellow-500" : "bg-gray-500"
          } rounded`}
        >
          Awards
        </button>
        <button
          onClick={() => settype("Title")}
          className={`px-5 py-3 text-white ${
            type === "Title" ? "bg-yellow-500" : "bg-gray-500"
          } rounded`}
        >
          Title
        </button>
      </div>
      <div
        className={`${
          showMore ? "max-h-auto" : "max-h-[50vh]"
        } overflow-hidden space-y-5`}
      >
        {awardsName.map((award) => (
          <div key={award}>
            <p className="font-semibold text-center">{award}</p>
            <div className="flex">
              <div
                className={`flex-1 p-3  bg-gradient-to-l
                ${
                  data.filter(
                    (aw) => aw[type] === award && aw.Player === "Messi"
                  ).length > 0
                    ? "from-blue-500"
                    : "from-gray-300"
                } to-transparent`}
              >
                <div className="flex flex-wrap justify-end gap-5 ">
                  {data
                    .filter((aw) => aw[type] === award && aw.Player === "Messi")
                    .sort((a, b) => b.Year - a.Year)
                    .map((aw, i) => (
                      <div className="text-sm font-semibold" key={i}>
                        {aw.Year}
                      </div>
                    ))}
                </div>
              </div>
              <div
                className={`justify-between flex-1 p-3 bg-gradient-to-r 
              ${
                data.filter(
                  (aw) => aw[type] === award && aw.Player === "Ronaldo"
                ).length > 0
                  ? "from-red-500"
                  : "from-gray-300"
              } to-transparent`}
              >
                <div className="flex flex-wrap gap-5">
                  {data
                    .filter(
                      (aw) => aw[type] === award && aw.Player === "Ronaldo"
                    )
                    .map((aw, i) => (
                      <div className="text-sm font-semibold" key={i}>
                        {aw.Year}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="px-5 py-3 m-4 text-white rounded shadow bg-emerald-600"
          onClick={() => setshowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
