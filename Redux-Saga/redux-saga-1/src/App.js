import UsersContainer from "./components/UsersContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
