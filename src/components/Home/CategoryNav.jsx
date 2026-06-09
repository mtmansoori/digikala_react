import { useEffect, useState } from "react";
import SearchBar from "../../components/Home/SearchBar";
import { BiBell } from "react-icons/bi";

const CategoryNav = () => {

    const themeClasses = {
        services: "bg-gray-900 text-white border-gray-300",
        digikala: "bg-red-600 text-white border-red-500",
        express: "bg-orange-500 text-white border-orange-500",
        gold: "bg-cyan-800 text-white border-cyan-800",
        style: "bg-black text-white border-blavk",
        supermarket: "bg-green-600 text-white border-green-600",
        credit: "bg-blue-600 text-white border-blue-600",
        pharmacy: "bg-cyan-700 text-white border-cyan-700",
        default: "bg-white text-gray-600 border-gray-200",
    };
    const [services, setServices] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 60);
    }

    const fetchServices = async () => {
        try {
            const data = await fetch("/db.json");
            const res = await data.json();
            setServices(res.services);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleActiveService = (selectedIndex) => {
        const updatedServices = services.map((item, index) => ({
            ...item,
            active: index === selectedIndex,
        }));

        setServices(updatedServices);
    };

    useEffect(() => {
        fetchServices();
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (<div className="sticky top-0 w-full p-1 overflow-scroll  z-99 bg-neutral-100 scrollbar-none [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-2  py-2 whitespace-nowrap">
            {services.map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleActiveService(index)}
                    className={`flex flex-col border rounded-lg items-center justify-center min-w-18 gap-1 transition-all duration-300 ${isScrolled ? "h-8 align-middle px-3 py-1" : "h-16 min-h-17 p-2"
                        } ${item.active ? themeClasses[item.theme] : themeClasses.default
                        }`}
                >
                    <img
                        src={item.Simg}
                        alt={item.Stitle}
                        className={`w-8 object-contain transition-all duration-300 ${isScrolled ? "h-0 opacity-0 scale-75" : "h-8 opacity-100"
                            }`}
                    />

                    <span className="text-xs font-medium">{item.Stitle}</span>


                </div>
            ))}
        </div>
        <div className="w-full flex items-center gap-2 py-2">
            <SearchBar />
            <div className="border rounded-full bg-white border-stone-300">
                <BiBell className="text-3xl text-neutral-600 p-2 w-full h-full" />
            </div>
        </div>
    </div >
    );
}

export default CategoryNav;