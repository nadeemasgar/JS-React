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
import ComponentA from "./components/example8/ComponentA";
import { UserProvider } from "./components/example8/useContext";

function App() {
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
      <UserProvider value="Tokopedia">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
