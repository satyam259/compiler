import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <img 
            src="404-computer.svg"
            alt="404 illustration showing person at desk" 
            className="w-100 h-auto mx-auto"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-blue-500 text-3xl font-bold mb-4">
          404 Not Found
        </h1>
        <h2 className="text-white text-4xl font-bold mb-8">
          Whoops! That page doesn't exist.
        </h2>
        <p className="text-gray-400 text-lg font-bold mb-4">
          Here are some helpful links instead:
        </p>
        <div className="flex justify-center space-x-4">
          <Link to='/' className="text-gray-400 text-lg font-semibold hover:text-white transition-colors underline">Home</Link>
          <Link to="/login" className="text-gray-400 text-lg font-semibold hover:text-white transition-colors underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;