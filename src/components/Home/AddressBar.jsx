import { SlLocationPin ,SlArrowDown  } from "react-icons/sl";
const AddressBar = () => {
    return (<div className="w-full flex text-[#934c0e]  items-center p-0.5 gap-2">
        <SlLocationPin  />
        <div className="">
            <span className="text-[13px] leading-loose ellipsis ">انتخاب آدرس</span>
        </div>
        <div className="h-full">
        <SlArrowDown className="text-[8px] align-bottom  "/>
        </div>
    </div>);
}

export default AddressBar;