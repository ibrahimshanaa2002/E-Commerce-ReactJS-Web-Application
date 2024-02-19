import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 font-sans">
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">Welcome to Tailwind CSS Example</h1>
        <div className=" lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature 1</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature 2</h2>
                <p className="text-gray-600">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature 3</h2>
                <p className="text-gray-600">Suspendisse potenti. Proin eu velit eget metus vehicula lacinia.</p>
            </div>
        </div>
    </div>
</div>
  );
};

export default Header;
