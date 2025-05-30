import React from "react";
import axios from "axios";
import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/ct/ContactUs",
        formData
      );

      if (response.data.success) {
        alert("Your response has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(response.data.message);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex flex-col items-center py-10 px-6 md:px-16 lg:px-32">
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-emerald-600 text-lg font-medium hover:text-emerald-500 transition duration-300"
      >
        <ArrowBigLeft className="w-6 h-6" />
        Back
      </button>
      <br />
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-lg flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-green-50 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6 leading-tight">
            Why Reduce Food Wastage?
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Each year, billions of tons of food are wasted while millions go
            hungry. By reducing food waste, we not only fight hunger but also
            conserve essential resources like water and energy.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Join us in our mission to minimize food wastage by spreading
            awareness and taking actionable steps.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Plan meals and shop wisely</li>
            <li>Donate excess food to those in need</li>
            <li>Compost food scraps to reduce landfill waste</li>
            <li>Support and volunteer for food recovery initiatives</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-6">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                placeholder="example@domain.com"
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold text-gray-700 mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-4 rounded-lg hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
