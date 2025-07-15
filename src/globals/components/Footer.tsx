import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">DigitalDokan</h2>
                    <p className="text-sm">
                        Your one-stop solution for all digital products. Trusted, affordable, and fast delivery.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/products" className="hover:text-white">Products</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: support@digitaldokan.com</li>
                        <li>Phone: +977-1234567890</li>
                        <li>Location: Kathmandu, Nepal</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-white">
                        <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-700" />

            <div className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} DigitalDokan. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
