import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, loading, signInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`,
        formData
      );
      const imageUrl = data.data.display_url;
      await createUser(email, password);
      await updateUserProfile(name, imageUrl);
      toast.success("User registered successfully");
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error.message);
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google Login success");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google login:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-96 md:w-[600px]"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition flex justify-center items-center"
        >
          {loading ? (
            <TbFidgetSpinner size={20} className="animate-spin" />
          ) : (
            "Register"
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
          to="/"
          className="hover:underline hover:text-rose-500 text-gray-600"
        >
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
