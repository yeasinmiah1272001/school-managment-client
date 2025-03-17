import { useContext, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import useRole from "../hooks/useRole";
import React from "react";

const Login = () => {
  const { loginUser, loading, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role] = useRole();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-400 via-teal-500 to-blue-600">
      <div className="w-full max-w-4xl px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          School Managment Login Form
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left side with illustration */}
          <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
            <div className="relative h-64 w-64">
              <img
                src="/placeholder.svg?height=250&width=250"
                alt="Student and teacher illustration"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2 max-w-md">
            <div className="rounded-lg bg-teal-500/30 backdrop-blur-sm p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full rounded bg-teal-700/70 p-3 text-white placeholder-gray-300 outline-none"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    className="w-full rounded bg-teal-700/70 p-3 text-white placeholder-gray-300 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-black py-3 text-white transition-colors hover:bg-gray-900 flex justify-center items-center"
                >
                  {loading ? (
                    <TbFidgetSpinner size={20} className="animate-spin" />
                  ) : (
                    "LOGIN"
                  )}
                </button>

                {/* Google login button - uncomment if needed */}
                {/* <div className="flex justify-center items-center mt-4 w-full">
                  <button
                    onClick={handleGoogle}
                    type="button"
                    className="flex items-center space-x-2 border w-full py-2 rounded-md shadow-sm bg-white hover:bg-gray-100 transition justify-center"
                  >
                    <FcGoogle size={24} />
                    <span>Continue with Google</span>
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>

        {/* Sign up link - uncomment if needed */}
        {/* <p className="px-6 text-sm text-center text-white mt-4">
          Don&apos;t have an account yet?
          <Link
            to="/register"
            className="hover:underline hover:text-white font-medium ml-1"
          >
            Sign up
          </Link>
        </p> */}

        <div className="mt-8 text-center text-white">
          © {new Date().getFullYear()} Student Login Form. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
