import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Background image with responsive sources */}
        <picture className="absolute inset-0">
          <source
            media="(max-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          />
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Modern learning environment with technology"
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Adjusted gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Future with Online Learning</h1>
          <p className="text-xl md:text-2xl mb-8">Access world-class education from anywhere, at any time.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Courses</h2>
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-8 pb-4 min-w-max">
            {/* Course Card 1 */}
            <div className="w-[350px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Web Development" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-600 mb-4">Learn modern web development with React, Node.js, and more</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="w-[350px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Data Science" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Data Science</h3>
                <p className="text-gray-600 mb-4">Master data analysis, machine learning, and visualization</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="w-[350px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Mobile App Development" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
                <p className="text-gray-600 mb-4">Build iOS and Android apps using React Native and Flutter</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Course Card 4 */}
            <div className="w-[350px] bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Cybersecurity" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
                <p className="text-gray-600 mb-4">Master network security, ethical hacking, and cyber defense</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Why Choose Us
          <div className="absolute w-24 h-1 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Learn Anywhere Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 w-20 h-20 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
                alt="Learn Anywhere"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Learn Anywhere</h3>
            <p className="text-gray-600 leading-relaxed">Access our comprehensive courses from anywhere in the world, on any device, at your own pace.</p>
          </div>

          {/* Certified Courses Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 w-20 h-20 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3"
                alt="Certified Courses"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Certified Courses</h3>
            <p className="text-gray-600 leading-relaxed">Earn industry-recognized certificates upon successful completion of our courses.</p>
          </div>

          {/* Expert Instructors Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6 w-20 h-20 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
                alt="Expert Instructors"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Expert Instructors</h3>
            <p className="text-gray-600 leading-relaxed">Learn directly from industry professionals with years of real-world experience.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-blue-300 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2">10K+</h3>
              <p className="text-blue-100">Happy Students</p>
            </div>

            {/* Courses */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-blue-300 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2">100+</h3>
              <p className="text-blue-100">Expert Courses</p>
            </div>

            {/* Experts */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-blue-300 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
              </div>
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Industry Experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
