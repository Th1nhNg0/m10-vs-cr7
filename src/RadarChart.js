import React, { useState } from "react";

export default function RadarChart() {
  const [type, settype] = useState("c1");
  return (
    <div className="py-5">
      <div className="w-full">
        <select
          className="block p-3 mx-auto border-2 border-yellow-400 rounded "
          onChange={(e) => settype(e.target.value)}
        >
          <option value="c1">Champions League</option>
          <option value="dc">Domestic League</option>
        </select>
      </div>
      <iframe
        className="w-full h-[500px]"
        title="sotranthidau"
        src={`graph/radar/def${type}.html`}
      ></iframe>
      <iframe
        className="w-full h-[500px]"
        title="sotranthidau"
        src={`graph/radar/off${type}.html`}
      ></iframe>
      <iframe
        className="w-full h-[500px]"
        title="sotranthidau"
        src={`graph/radar/pass${type}.html`}
      ></iframe>
    </div>
  );
}
