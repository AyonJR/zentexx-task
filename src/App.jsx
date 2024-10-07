import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="bg-black">
      <div className="">
      <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    

    </div>
  );
}

export default App;
