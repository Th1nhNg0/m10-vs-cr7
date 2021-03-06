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
                C???u th??? tr??? nh???t gi??nh Qu??? b??ng V??ng khi m???i 23 tu???i v??o n??m
                2009
              </li>
              <li>
                Gi??nh ???????c 7 Qu??? b??ng V??ng, trong ???? 4 l???n li??n ti???p v??o c??c n??m
                2009, 2010, 2011 v?? 2012
              </li>
              <li>Ghi nhi???u b??n th???ng nh???t cho m???t C??u l???c b???</li>
              <li>
                Gi??nh Qu??? b??ng V??ng FIFA, C???u th??? xu???t s???c nh???t n??m c???a FIFA,
                Chi???c gi??y V??ng ch??u u v?? Qu??? b??ng V??ng ch??u u trong c??ng m???t
                n??m d????ng l???ch
              </li>
            </ul>
          </div>
          <div className="flex-1 p-5">
            <h3 className="mb-5 text-2xl font-semibold text-center">Ronaldo</h3>
            <ul className="space-y-2 list-disc">
              <li>C???u th??? ghi b??n nhi???u nh???t cho 1 ?????i tuy???n qu???c gia </li>
              <li>
                V?? ?????ch Champions league nhi???u nh???t th??? gi???i 5 l???n(T??? n??m 1992
                ?????n nay)
              </li>
              <li>V?? ?????ch Champions league 3 l???n li??n ti???p</li>
              <li>C???u th??? ghi nhi???u b??n nh???t l???ch s??? Champions league</li>
              <li>C???u th??? ki???n t???o nhi???u nh???t l???ch s??? Champions league</li>
              <li>
                C???u th??? ghi nhi???u b??n nh???t 1 m??a t???i Champions league (17 b??n)
              </li>
              <li>Ghi b??n 11 tr???n li??n ti???p t???i Champions league</li>
              <li>Ghi b??n t???i 3 tr???n chung k???t li??n ti???p ??? Champions league</li>
              <li>Ghi b??n nhi???u nh???t t???i Euro </li>
              <li>C???u th??? l???n tu???i nh???t l???p hattrick t???i WC</li>
              <li>
                Ghi b??n nhi???u nh?? th??? gi???i (803 b??n, ng?????i ghi nhi???u nh???t l?? 805
                b??n)
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
