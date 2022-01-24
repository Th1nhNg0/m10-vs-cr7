import React, { useState } from "react";

export default function RadarChart() {
  const [League, setLeague] = useState("c1");
  const [type, settype] = useState("def");
  return (
    <div className="py-5">
      <iframe
        className="w-full h-[500px]"
        title="sotranthidau"
        src={`graph/radar/${type}${League}.html`}
      ></iframe>
      <div className="flex items-center justify-center w-full gap-5">
        <div>
          <select
            className="block p-3 mx-auto border-2 border-yellow-400 rounded "
            onChange={(e) => setLeague(e.target.value)}
          >
            <option value="c1">Champions League</option>
            <option value="dc">Domestic League</option>
          </select>
        </div>
        <div>
          <select
            className="block p-3 mx-auto border-2 border-yellow-400 rounded "
            onChange={(e) => settype(e.target.value)}
          >
            <option value="def">Defensive</option>
            <option value="off">Offensive </option>
            <option value="pass">Passing </option>
          </select>
        </div>
      </div>
    </div>
  );
}
