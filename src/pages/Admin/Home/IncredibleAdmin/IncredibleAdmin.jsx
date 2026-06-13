import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    fetchIncredbleOffers,
    addIncredibleOffers,
} from '../../../../redux/IncredibleOffers/Action';

const IncredibleAdmin = () => {
    const dispatch = useDispatch();
    
    

    const { incredibleOffers , loading, error } = useSelector((state) => state.useIncredibleOffers)

    const [formData, setFormData] = useState({
        border: false,
        img: '',
        title: '',
        discount: '',
        newPrice: '',
        oldPrice: '',
    });

    useEffect(() => {
        dispatch(fetchIncredbleOffers());
    }, [dispatch]);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.img.trim() ||
            !formData.newPrice || !formData.oldPrice) {
            alert('تمام فیلدها الزامی هستند');
            return;
        }

        dispatch(addIncredibleOffers(formData));
        setFormData({
            border: false,
            img: '',
            title: '',
            discount: '',
            newPrice: '',
            oldPrice: '',
        });
        alert('پیشنهاد اضافه شد ✅');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">افزودن پیشنهاد شگفت‌انگیز</h1>

            {/* فرم اضافه کردن */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg space-y-4">

                <div>
                    <label className="block text-sm font-medium mb-2">عنوان محصول</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="مثال: فشارسنج بازویی دیجیتال فوکسی"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">آدرس تصویر</label>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        placeholder="/assets/images/AmazingOffers/img-1.webp"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">قیمت جدید</label>
                        <input
                            type="text"
                            name="newPrice"
                            value={formData.newPrice}
                            onChange={handleChange}
                            placeholder="۳,۵۳۹,۰۰۰"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">قیمت قدیم</label>
                        <input
                            type="text"
                            name="oldPrice"
                            value={formData.oldPrice}
                            onChange={handleChange}
                            placeholder="۶,۳۹۰,۰۰۰"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">درصد تخفیف</label>
                    <input
                        type="text"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        placeholder="۴۵%"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="border"
                        checked={formData.border}
                        onChange={handleChange}
                        className="w-5 h-5 cursor-pointer"
                    />
                    <label className="text-sm font-medium cursor-pointer">حاشیه (Border) فعال باشد؟</label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 font-medium transition"
                >
                    ➕ افزودن پیشنهاد
                </button>
            </form>

            {/* نمایش پیشنهادات */}
            <div>
                <h2 className="text-xl font-bold mb-4">لیست پیشنهادات شگفت‌انگیز</h2>

                {loading ? (
                    <p className="text-center text-gray-500">درحال بارگزاری...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {incredibleOffers.map((offer, idx) => (
                            <div
                                key={idx}
                                className={`bg-white rounded-lg p-4 shadow hover:shadow-lg transition ${offer.border ? 'border-2 border-red-500' : ''
                                    }`}
                            >
                                <img
                                    src={offer.img}
                                    alt={offer.title}
                                    className="w-full h-40 object-contain mb-3"
                                />
                                <h3 className="font-medium text-sm line-clamp-2 mb-2">{offer.title}</h3>

                                <div className="space-y-1">
                                    <p className="text-red-600 font-bold text-lg">{offer.newPrice}</p>
                                    <p className="text-gray-500 line-through text-sm">{offer.oldPrice}</p>
                                    {offer.discount && (
                                        <p className="text-green-600 font-bold">{offer.discount}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IncredibleAdmin;