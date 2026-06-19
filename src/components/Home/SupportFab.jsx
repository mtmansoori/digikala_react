import { useState, useEffect } from "react";
import { MdSupportAgent } from "react-icons/md";

const SupportFab = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-6 left-4 z-50 mb-12 flex items-center bg-[linear-gradient(150deg,#7F53EF_14.63%,#2586FF)] text-white rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'px-4 py-3' : 'p-3'
                }`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <MdSupportAgent size={26} className="shrink-0" />
            <span
                className={`text-[12px] font-semibold whitespace-nowrap transition-all duration-500 ease-in-out  ${isExpanded ? 'max-w-25 opacity-100' : 'max-w-0 opacity-0'
                    }`}
            >
                پشتیبانی
            </span>
        </div>
    );
};

export default SupportFab;