import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./components/Header";
import Err404 from "./components/404";
import Favoritos from "./pages/Favoritos";

const RoutesApp = () => {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favoritos/>}/>
                <Route path="/filme/:id" element={<Filme/>}/>
                
                <Route path="*" element={<Err404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp