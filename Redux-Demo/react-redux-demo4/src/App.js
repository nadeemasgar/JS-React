import { Provider } from "react-redux";
import store from "./Redux/store";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeContainer2 from "./components/CakeContainer2";
import IceCreamContainer2 from "./components/IceCreamContainer2";
import ItemContainer from "./components/ItemContainer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CakeContainer2 />
        <IceCreamContainer2 />
      </div>
    </Provider>
  );
}

export default App;
