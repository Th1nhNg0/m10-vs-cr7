import React from "react";

export default function Graph() {
  return (
    <div className="space-y-10 divide-y-2 divide-amber-500 divide-dashed">
      <div>
        <iframe
          className="w-full h-[400px]"
          title="Goals compare"
          src="graph/goals.html"
        ></iframe>
        <div className="flex gap-10">
          <div className="flex-1 p-5">
            <img
              src="images/gif/messi_goal.gif"
              className="object-cover w-full h-full aspect-video"
              alt=""
            />
          </div>
          <div className="flex-1 p-5">
            <img
              src="images/gif/ronaldo_goal.gif"
              className="object-cover w-full h-full aspect-video"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-full h-[450px]"
          title="Goals type compare"
          src="graph/goals_type.html"
        ></iframe>
        <div className="flex gap-10">
          <div className="flex-1 px-20">
            <img
              src="images/gif/messi_cele.gif"
              className="object-cover w-full h-full aspect-square"
              alt=""
            />
          </div>
          <div className="flex-1 px-20">
            <img
              src="images/gif/ronaldo_cele.gif"
              className="object-cover w-full h-full aspect-square"
              alt=""
            />
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/penalty_pie.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/sodanhhieucapCLB.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/sotranthidau.html"
      ></iframe>

      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/thephat.html"
      ></iframe>
      <iframe
        className="w-full h-[450px]"
        title="Goals type compare"
        src="graph/theodoi.html"
      ></iframe>
    </div>
  );
}