import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { fetchProducts } from '../store/productSlice'
import Card from '../pages/product/components/Card'

function ProductFeatures() {
    const dispatch = useAppDispatch()
    const { products } = useAppSelector((store) => store.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    Featured <span className="text-blue-600">Products</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Explore our top-selling and trending digital products — handpicked to enhance your productivity and creativity.
                </p>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {products.length > 0 ? (
                        products.slice(0, 8).map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                            >
                                <Card product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            Loading products...
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
                <a
                    href="/products"
                    className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 transition"
                >
                    View All Products →
                </a>
            </div>
        </section>
    )
}

export default ProductFeatures
