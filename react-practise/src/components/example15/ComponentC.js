import React from "react";
import { UserContext, ChannelContext } from "./Context";

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(name) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Component C {name} {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
