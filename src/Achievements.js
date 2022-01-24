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
        <button
          onClick={() => settype("Record")}
          className={`px-5 py-3 text-white ${
            type === "Record" ? "bg-yellow-500" : "bg-gray-500"
          } rounded`}
        >
          Record
        </button>
      </div>
      {type !== "Record" ? (
        <div>
          <div className="flex justify-evenly">
            <h3 className="mb-5 text-2xl font-semibold text-center">Messi</h3>
            <h3 className="mb-5 text-2xl font-semibold text-center">Ronaldo</h3>
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
                        .filter(
                          (aw) => aw[type] === award && aw.Player === "Messi"
                        )
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
      ) : (
        <div className="flex gap-10">
          <div className="flex-1 p-5">
            <h3 className="mb-5 text-2xl font-semibold text-center">Messi</h3>
            <ul className="space-y-2 list-disc">
              <li>
                Cầu thủ trẻ nhất giành Quả bóng Vàng khi mới 23 tuổi vào năm
                2009
              </li>
              <li>
                Giành được 6 Quả bóng Vàng, trong đó 4 lần liên tiếp vào các năm
                2009, 2010, 2011 và 2012
              </li>
              <li>Ghi nhiều bàn thắng nhất cho một Câu lạc bộ</li>
              <li>
                Giành Quả bóng Vàng FIFA, Cầu thủ xuất sắc nhất năm của FIFA,
                Chiếc giày Vàng châu u và Quả bóng Vàng châu u trong cùng một
                năm dương lịch
              </li>
            </ul>
          </div>
          <div className="flex-1 p-5">
            <h3 className="mb-5 text-2xl font-semibold text-center">Ronaldo</h3>
            <ul className="space-y-2 list-disc">
              <li>Cầu thủ ghi bàn nhiều nhất cho 1 đội tuyển quốc gia </li>
              <li>
                Vô địch Champions league nhiều nhất thế giới 5 lần(Từ năm 1992
                đến nay)
              </li>
              <li>Vô địch Champions league 3 lần liên tiếp</li>
              <li>Cầu thủ ghi nhiều bàn nhất lịch sử Champions league</li>
              <li>Cầu thủ kiến tạo nhiều nhất lịch sử Champions league</li>
              <li>
                Cầu thủ ghi nhiều bàn nhất 1 mùa tại Champions league (17 bàn)
              </li>
              <li>Ghi bàn 11 trận liên tiếp tại Champions league</li>
              <li>Ghi bàn tại 3 trận chung kết liên tiếp ở Champions league</li>
              <li>Ghi bàn nhiều nhất tại Euro </li>
              <li>Cầu thủ lớn tuổi nhất lập hattrick tại WC</li>
              <li>
                Ghi bàn nhiều nhì thế giới (803 bàn, người ghi nhiều nhất là 805
                bàn)
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
