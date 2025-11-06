import { Shield, Truck, ThumbsUp, Headphones } from "lucide-react";

function WhyChooseUs() {
    const features = [
        {
            icon: <Shield className="w-10 h-10 text-blue-600" />,
            title: "Secure Shopping",
            desc: "We ensure your data and payments are 100% safe with advanced encryption.",
        },
        {
            icon: <Truck className="w-10 h-10 text-blue-600" />,
            title: "Fast Delivery",
            desc: "Get your products quickly with our express delivery system across the country.",
        },
        {
            icon: <ThumbsUp className="w-10 h-10 text-blue-600" />,
            title: "Quality Products",
            desc: "We only sell verified and high-quality digital products you can trust.",
        },
        {
            icon: <Headphones className="w-10 h-10 text-blue-600" />,
            title: "24/7 Support",
            desc: "Our customer support is always available to help you anytime you need.",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose <span className="text-blue-600">Us</span>?</h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    We provide the best digital products and services with trust, reliability, and customer satisfaction.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
                        >
                            <div className="bg-blue-100 rounded-full p-4 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
