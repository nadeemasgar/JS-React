import React from "react";
import Child6 from "./Child6";
import ErrorBoundary from "./ErrorBoundary";

function Parent6() {
  return (
    <>
      <ErrorBoundary>
        <Child6 product="Grapes" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child6 product="Orange" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Child6 product="Mango" />
      </ErrorBoundary>
    </>
  );
}

export default Parent6;
