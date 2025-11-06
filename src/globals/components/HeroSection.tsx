
function HeroSection() {
    return (
        <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-16 min-h-screen overflow-hidden font-poppins">
            {/* Soft background effects */}
            <div className="absolute -top-16 -left-10 w-44 h-44 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:grid md:grid-cols-2 items-center gap-14">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 z-10">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 uppercase tracking-wider">
                        Smart Digital Deals 💻
                    </h3>

                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        <span className="text-orange-600">25% OFF</span><br />
                        <span className="text-gray-900">On Digital Products</span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                        Upgrade your workspace with our latest laptops, smartphones, and accessories.
                        Enjoy exclusive discounts this season and take your productivity to the next level!
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold text-lg py-3 px-10 rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                            Shop Now
                        </button>
                        <button className="border-2 border-blue-500 text-blue-600 font-semibold text-lg py-3 px-10 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                            Explore More
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE (hidden on mobile) */}
                <div className="relative hidden md:flex justify-center items-center">
                    <div className="absolute -top-8 left-0 w-28 h-28 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
                    <div className="absolute bottom-0 right-0 w-36 h-36 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

                    <img
                        className="relative z-10 w-[280px] h-[180px] sm:w-[380px] sm:h-[240px] md:w-[500px] md:h-[400px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80"
                        alt="Laptop Offer"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
