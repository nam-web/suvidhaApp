import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import HelpGuide from "./pages/HelpGuide";
import Contact from "./pages/Contact";
import Hire from "./pages/Hire";
import Dropdown from "./components/navbar/Dropdown";
import { navItems } from "./components/navbar/NavItems";
import Hero from "./components/hero/Hero";


import "./app.scss";
// import "./App";


function App() {
  return (
    // <div className="App">
     <BrowserRouter>
    {/* <Navbar /> */}
   
    <Routes>
    
        <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" exact component={About} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/industries" element={<Industries />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/help-guide" element={<HelpGuide />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/hire-research-assistant" element={<Hire />}></Route>
          {/* <Route path="/design" component={Design}></Route> */}
          {/* <Route path="/consulting" component={Consulting}></Route> */}

      {/* <Topbar /> */}
      {/* <div className="sections">
        <Hero />
        <Assistance />
        <Mentors />
        <Guarantees />
        <Work />
        <Insights />
        <Testimony />
        <Footer />
      </div> */}
   
    </Routes>
      </BrowserRouter>
   
  );
}

export default App;
