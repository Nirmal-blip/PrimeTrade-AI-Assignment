import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegisterUser() {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin'); // 🔥 UI role selector
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role:role,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // register + cookie
      await axios.post(
        '/api/register',
        {
          ...formData,
          role:role,
        },
        { withCredentials: true }
      );

      setMessage('Register successful! Redirecting...');
      navigate('/explore');

    } catch (err) {
      console.error('Registration failed:', err);
      setMessage(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src="/images/Hero.png"
        alt="Register Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Card */}
      <div className="relative z-20 bg-[#ffffff93] p-10 shadow-2xl rounded-lg w-full max-w-md flex flex-col items-center">

        {/* 🔥 SMALL ROLE TOGGLE (UI SAFE) */}
        <div className="flex mb-4 border border-gray-300 rounded overflow-hidden">
          <button
            type="button"
            onClick={() => setRole('user')}
            className={`px-4 py-1 text-sm font-semibold ${
              role === 'user'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            User
          </button>
          <button
            type="button"
            onClick={() => setRole('admin')}
            className={`px-4 py-1 text-sm font-semibold ${
              role === 'admin'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            Admin
          </button>
        </div>

        <img src="/images/logo.png" alt="Logo" className="h-14 mb-4" />

        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
            Register
          </h2>

          {message && (
            <p className="text-center text-sm mb-4 text-red-600 font-semibold">
              {message}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full mb-4 p-3 border rounded focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full mb-4 p-3 border rounded focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
            className="w-full mb-6 p-3 border rounded focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-[#c90000] text-white font-bold py-3 rounded"
          >
            Register
          </button>
        </form>

        <p className="mt-4">
          Have an account?
          <Link to="/login" className="ml-1 text-red-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;
