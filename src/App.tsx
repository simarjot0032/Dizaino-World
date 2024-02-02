import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
