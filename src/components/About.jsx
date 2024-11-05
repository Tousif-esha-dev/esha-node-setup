import React from 'react'

const About = ({ title }) => {
  return (
    <div>
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title || 'Our Mission'}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are dedicated to fostering innovation and creating positive change in communities worldwide through technology and collaboration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Cards */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries and exploring new possibilities in technology and community development.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building strong, inclusive communities that support and empower each other.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">Creating lasting positive change through sustainable solutions and partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="w-full max-w-7xl px-4 md:px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals driving our mission forward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=random" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img src="https://ui-avatars.com/api/?name=Mike+Johnson&background=random" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <img src="https://ui-avatars.com/api/?name=Sarah+Williams&background=random" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Sarah Williams</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
