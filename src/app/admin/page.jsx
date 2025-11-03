'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Login = ({ isAuthenticated }) => {
    // ✅ Initialize state as empty strings
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        router.replace('/admin/dashboard');
      }
    }, [isAuthenticated, router]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill the email or password");
            return;
        }

        if (email === "admin@gmail.com" && password === "Admin123") {
            alert("Login Successfully");
            setError("");
            localStorage.setItem("isAuthenticated", 'true');
            sessionStorage.setItem("isAuthenticated", 'true');
            router.replace('/admin/dashboard'); // prevents back navigation
        } else {
            setError("Invalid email or password");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 gap-1">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-10">
                <img src="logo.png" alt="logo" className='object-cover flex items-center justify-center mb-4' />
                <h2 className="text-xl font-semibold text-gray-900 text-center">
                    Login to your account
                </h2>
                <p className="text-sm text-gray-500 text-center mt-1 mb-6">
                    Enter your email below to login to your account
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-black">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
