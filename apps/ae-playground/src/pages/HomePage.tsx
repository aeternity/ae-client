import React from "react";

export const HomePage = () => {
  return (
    <div>
      <div className="">
        <button className="btn btn-primary">test button</button>
      </div>
      {[...Array(100).keys()].map((i: number) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
};
