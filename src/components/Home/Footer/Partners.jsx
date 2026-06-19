import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Partners = () => {
    const [isOpen, setIsOpen] = useState(false);
    const images = Array.from({ length: 15 }, (_, i) => `/public/assets/images/partners/img-${i + 1}.svg`);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center text-[13px] font-bold justify-between gap-1 px-4 bg-white rounded hover:bg-gray-50 transition-colors duration-200"
            >
                شرکای تجاری
                <MdExpandMore
                    size={20}
                    className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`w-full bg-white rounded overflow-hidden transition-all duration-500 ease-in-out mt-1 ${isOpen ? 'opacity-100 max-h-150' : 'opacity-0 max-h-0'
                    }`}
            >
                <div className="w-full grid grid-cols-3">
                    {images.map((src, index) => (
                        <div key={index} className="flex items-center justify-center p-4 border border-stone-100">
                            <img src={src} alt={`partner-${index + 1}`} className="w-full h-auto px-4 py-3 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;