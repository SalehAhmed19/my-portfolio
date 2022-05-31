import { Route, Routes } from "react-router-dom";
import "./App.css";
import Comfortable from "./Pages/Home/About/Comfortable";
import Expert from "./Pages/Home/About/Expert";
import Familier from "./Pages/Home/About/Familier";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Expert />}></Route>
          <Route path="/comfortable" element={<Comfortable />}></Route>
          {/* <Route path="/familier" element={<Familier />}></Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
