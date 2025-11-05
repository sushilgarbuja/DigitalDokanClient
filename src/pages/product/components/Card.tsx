import React from "react";
import type { IProduct } from "../types/types";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

interface ICardProps {
    product: IProduct;
}

const Card: React.FC<ICardProps> = ({ product }) => {
    // Calculate discount percentage safely
    const discountPercentage =
        product.discount && product.discount > product.productPrice
            ? Math.floor(((product.discount - product.productPrice) / product.discount) * 100)
            : 0;

    return (
        <Link to={`/product/${product.id}`}>
            <div
                className="
          bg-white 
          rounded-2xl 
          shadow-lg 
          overflow-hidden 
          transition-all 
          duration-500 
          hover:scale-[1.03] 
          hover:shadow-2xl 
          hover:-translate-y-1 
          w-full 
          max-w-xs 
          mx-auto
        "
            >
                {/* Image Section */}
                <div className="relative">
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />

                    {/* Discount Tag */}
                    {discountPercentage > 0 && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            -{discountPercentage}%
                        </div>
                    )}

                    {/* Subtle Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Product Details */}
                <div className="p-4 flex flex-col gap-2">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">
                        BRAND
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {product.productName}
                    </h3>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-black">
                                ${product.productPrice}
                            </span>
                            {product.discount && (
                                <del className="text-sm text-gray-500">${product.discount}</del>
                            )}
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            className="
                p-2 
                bg-gradient-to-r 
                from-gray-100 
                to-gray-200 
                rounded-full 
                hover:from-black 
                hover:to-gray-800 
                hover:text-white 
                transition-colors 
                duration-300
                shadow-sm
              "
                            title="Add to Cart"
                        >
                            <ShoppingBag size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
