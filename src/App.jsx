import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import "./index.css";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RoutesApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
