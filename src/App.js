import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu";
import Toggle from "./components/toggle";
import BeyondUnknown from "./pages/beyondUnknown";
import Home from "./pages/home";
import Info from "./pages/information";
import Products from "./pages/products";
import Projects from "./pages/projects";

function App() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    };

    return (
        <div className="App">
            <Toggle handleNavToggle={handleNavToggle} />
            <BrowserRouter>
                {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/info"
                        element={
                            <>
                                <Info />
                            </>
                        }
                    />
                    <Route
                        path="/products"
                        element={
                            <>
                                <Products />
                            </>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <>
                                <Projects />
                            </>
                        }
                    />
                    <Route path="/beyond-unknown" element={
                        <>
                            <BeyondUnknown />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
