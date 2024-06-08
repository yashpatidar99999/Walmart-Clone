import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-[#e6f1fc]">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Routes>
        <Route path="/" element={ <><Hero/><Deals/></> } />
        <Route path="register" element={ <Register/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
