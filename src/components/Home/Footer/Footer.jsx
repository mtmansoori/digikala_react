import { AiOutlineUp } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import DropDownElement from "./DropDownElement";
import Partners from "./Partners";
const Footer = () => {

    const menuItems = [
        "اتاق خبر دیجی کالا",
        "فروش در دیجی کالا",
        "فرصت های شغلی در دیجی کالا",
        "گزارش تخلف در دیجی کالا",
        "تماس با دیجی کالا",
        "درباره دیجی کالا"
    ];
    const items2 = [
        "پاسخ به پرسش‌های متداول",
        "رویه‌های بازگرداندن کالا",
        "شرایط استفاده",
        "حریم خصوصی",
        "گزارش باگ"
    ]

    const items3 = [
        "نحوه ثبت سفارش",
        "رویه ارسال سفارش",
        "شیوه پرداخت"
    ]

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <footer className="w-full flex bg-white flex-col items-center gap-4 py-3 px-4">
            <button
                className="btn text-[11px] h-fit py-2 bg-stone-200 rounded-full"
                onClick={scrollToTop}
            >
                رفتن به بالا <AiOutlineUp />
            </button>

            <div className="w-full flex justify-between items-center gap-4">
                <div className="flex gap-2 items-center">
                    <MdSupportAgent size={35} />
                    <div className="flex flex-col gap-1.5">
                        <span className="text-[12px] text-neutral-900 font-semibold">تماس با پشتیبانی</span>
                        <span className="text-[12px] text-neutral-500">۷ روز هفته، ۲۴ ساعت</span>
                    </div>
                </div>

                <button className="btn text-[11px] bg-stone-200 h-fit py-2 rounded-full">تماس</button>
            </div>
            <hr className="w-full text-stone-300" />
            <div className="w-full flex justify-between items-center gap-4">
                <div className="flex gap-2 items-center">
                    <img className="w-9 h-9 rounded-full" src="./assets/images/brands/logo-footer.webp" alt="" />
                    <div className="flex flex-col gap-1.5">
                        <span className="text-[12px] text-neutral-900 font-semibold">اپلیکیشن دیجی‌کالا</span>
                        <span className="text-[12px] text-neutral-500">تجربه خرید بهتر در</span>
                    </div>
                </div>

                <button className="btn text-[11px] bg-stone-200 h-fit py-2 rounded-full">دانلود</button>
            </div>
            <hr className="w-full text-stone-300" />
            <DropDownElement items={menuItems} title="با دیجی کالا" />
            <hr className="w-full text-stone-300" />
            <DropDownElement items={items2} title="خدمات مشتریان" />
            <hr className="w-full text-stone-300" />
            <DropDownElement items={items3} title="راهنمای خرید از دیجی‌کالا" />
            <hr className="w-full text-stone-300" />
            <Partners/>
        </footer>
    );
}

export default Footer;