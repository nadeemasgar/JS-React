import logo from "./logo.svg";
import "./App.css";
// import Parent from "./components/example1/Parent";
// import Login from "./components/example2/login/Login"
// import ListRendering from "./components/example3/ListRendering";
// import ParentMemo from "./components/example4/Parent";
// import Parent5 from "./components/example5/Parent5";
// import Parent6 from "./components/example6/Parent6";
/* import { HOCRed } from "./components/example7/HOC";
import { HOCGreen } from "./components/example7/HOC";
import Counter from "./components/example7/Counter"; */
/* import ComponentA from "./components/example8/ComponentA";
import { UserProvider } from "./components/example8/useContext"; */
/* import ComponentA from "./components/example9/ComponentA";
import { UserProvider } from "./components/example9/useContext"; */
/* import PostListGetRequest from "./components/example10/PostListGetRequest";
import PostFormPostRequest from "./components/example10/PostFormPostRequest";
import PostFormPostRequest2 from "./components/example10/PostFormPostRequest2";
import PostFormPostRequest3 from "./components/example10/PostFormPostRequest3"; */
// import ComponentA from "./components/example11/ComponentA";
// import HookMouse from "./components/example12/HookMouse";
// import MouseContainer from "./components/example12/MouseContainer";
// import IntervalHookCounter from "./components/example13/IntervalHookCounter";
// import IntervalHookCounter2 from "./components/example13/IntervalHookCounter2";
import IntervalHookCounter3 from "./components/example13/IntervalHookCounter3";

function App() {
  const obj = {
    name: "Nadeem",
    location: "Patna",
  };
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <Login /> */}
      {/* <ListRendering /> */}
      {/* <ParentMemo /> */}
      {/* <Parent5 /> */}
      {/* <Parent6 /> */}
      {/*  <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} /> */}
      {/* <UserProvider value={obj}>
        <ComponentA />
      </UserProvider> */}
      {/* <PostListGetRequest /> */}
      {/* <PostFormPostRequest /> */}
      {/* <PostFormPostRequest2 /> */}
      {/* {<PostFormPostRequest3 />} */}
      {/* <ComponentA /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalHookCounter2 /> */}
      <IntervalHookCounter3 />
    </div>
  );
}

export default App;
