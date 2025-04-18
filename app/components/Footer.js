import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-6">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
      {[
        "About",
        "How It Works",
        "Pricing",
        "Terms & Privacy",
        "Contact",
      ].map((item, i) => (
        <div key={i}>
          <span className="cursor-pointer hover:text-blue-600">{item}</span>
        </div>
      ))}
    </div>
    <div className="mt-6 text-center text-gray-500">
      © 2025 Link2VA | Powered by MorphicBrain
    </div>
  </div>
  )
}

export default Footer
