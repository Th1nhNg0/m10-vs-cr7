import React from "react";
import { useEffect, useState } from "react";
const achivements_awards = require("./achivements_awards.json");
const achivements_title = require("./achivements_title.json");

export default function Achievements() {
  const [type, settype] = useState("Title");
  const [data, setdata] = useState(achivements_awards);
  const [awardsName, setawardsName] = useState([]);
  useEffect(() => {
    const awards = new Set();
    if (type === "Award") {
      for (let aw of achivements_awards) {
        awards.add(aw.Award);
      }
      setdata(achivements_awards);
    }
    if (type === "Title") {
      for (let aw of achivements_title) {
        awards.add(aw.Title);
      }
      setdata(achivements_title);
    }
    setawardsName(Array.from(awards));
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
      <div className="space-y-5">
        {awardsName.map((award) => (
          <div key={award}>
            <p className="font-semibold text-center">{award}</p>
            <div className="flex">
              <div className="flex-1 p-3 bg-gradient-to-l from-blue-500 to-transparent">
                <div className="flex flex-wrap justify-end gap-5 ">
                  {data
                    .filter((aw) => aw[type] === award && aw.Player === "Messi")
                    .sort((a, b) => b.Year - a.Year)
                    .map((aw, i) => (
                      <div className="font-bold" key={i}>
                        {aw.Year}
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex-1 p-3 bg-gradient-to-r from-red-500 to-transparent">
                <div className="flex flex-wrap gap-5">
                  {data
                    .filter(
                      (aw) => aw[type] === award && aw.Player === "Ronaldo"
                    )
                    .map((aw, i) => (
                      <div className="font-bold" key={i}>
                        {aw.Year}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
