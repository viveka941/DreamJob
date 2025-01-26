import React from 'react'

export default function DashBoard(){
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">MyDreamJob.com</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Introduction Section */}
        <section className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome to MyDreamJob.com
          </h2>
          <p className="text-gray-600">
            MyDreamJob.com is a platform dedicated to helping students achieve
            their dreams by connecting them with their ideal companies. Our
            website offers guidance, resources, and reviews to help students
            navigate their career journey and secure their dream job.
          </p>
        </section>

        {/* Company Section */}
        <section className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Partnered Companies
          </h2>
          <p className="text-gray-600">
            We collaborate with top companies to provide students with insights
            into their dream organizations. Whether you're aiming for a tech
            giant, a startup, or anything in between, our resources can guide
            you.
          </p>
        </section>

        {/* Student Reviews Section */}
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Student Reviews
          </h2>
          <p className="text-gray-600">
            "This website was instrumental in helping me land my dream job at a
            leading tech company! Highly recommended." - John Doe
          </p>
          <p className="text-gray-600 mt-4">
            "Thanks to MyDreamJob.com, I discovered a clear path to my career
            goals and got hired by my ideal company." - Jane Smith
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-6">
        &copy; 2025 MyDreamJob.com. All rights reserved.
      </footer>
    </div>
  );

};
