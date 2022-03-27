import React from "react";

const ListRendering = () => {
  const names = ["Nadeem", "Rahul", "Abhishek", "Amit", "Vaibhav"];

  return (
    <>
      {names.map((name, index) => {
        return <div key={index}>{name}</div>;
      })}
    </>
  );
};

export default ListRendering;

