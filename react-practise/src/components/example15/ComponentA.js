import React from "react";
import ComponentB from "./ComponentB";
import { UserContext, ChannelContext } from "./Context";

function ComponentA() {
  return (
    <UserContext.Provider value={"Nadeem"}>
      <ChannelContext.Provider value={"Codevolution"}>
        <ComponentB />
      </ChannelContext.Provider>
    </UserContext.Provider>
  );
}

export default ComponentA;
