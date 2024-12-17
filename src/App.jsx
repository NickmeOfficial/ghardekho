import React from 'react';

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-yellow-500 font-bold text-2xl">GharDekho</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Properties</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            Login
          </a>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">Register</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px] bg-cover bg-center  bg-[url('https://images.unsplash.com/photo-1625783507088-181c500660e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')] ">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center items-center">
            <h1 className="text-white text-5xl font-bold text-center mb-4">
              Find Your Dream Home in <br/>India
            </h1>
            <p className="text-white text-lg text-center mb-8">
              Discover the perfect property across major cities in India. From luxury
              apartments to affordable homes, find it all on GharDekho.
            </p>
            <div className="flex w-full justify-center max-w-2xl">
              <input
                type="text"
                placeholder="Enter locality, city, or project name"
                className="bg-white w-full  py-3 px-4 rounded-l-md focus:outline-none"
              />
             <button className="bg-black text-white py-3 px-6 rounded-r-md hover:bg-gray-800 flex items-center ">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  Search
               </button>
            </div>
        </div>
      </header>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Why Choose GharDekho?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center w-60">
              <div className="bg-yellow-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Properties</h3>
              <p className="text-gray-600">All listings are thoroughly verified by our team</p>
            </div>
            <div className="text-center w-60">
              <div className="bg-yellow-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prime Locations</h3>
              <p className="text-gray-600">Properties in the most sought-after locations</p>
            </div>
            <div className="text-center w-60">
             <div className="bg-yellow-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated support throughout your journey</p>
            </div>
            <div className="text-center w-60">
            <div className="bg-yellow-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </div>
              <h3 className="text-lg font-semibold mb-2">Timely Updates</h3>
              <p className="text-gray-600">Regular updates on property status</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;