import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Cart from "../pages/Cart/Cart";
import Magnet from "../pages/Magnet/Magnet";
import Profile from "../pages/Profile/Profile";

const App = () => {
    
    return (<div dir="rtl">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/magnet" element={<Magnet />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            
        </BrowserRouter>
    </div>);
}

export default App;