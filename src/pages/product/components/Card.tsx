import React from "react";
import type { IProduct } from "../types/types";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

interface ICardProps {
    product: IProduct;
}

const Card: React.FC<ICardProps> = ({ product }) => {
    const discountPercentage =
        product.discount && product.discount > product.productPrice
            ? Math.floor(((product.discount - product.productPrice) / product.discount) * 100)
            : 0;

    return (
        <Link to={`/product/${product.id}`}>
            <div
                className="
          group
          relative
          bg-white/80
          backdrop-blur-md
          rounded-2xl
          shadow-md
          overflow-hidden
          border
          border-transparent
          hover:border-blue-500/50
          hover:shadow-2xl
          transition-all
          duration-500
          w-full
          max-w-xs
          mx-auto
          hover:-translate-y-2
        "
            >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {discountPercentage > 0 && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                            -{discountPercentage}%
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                    <span className="text-xs text-gray-400 tracking-widest uppercase">Brand</span>
                    <h3 className="text-lg font-semibold text-gray-900 truncate mt-1">
                        {product.productName}
                    </h3>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-blue-600">${product.productPrice}</span>
                            {product.discount && (
                                <del className="text-sm text-gray-400">${product.discount}</del>
                            )}
                        </div>

                        <button
                            title="Add to Cart"
                            className="
                p-2.5
                rounded-full
                bg-gradient-to-br from-blue-500 to-indigo-600
                text-white
                shadow-md
                hover:shadow-lg
                transition-all
                duration-300
                hover:scale-110
              "
                        >
                            <ShoppingBag size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
