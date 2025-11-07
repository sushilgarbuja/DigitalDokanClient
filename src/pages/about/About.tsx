import Navbar from '../../globals/components/Navbar';
import Footer from '../../globals/components/Footer';

function About() {
    return (
        <>
            <Navbar />

            {/* Background Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-5 md:px-20 overflow-hidden">
                {/* Decorative Gradient Blobs */}
                <div className="absolute -top-20 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-200 rounded-full blur-3xl opacity-25"></div>

                <div className="relative max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 drop-shadow-sm">
                        About <span className="text-indigo-600">DigitalDokan</span>
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                        Welcome to <span className="font-semibold text-blue-700">DigitalDokan</span> — your one-stop destination for
                        everything digital! We deliver high-quality products, seamless service, and a smooth shopping experience you can trust.
                    </p>

                    {/* Mission Section */}
                    <div className="bg-white shadow-md rounded-2xl p-8 md:p-10 mb-10 hover:shadow-lg transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3"> Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We aim to empower individuals and businesses by providing innovative and reliable digital solutions.
                            At <span className="text-blue-600 font-medium">DigitalDokan</span>, we value transparency,
                            innovation, and a customer-first mindset.
                        </p>
                    </div>

                    {/* Team Section */}
                    <div className="bg-white shadow-md rounded-2xl p-8 md:p-10 mb-10 hover:shadow-lg transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Team</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our team includes designers, developers, and entrepreneurs passionate about creativity and technology.
                            Together, we’re shaping the digital future and ensuring you get the best experience possible.
                        </p>
                    </div>


                </div>
            </section>

            <Footer />
        </>
    );
}

export default About;
