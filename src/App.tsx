import { HashRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";

import UnderConst from "./Components/UnderConst";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <HashRouter>
        {/* <Navbar /> */}
        {/* <div className="main-container"></div> */}
        <Home />
      </HashRouter>
    </>
  );
}

export default App;
