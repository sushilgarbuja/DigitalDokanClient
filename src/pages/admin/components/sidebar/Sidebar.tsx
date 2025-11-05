import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { name: "Stats", path: "/admin", icon: "📊" },
        { name: "Products", path: "/admin/products", icon: "🛍️" },
        { name: "Users", path: "/admin/users", icon: "👥" },
        { name: "Orders", path: "/admin/orders", icon: "📦" },
        { name: "Categories", path: "/admin/categories", icon: "🗂️" },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
                <span className="text-white font-extrabold text-lg tracking-wider uppercase">
                    Digital Dashboard
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out 
                ${isActive
                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                                }`}
                        >
                            <span className="text-lg mr-3">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 text-center border-t border-gray-700 text-sm text-gray-400">
                © 2025 Digital Admin
            </div>
        </aside>
    );
}

export default Sidebar;
