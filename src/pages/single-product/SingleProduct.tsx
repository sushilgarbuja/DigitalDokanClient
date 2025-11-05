import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProduct } from "../../store/productSlice";
import { addToCart } from "../../store/cartSlice";

import Navbar from "../../globals/components/Navbar";
import Footer from "../../globals/components/Footer";

function SingleProduct() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { product } = useAppSelector((store) => store.products);

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(id));
        }
    }, [id, dispatch]);

    const handleAddToCart = () => {
        if (id) dispatch(addToCart(id));
    };

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen text-gray-600 dark:text-white text-lg">
                    Loading product details...
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 dark:bg-gray-900 py-10 min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* ✅ Product Image Section (Fixed Full Display) */}
                        <div className="relative w-full flex justify-center items-center">
                            <div className="w-full h-auto md:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="w-full h-full object-contain bg-white transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* ✅ Product Details */}
                        <div className="space-y-6">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                                {product.productName}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4">
                                <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                                    ${product.productPrice}
                                </p>
                                <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                                    In Stock: {product.productTotalStock}
                                </span>
                            </div>

                            <div>
                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                    Category:
                                </span>{" "}
                                <span className="text-gray-600 dark:text-gray-400">
                                    {product.Category?.categoryName || "Uncategorized"}
                                </span>
                            </div>

                            <div>
                                <span className="font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                                    Description:
                                </span>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                                    {product.productDescription}
                                </p>
                            </div>

                            {/* ✅ Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 shadow-md"
                                >
                                    🛒 Add to Cart
                                </button>
                                <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold transition-colors duration-300">
                                    ❤️ Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SingleProduct;
