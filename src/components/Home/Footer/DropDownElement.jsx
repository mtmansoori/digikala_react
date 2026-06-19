import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const DropDownElement = ({ items, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center text-[13px] font-bold justify-between gap-1 px-4  bg-white rounded hover:bg-gray-50 transition-colors duration-200"
            >
                {title}
                <MdExpandMore
                    size={20}
                    className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`w-full bg-white rounded overflow-hidden transition-all duration-500 ease-in-out mt-1 ${isOpen ? 'opacity-100 max-h-150' : 'opacity-0 max-h-0'
                    }`}
            >
                {items.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-[11px] text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div >
    );
};

export default DropDownElement;