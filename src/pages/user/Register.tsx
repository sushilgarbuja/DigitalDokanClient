import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { registerUser } from "../../store/authSlice";
import { Link } from "react-router-dom";
import Navbar from "../../globals/components/Navbar";

function Register() {
    const dispatch = useAppDispatch();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        token: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(registerUser(data));
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-8">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col items-center">
                        <img
                            className="h-16 w-16 mb-4"
                            src="https://www.svgrepo.com/show/499664/user-happy.svg"
                            alt="User Icon"
                        />
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Create Your Account</h2>
                        <p className="text-sm text-gray-500 mb-6">Please fill in the details to register</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                required
                                onChange={handleChange}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={handleChange}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                onChange={handleChange}
                                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-200 shadow-lg"
                        >
                            Register Account
                        </button>

                        <div className="text-center text-sm text-gray-500 mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                Login here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
