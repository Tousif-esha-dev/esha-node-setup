import React, { useState } from 'react';

const Course = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn modern web development with React, Node.js, and more",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      duration: "12 weeks",
      price: "$499"
    },
    {
      id: 2, 
      title: "Data Science",
      description: "Master data analysis, machine learning, and statistical modeling",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      duration: "16 weeks",
      price: "$599"
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Build iOS and Android apps with React Native and Flutter",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      duration: "14 weeks",
      price: "$549"
    },
    {
      id: 4,
      title: "Cloud Computing",
      description: "Master AWS, Azure, and cloud infrastructure deployment",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      duration: "10 weeks",
      price: "$449"
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Learn network security, ethical hacking and security practices",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      duration: "15 weeks",
      price: "$649"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Master user interface and experience design principles",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      duration: "8 weeks",
      price: "$399"
    },
    {
      id: 7,
      title: "Blockchain Development",
      description: "Learn cryptocurrency and blockchain application development",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
      duration: "12 weeks",
      price: "$699"
    },
    {
      id: 8,
      title: "Game Development",
      description: "Create games using Unity and modern game development tools",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914",
      duration: "16 weeks",
      price: "$599"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`${course.image}?auto=format&fit=crop&w=400&q=80`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Duration: {course.duration}
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {course.price}
                  </span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
