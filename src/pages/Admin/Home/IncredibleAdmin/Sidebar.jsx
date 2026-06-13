import { Link } from 'react-router-dom';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const Sidebar = ({ activeSection, setActiveSection }) => {
    const menuItems = [
      { id: 'incredible', label: '🔥 پیشنهادات شگفت‌انگیز' },
    ];

    return (
      <div className="w-64 bg-gray-800 text-white p-6 h-screen overflow-auto flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">⚙️ پنل ادمین</h1>
          <p className="text-xs text-gray-400 mt-1">مدیریت محتوا</p>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full text-right p-3 rounded-lg transition text-sm font-medium ${activeSection === item.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-gray-700 pt-4">
          <a
            href="/"
            className="w-full text-right block p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition text-sm font-medium text-center"
          >
            ← بازگشت به سایت
          </a>
        </div>
      </div >
    );
  };
}

  export default Sidebar;