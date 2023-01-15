import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Doctors from "./pages/doctors/Doctors";
import Services from "./pages/services/Services";
import Facilities from "./pages/facilities/Facilities";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/doctors" element={<Doctors />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/facilities" element={<Facilities />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/signin" element={<Signin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
