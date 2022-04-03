import UserContainer from "./components/UserContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
