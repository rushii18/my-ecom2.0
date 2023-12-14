import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import About from "./Componants/About";

import Nav from "./Componants/Nav";
import Cart from "./Componants/Cart";
import Sing from "./Componants/Sing";
import Contact from "./Componants/Contact";
import Men from "./Men/Men";
import Shirt from "./Men/Shirt";
import Pantsmen from "./Men/Pantsmen";
import Women from "./Women/Women";
import Dress from "./Women/Dress";
import PantsWomen from "./Women/PantsWomen";
import MainCrosel from "./Componants/MainCrosel";
import HomeCrosel from "./Pages/HomeCrosel";
import HomeCroselCard from "./Componants/HomeCroselCard";
import Footer from "./Componants/Footer";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        {/* <Route path="/" element={<MainCrosel />} /> */}
        <Route path="/" element={<HomeCrosel />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sing" element={<Sing />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Shirt" element={<Shirt />} />
        <Route path="/Pantsmen" element={<Pantsmen />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Dress" element={<Dress />} />
        <Route path="/PantsWomen" element={<PantsWomen />} />
        <Route path="*" element={<HomeCroselCard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
