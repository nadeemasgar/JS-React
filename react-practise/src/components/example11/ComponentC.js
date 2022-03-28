import React from "react";
import { UserConsumer } from "./useContext";

const ComponentC = () => {
  return (
    <UserConsumer>
      {({ globalPosts, globalError }) => {
        return (
          <>
            <div>ComponentC</div>
            {!globalError && (
              <div>******************** List of Posts ********************</div>
            )}
            {globalError && (
              <div>******************** Error Occured ********************</div>
            )}
            {globalPosts.map((post) => {
              return <div key={post.id}>{post.title}</div>;
            })}
          </>
        );
      }}
    </UserConsumer>
  );
};

export default ComponentC;
