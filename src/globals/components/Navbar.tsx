import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCartItems } from "../../store/cartSlice";

function Navbar() {
    const reduxToken = useAppSelector((store) => store.auth.user.token);
    const { items } = useAppSelector((store) => store.cart);
    const localStorageToken = localStorage.getItem("tokenhoYo");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsLoggedIn(!!localStorageToken || !!reduxToken);
        if (!!localStorageToken || !!reduxToken) {
            dispatch(fetchCartItems());
        }
    }, [reduxToken, localStorageToken, dispatch]);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
                        <Link to="/">DigitalDokan</Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                        <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
                        <Link to="/my-orders" className="hover:text-blue-600 transition">My Orders</Link>
                        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
                        <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>

                        <div className="flex items-center space-x-4">
                            {isLoggedIn ? (
                                <>
                                    <span className="mr-2">
                                        <Link to='/my-cart'>
                                            Cart<sup>{items.length > 0 ? items.length : 0}</sup>
                                        </Link>
                                    </span>
                                    <Link to='/logout'>
                                        <button className="text-lg md:text-2xl bg-blue-400 text-white py-1 px-5 hover:bg-blue-500">
                                            Logout
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to='/register'>
                                        <button className="text-lg md:text-2xl bg-blue-400 text-white py-2 px-5 hover:bg-zinc-800">
                                            Register
                                        </button>
                                    </Link>
                                    <Link to='/login'>
                                        <button className="py-3 px-8 text-sm bg-blue-400 text-white hover:bg-blue-500">
                                            Login
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile toggle button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white text-gray-700 font-medium shadow-md">
                    <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/products" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link to="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/blog" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>

                    {isLoggedIn ? (
                        <>
                            <Link to="/my-cart" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                Cart <sup>{items.length > 0 ? items.length : 0}</sup>
                            </Link>
                            <Link to="/logout" onClick={() => setIsOpen(false)}>
                                <button className="w-full text-left text-lg bg-blue-400 text-white py-2 px-5 mt-4 hover:bg-blue-600">
                                    Logout
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/register" onClick={() => setIsOpen(false)}>
                                <button className="w-full text-left text-lg bg-blue-400 text-white py-2 px-5 mt-4 hover:bg-zinc-800">
                                    Register
                                </button>
                            </Link>
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <button className="w-full text-left text-sm bg-blue-400 text-white py-2 px-5 hover:bg-blue-500">
                                    Login
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
