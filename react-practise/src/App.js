import logo from "./logo.svg";
import "./App.css";
// import Parent from "./components/example1/Parent";
// import Login from "./components/example2/login/Login"
// import ListRendering from "./components/example3/ListRendering";
// import ParentMemo from "./components/example4/Parent";
// import Parent5 from "./components/example5/Parent5";
// import Parent6 from "./components/example6/Parent6";
import HOC from "./components/example7/HOC";
import Counter from "./components/example7/Counter";

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <Login /> */}
      {/* <ListRendering /> */}
      {/* <ParentMemo /> */}
      {/* <Parent5 /> */}
      {/* <Parent6 /> */}
      <HOC cmp={Counter} color="red" />
      <HOC cmp={Counter} color="green" />
    </div>
  );
}

export default App;
