import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();   

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (!pwd) {
      newErrors.pwd = "Password is required";
      valid = false;
    } else if (pwd.length < 6) {
      newErrors.pwd = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password: pwd }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success===true) {
          alert("Registered successfully!");
          navigate("/");
        } else {
          alert("Registration failed: " + data.message);
        }
      });
  };
  return (
    <div className="bg-[#1c1c24] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <p className="absolute top-6 left-6 text-white text-2xl font-bold z-10">Compiler</p>
          <Link
            to="/"
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors z-10"
          >
            Back to website →
          </Link>
          <div className="relative h-full">
            <img src="login.jpg" alt="Desert landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-purple-900/30"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <h2 className="text-2xl md:text-4xl font-semibold mb-2">Writing Code,</h2>
              <h2 className="text-2xl md:text-4xl font-semibold">Building Dreams</h2>
              <div className="flex gap-2 mt-6">
                <div className="w-4 h-1 bg-white/30 rounded"></div>
                <div className="w-4 h-1 bg-white/30 rounded"></div>
                <div className="w-4 h-1 bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-white text-2xl md:text-4xl font-semibold mb-2">Create an account</h1>
            <p className="text-gray-400 mb-8">
              Already have an account?{" "}
              <Link to="/login" href="https://abhirajk.vercel.app/" className="text-white hover:underline">
                Log in
              </Link>
            </p>

            <form className="space-y-4" onSubmit={submitForm}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full md:w-1/2 bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}
                  //  dataerr="please fill out thisfirst Name"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full md:w-1/2 bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required onChange={(e)=>{setLastName(e.target.value)}} value={lastName}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#1c1c24] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required onChange={(e)=>{setEmail(e.target.value)}} value={email}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-[#1c1c24] text-white rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required onChange={(e)=>{setPwd(e.target.value)}} value={pwd}
                />
                {errors.pwd && <p className="text-red-500 text-sm">{errors.pwd}</p>}
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded bg-[#1c1c24] border-gray-600 text-purple-600 focus:ring-purple-600"
                  required
                />
                <span className="text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-white hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-700 transition-colors"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
