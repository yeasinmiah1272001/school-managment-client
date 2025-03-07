import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser, loading, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("User sign-in successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-96"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition flex justify-center items-center"
        >
          {loading ? (
            <TbFidgetSpinner size={20} className="animate-spin" />
          ) : (
            "Login"
          )}
        </button>
        <div className="flex justify-center items-center mt-4 w-full">
          <button
            onClick={handleGoogle}
            type="button"
            className="flex items-center space-x-2 border w-full py-2 rounded-md shadow-sm bg-white hover:bg-gray-100 transition justify-center"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>
        </div>
      </form>
      <p className="px-6 text-sm text-center text-gray-400 mt-4">
        Don&apos;t have an account yet?
        <Link
          to="/register"
          className="hover:underline hover:text-rose-500 text-gray-600"
        >
          {" "}
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
