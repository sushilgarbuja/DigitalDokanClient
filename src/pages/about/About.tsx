import React from 'react';
import Navbar from '../../globals/components/Navbar';
import Footer from '../../globals/components/Footer';

function About() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
                <div className="max-w-5xl mx-auto">
                    {/* Page Heading */}
                    <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>

                    {/* Intro Section */}
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        Welcome to <span className="font-semibold">DigitalDokan</span> – your one-stop solution for everything digital!
                        We are passionate about providing high-quality products, exceptional customer service, and a seamless online shopping experience.
                    </p>

                    {/* Our Mission */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to empower businesses and individuals by offering innovative digital tools and products.
                            We believe in transparency, innovation, and commitment to customer satisfaction.
                        </p>
                    </div>

                    {/* Our Team */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Team</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are a diverse group of designers, developers, and entrepreneurs who are driven by creativity and
                            technology. Every team member brings unique skills and passion to help grow our platform and serve you better.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Trusted and secure platform</li>
                            <li>Dedicated customer support</li>
                            <li>Fast and reliable delivery</li>
                            <li>Wide variety of quality digital products</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
