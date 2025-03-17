import React from "react";

import { useContext, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import useRole from "../hooks/useRole";
import login from "../assets/login.png";

const Login = () => {
  const { loginUser, loading, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;

    try {
      await loginUser(email, password);
      toast.success("Login successful!");
      navigate(`/dashboard`);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      toast.error(error.message);
    }
  };
  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google Login successful");
      navigate(`/dashboard`);
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 p-4">
      <div className="w-full max-w-5xl">
        <h1 className="mb-10 text-center text-4xl font-bold text-white drop-shadow-md">
          School Management Login
        </h1>

        <div className="overflow-hidden rounded-2xl bg-white/10 ">
          <div className="flex flex-col md:flex-row">
            {/* Left side with illustration */}
            <div className="flex items-center justify-center bg-teal-600/20 p-8 md:w-1/2">
              <div className="transform transition-transform duration-500 hover:scale-105">
                <img
                  src={login || "/placeholder.svg"}
                  alt="Student and teacher illustration"
                  className="max-h-80 object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Right side with form */}
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  Welcome Back
                </h2>
                <p className="text-white/80">Please sign in to your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-white mb-1 ml-1"
                  >
                    Select Role
                  </label>
                  <select
                    name="role"
                    id="role"
                    className="w-full rounded-lg bg-teal-700/50 p-3.5 text-white outline-none border border-teal-400/30 focus:border-teal-300 transition-all"
                  >
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-1 ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg bg-teal-700/50 p-2 text-white placeholder-gray-300 outline-none border border-teal-400/30 focus:border-teal-300 transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white mb-1 ml-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg bg-teal-700/50 p-2 text-white placeholder-gray-300 outline-none border border-teal-400/30 focus:border-teal-300 transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-black py-2 text-white font-medium transition-all hover:bg-gray-900 hover:shadow-lg focus:ring-2 focus:ring-teal-300 flex justify-center items-center"
                >
                  {loading ? (
                    <TbFidgetSpinner size={24} className="animate-spin" />
                  ) : (
                    "LOGIN"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-white/80">
          © {new Date().getFullYear()} School Management System. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
