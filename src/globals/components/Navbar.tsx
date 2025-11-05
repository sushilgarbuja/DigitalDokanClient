import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCartItems } from "../../store/cartSlice";
import { ShoppingCart, Menu, X, User, LogIn, LogOut } from "lucide-react";

function Navbar() {
    const reduxToken = useAppSelector((store) => store.auth.user.token);
    const { items } = useAppSelector((store) => store.cart);
    const localStorageToken = localStorage.getItem("tokenhoYo");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsLoggedIn(!!localStorageToken || !!reduxToken);
        if (!!localStorageToken || !!reduxToken) {
            dispatch(fetchCartItems());
        }
    }, [reduxToken, localStorageToken, dispatch]);

    return (
        <nav className="backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-50 transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                        DigitalDokan
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
                        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
                        {/* <Link to="/my-orders" className="hover:text-blue-600 transition">Orders</Link> */}
                        <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>
                        <Link to="/about" className="hover:text-blue-600 transition">About</Link>

                        {/* Cart */}
                        <Link to="/my-cart" className="relative hover:text-blue-600 transition">
                            <ShoppingCart className="w-6 h-6" />
                            {items.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold rounded-full px-1.5">
                                    {items.length}
                                </span>
                            )}
                        </Link>

                        {/* Auth Buttons */}
                        {isLoggedIn ? (
                            <Link to="/logout">
                                <button className="flex items-center gap-1 bg-blue-500 text-white py-1.5 px-4 rounded-lg hover:bg-blue-600 transition">
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </Link>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="flex items-center gap-1 border border-blue-500 text-blue-500 py-1.5 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition">
                                        <LogIn className="w-4 h-4" />
                                        Login
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button className="bg-blue-500 text-white py-1.5 px-4 rounded-lg hover:bg-blue-600 transition">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3 text-gray-700 font-medium">
                    <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Home</Link>
                    <Link to="/products" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Products</Link>

                    <Link to="/blog" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">Blog</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-600">About</Link>


                    <Link to="/my-cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 hover:text-blue-600">
                        <ShoppingCart className="w-5 h-5" />Cart
                        {items.length > 0 && (
                            <span className="bg-blue-600 text-white text-xs font-semibold rounded-full px-2">
                                {items.length}
                            </span>
                        )}
                    </Link>

                    {isLoggedIn ? (
                        <Link to="/logout" onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 justify-center mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                <LogOut className="w-4 h-4" /> Logout
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <button className="w-full flex items-center gap-2 justify-center mt-3 border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
                                    <LogIn className="w-4 h-4" /> Login
                                </button>
                            </Link>
                            <Link to="/register" onClick={() => setIsOpen(false)}>
                                <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}

                </div>
            )}
        </nav>
    );
}

export default Navbar;
