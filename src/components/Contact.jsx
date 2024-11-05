import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20">
          {/* Decorative Elements */}
          <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="mt-3 text-gray-600">We're excited to hear from you</p>
          </div>

          {/* Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 placeholder-transparent focus:border-purple-500 focus:outline-none transition-all bg-white/50"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 placeholder-transparent focus:border-purple-500 focus:outline-none transition-all bg-white/50"
                  placeholder="Email Address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 placeholder-transparent focus:border-purple-500 focus:outline-none transition-all bg-white/50"
                placeholder="Subject"
              />
              <label
                htmlFor="subject"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
              >
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                className="peer w-full px-4 py-3 rounded-xl border-2 border-gray-200 placeholder-transparent focus:border-purple-500 focus:outline-none transition-all bg-white/50 resize-none"
                placeholder="Your Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold 
                hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-300 transform transition-all 
                active:scale-[0.98] hover:shadow-xl hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-8 text-center text-sm text-gray-500">
              <div>
                <p className="font-medium text-gray-700">Email us at</p>
                <p>contact@example.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Call us at</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Follow us</p>
                <p>@yourcompany</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
