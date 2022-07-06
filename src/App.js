import { Route, Routes } from "react-router-dom";
import "./App.css";
import Comfortable from "./Pages/Home/About/Comfortable";
import Expert from "./Pages/Home/About/Expert";
import Home from "./Pages/Home/Home";
import P from "./Pages/Home/Projects/P";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Expert />}></Route>
          <Route path="/comfortable" element={<Comfortable />}></Route>
        </Route>
        <Route path="/projects/:id" element={<P />}></Route>
      </Routes>
    </div>
  );
}

export default App;
