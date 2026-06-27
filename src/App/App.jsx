import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Categories from "../pages/Categories/Categories";
import Cart from "../pages/Cart/Cart";
import Magnet from "../pages/Magnet/Magnet";
import Profile from "../pages/Profile/Profile";
import { Provider } from "react-redux";
import store from "../redux/store";
import AdminDashboard from "../pages/Admin/Home/IncredibleAdmin/AdminDashboard";

const App = () => {

    return (
        <Provider store={store}>

            <div dir="rtl">
                <BrowserRouter basename="/digikala_react/">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/magnet" element={<Magnet />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                    </Routes>

                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;