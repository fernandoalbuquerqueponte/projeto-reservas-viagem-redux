import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
