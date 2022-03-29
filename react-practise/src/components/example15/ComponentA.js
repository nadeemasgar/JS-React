import React from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();

function ComponentA() {
  return (
    <UserContext.Provider value={"Nadeem"}>
      <ComponentB />
    </UserContext.Provider>
  );
}

export default ComponentA;
