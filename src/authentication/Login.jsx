import React, { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; 
import toast, { Toaster } from "react-hot-toast"; 
import axios from "axios"; 
import { useAuth } from "./AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      console.log(response.data)

      if (response.data.success) {
        login(); // Set admin logged-in state
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/"); 
        }, 2000); 
      }
    } catch (error) {
      toast.error("Sorry! You are not an Admin.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Toaster />
      <div className="p-8 w-full max-w-md bg-[#050907] rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-[#222624] text-white focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-[#222624] text-white focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-gradient font-semibold text-white rounded-xl py-2 flex items-center justify-center gap-2"
          >
            <RiLoginCircleFill className="text-xl" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
