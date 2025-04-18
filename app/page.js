"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 ">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="py-10 text-center max-w-2xl mx-auto lg:px-10 md:px-6 px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Connect AI Agents. Securely. Intelligently.
        </h2>
        <p className="text-gray-600 mb-4">
          Link2VA lets developers connect their AI modules to others — safely,
          profitably, and intelligently. Powered by MorphicBrain.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
          → Register Your Module
        </button>
        <img
          src="/images/a2.png"
          className="mx-auto mt-10 rounded-xl"
          alt="AI module"
        />
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-10 lg:px-10 md:px-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            How Link2VA Works
          </h2>
          <div className="flex md:flex-row flex-col justify-between gap-6 ">
            {[
              {
                title: "1. Submit your module",
                desc: "Form A-01 verifies your AI agent.",
              },
              {
                title: "2. Pass security + intelligence checks",
                desc: "MorphicBrain filters out risky or incompatible agents.",
              },
              {
                title: "3. Connect to others — and get rewarded",
                desc: "Link your module to others. Collaborate. Monetize.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-full  bg-white p-6 rounded-xl shadow-md text-center 
                "
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="text-blue-600 underline">
              → Learn More About The Process
            </button>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Security Meets Intelligence
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
          <div className="text-gray-600 text-center sm:text-left max-w-md">
            MorphicBrain is the AI backbone behind Link2VA. It evaluates every
            module, prevents malicious actors, and boosts inter-agent
            intelligence.
          </div>
          <div className="text-green-600 text-center sm:text-right min-w-[200px] font-medium">
            ✔️ Powered by MorphicBrain
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-10 bg-gradient-to-r from-cyan-200 to-blue-100">
        <div className="max-w-6xl mx-auto text-center lg:px-10 md:px-6 px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            No Hidden Fees. Just Connection Power.
          </h2>
          <div className="flex justify-center mt-4">
            <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                🔹 $19/month per module
              </h3>
              <ul className="text-left pl-4">
                <li>✅ Secure, intelligent connection privilege</li>
                <li>✅ Flat rate — no surprises</li>
                <li>✅ Cancel anytime</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
              → View Developer Plans
            </button>
          </div>
        </div>
      </div>

      {/* Why Developers Choose Link2VA Section */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-cyan-50 lg:px-10 md:px-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Why Developers Choose Link2VA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "✅ Plug-and-play module integration",
              "✅ Intelligent matching system",
              "✅ Real-time feedback from MB",
              "✅ Built for vertical AI agents",
              "✅ Transparent, secure, and fair",
            ].map((point, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:transform hover:translate-y-2 transition-all"
              >
                <p className="text-gray-600">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
              → Submit Your Module
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
