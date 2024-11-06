import React, { useState } from 'react';
import CountUp from 'react-countup';

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courseData = [
    {
      id: 1,
      title: "Web Development",
      shortDesc: "Learn modern web development with React, Node.js, and more",
      fullDesc: "Dive deep into modern web development technologies. This comprehensive course covers frontend frameworks like React, backend development with Node.js, database management, and deployment strategies. Perfect for beginners and intermediate developers looking to upgrade their skills.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Design", "API Development"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      shortDesc: "Master data analysis, machine learning, and statistical modeling",
      fullDesc: "Become a data expert through our comprehensive data science course. Learn Python, statistical analysis, machine learning algorithms, and data visualization. Perfect for analysts and aspiring data scientists looking to make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "16 weeks",
      level: "Intermediate to Advanced",
      topics: ["Python", "Statistics", "Machine Learning", "Data Visualization", "Big Data", "Predictive Modeling"]
    },
    {
      id: 3,
      title: "Mobile App Development",
      shortDesc: "Build iOS and Android apps with React Native and Flutter",
      fullDesc: "Create cross-platform mobile applications using modern frameworks. Learn mobile UI/UX design principles, state management, and app deployment. Ideal for developers wanting to enter the mobile development space.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      duration: "14 weeks",
      level: "Intermediate",
      topics: ["React Native", "Flutter", "Mobile UI/UX", "App Store Deployment", "Native APIs", "State Management"]
    },
    {
      id: 4,
      title: "Cloud Computing",
      shortDesc: "Master AWS, Azure, and cloud infrastructure deployment",
      fullDesc: "Dive into cloud computing with hands-on experience in major platforms. Learn cloud architecture, serverless computing, and DevOps practices. Essential for IT professionals looking to modernize their skill set.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      topics: ["AWS", "Azure", "Cloud Architecture", "DevOps", "Containerization", "Serverless Computing"]
    }
  ];

  const CourseModal = ({ course, onClose }) => {
    if (!course) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.fullDesc}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Course Details</h4>
                <p>Duration: {course.duration}</p>
                <p>Level: {course.level}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Topics Covered</h4>
                <ul className="list-disc list-inside">
                  {course.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button 
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        {/* Background image with responsive sources */}
        <picture className="absolute inset-0">
          <source
            media="(max-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Abstract modern architecture with geometric patterns"
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Enhanced gradient overlay with animated effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-purple-500/60 to-pink-500/70 mix-blend-overlay"></div>
        
        {/* Add a subtle dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-blue-400"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-purple-400"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Transform Your Future
            </span>
            <br />
            with Online Learning
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-gray-200 font-light">
            Access world-class education from anywhere, at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full transition duration-300 hover:bg-white hover:text-purple-900 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
          
          {/* Stats preview */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400">
                <CountUp end={10} duration={2.5} suffix="K+" enableScrollSpy scrollSpyOnce />
              </h3>
              <p className="text-gray-300">Active Students</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-purple-400">
                <CountUp end={100} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
              </h3>
              <p className="text-gray-300">Expert Courses</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400">
                <CountUp end={50} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
              </h3>
              <p className="text-gray-300">Top Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Courses</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseData.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.shortDesc}</p>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CourseModal 
        course={selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
      />

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
    </div>
  )
}

export default Home
