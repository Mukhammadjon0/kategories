import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { StateContext } from "./context";
import { db } from "./firebase";
import Home from "./pages/home/Home";
import Register from "./pages/home/Register";

function App() {
  return (
    <StateContext.Provider value={{ db }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
