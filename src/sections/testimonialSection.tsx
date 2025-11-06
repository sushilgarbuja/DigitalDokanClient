import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Ramesh Thapa",
        role: "Web Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        message:
            "DigitalDokan has completely changed how I shop for gadgets. The interface is smooth, and the products are top-notch. Highly recommended!",
        rating: 5,
    },
    {
        name: "Sita Koirala",
        role: "Graphic Designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        message:
            "I love the deals and discounts! The checkout process was quick and hassle-free. Great customer experience overall!",
        rating: 4,
    },
    {
        name: "Bikash Shrestha",
        role: "IT Student",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        message:
            "Amazing quality and fast delivery. The featured products section helped me find exactly what I needed for my projects!",
        rating: 5,
    },
]

export default function TestimonialSection() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
            {/* Header */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    What Our <span className="text-blue-600">Customers Say</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Hear from our happy customers who love shopping with DigitalDokan.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 px-6">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-6 text-center border border-gray-100"
                    >
                        <img
                            src={t.image}
                            alt={t.name}
                            className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                        <p className="text-gray-600 mb-4 italic">“{t.message}”</p>
                        <div className="flex justify-center">
                            {[...Array(t.rating)].map((_, i) => (
                                <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Quote */}
            <div className="text-center mt-16">
                <p className="text-lg text-gray-700 font-medium">
                    Join thousands of happy customers today
                </p>
                <a
                    href="/products"
                    className="mt-4 inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                    Shop Now
                </a>
            </div>
        </section>
    )
}
