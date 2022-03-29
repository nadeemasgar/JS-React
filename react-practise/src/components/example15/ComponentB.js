import React, { useContext } from "react";

import { UserContext, ChannelContext } from "./Context";

function ComponentB() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      ComponentB {user} - {channel}
    </div>
  );
}

export default ComponentB;
