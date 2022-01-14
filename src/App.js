import { useEffect, useState } from "react";

const achivements_awards = require("./achivements_awards.json");
const achivements_title = require("./achivements_title.json");

export default function App() {
  return (
    <div className="py-5 awsome_bg">
      <div className="max-w-screen-xl p-5 mx-auto bg-white border-2">
        <div className="max-w-screen-lg mx-auto">
          <Image />
          <Info />
          <Graph />
          <Achievements />
        </div>
      </div>
    </div>
  );
}

function Achievements() {
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
function Graph() {
  return (
    <div>
      <iframe
        className="w-full h-[400px]"
        title="Goals compare"
        src="graph/goals.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/goals_type.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/penalty_pie.html"
      ></iframe>
    </div>
  );
}

function Info() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="p-5 space-y-2">
        <p className="font-serif text-4xl font-bold text-center">
          Lionel Messi
        </p>
        <table>
          <tbody>
            <tr>
              <td>Full name: </td>
              <td className="py-2 pl-5 font-semibold">
                Lionel Andrés Messi Cuccitini
              </td>
            </tr>
            <tr>
              <td>Current Team:</td>
              <td className="py-1 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/583.png" alt="" />{" "}
                Paris Saint-Germain
              </td>
            </tr>
            <tr>
              <td>Number: </td>
              <td className="py-2 pl-5 font-semibold">30</td>
            </tr>
            <tr>
              <td>Position: </td>
              <td className="py-2 pl-5 font-semibold">attack - Right Winger</td>
            </tr>
            <tr>
              <td>Nationality: </td>
              <td className="py-2 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/9.png" alt="" />{" "}
                Argentina
              </td>
            </tr>
            <tr>
              <td>Date of Birth: </td>
              <td className="py-2 pl-5 font-semibold">
                24 June 1987 (age {new Date().getFullYear() - 1987 - 1} years)
              </td>
            </tr>
            <tr>
              <td>Height: </td>
              <td className="py-2 pl-5 font-semibold">170 cm</td>
            </tr>
            <tr>
              <td>Foot: </td>
              <td className="py-2 pl-5 font-semibold">left</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-5 space-y-2 ">
        <p className="font-serif text-4xl font-bold text-center">
          Cristiano Ronaldo
        </p>
        <table>
          <tbody>
            <tr>
              <td>Full name: </td>
              <td className="py-2 pl-5 font-semibold">
                Cristiano Ronaldo dos Santos Aveiro
              </td>
            </tr>
            <tr>
              <td>Current Team:</td>
              <td className="py-1 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/985.png" alt="" />{" "}
                Manchester United
              </td>
            </tr>
            <tr>
              <td>Number: </td>
              <td className="py-2 pl-5 font-semibold">7</td>
            </tr>
            <tr>
              <td>Position: </td>
              <td className="py-2 pl-5 font-semibold">
                attack - Centre-Forward
              </td>
            </tr>
            <tr>
              <td>Nationality: </td>
              <td className="py-2 pl-5 font-semibold">
                <img className="inline w-5 pb-1" src="images/136.png" alt="" />{" "}
                Portugal
              </td>
            </tr>
            <tr>
              <td>Date of Birth: </td>
              <td className="py-2 pl-5 font-semibold">
                5 Feb 1985 (age {new Date().getFullYear() - 1985 - 1} years)
              </td>
            </tr>
            <tr>
              <td>Height: </td>
              <td className="py-2 pl-5 font-semibold">187 cm</td>
            </tr>
            <tr>
              <td>Foot: </td>
              <td className="py-2 pl-5 font-semibold">right</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative ">
      <img
        className="w-full mx-auto select-none"
        src="images/wpap_messi_ronaldo_by_wedhahai_d7ba2ca-fullview.jpg"
        alt=""
      />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
        <img
          className="w-40 animate-bounce "
          src="images/pngwing.com.png"
          alt=""
        />
      </div>
    </div>
  );
}
