import React from "react";

// export const HOCRed = (props) => {
//   const css = {
//     backgroundColor: "red",
//     width: "auto",
//   };

//   return <props.cmp style={css} increment={10} />;
// };

// export const HOCGreen = (props) => {
//   const css = {
//     backgroundColor: "green",
//     width: "auto",
//   };

//   return <props.cmp style={css} increment={5} />;
// };

const HOC = (Counter, color) => {
  const css = {
    backgroundColor: { color },
    width: "auto",
  };

  return <Counter style={css} />;
};

export default HOC;
