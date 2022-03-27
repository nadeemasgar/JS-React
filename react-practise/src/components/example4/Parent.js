import React, { useState, useEffect } from "react";
import Memo from "./Memo";

function ParentMemo() {
  const [name, setName] = useState("Nadeem");

  useEffect(() => {
    setInterval(() => {
      setName("Abhishek");
    }, 1000);
  });

  console.log("Parent Rendered");
  return <Memo name="Nadeem" />;
}

export default ParentMemo;
