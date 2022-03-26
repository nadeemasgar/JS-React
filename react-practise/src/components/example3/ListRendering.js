import React from "react";

const ListRendering = () => {
  const names = ["Nadeem", "Rahul", "Abhishek", "Amit"];

  return (
    <>
      {names.map((name) => {
        return <div key={Math.random()}>{name}</div>;
      })}
    </>
  );
};

export default ListRendering;
