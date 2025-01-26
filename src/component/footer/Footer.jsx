export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section - Logo & Links */}
        <div>
          <h2 className="text-2xl font-bold">
            JobPort<span className="text-yellow-500">.</span>
          </h2>
        </div>

        {/* Middle Section - Page Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Page link</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Utility pages</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Link in Bio</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter & Social Icons */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold">Want to stay up to date?</h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 flex-1 rounded-l-md border border-gray-300"
            />
            <button className="bg-yellow-500 text-white px-4 rounded-r-md">
              Subscribe now!
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Follow on:</h4>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-pink-500 text-white p-2 rounded-full">
                IG
              </a>
              <a href="#" className="bg-blue-500 text-white p-2 rounded-full">
                FB
              </a>
              <a href="#" className="bg-red-500 text-white p-2 rounded-full">
                YT
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full">
                X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t pt-4 text-gray-600 text-sm text-center">
        <p>
          Designed by{" "}
          <a href="#" className="text-blue-500">
            Webestica
          </a>
          . Powered by{" "}
          <a href="#" className="text-blue-500">
            Webflow
          </a>
        </p>
        <p className="mt-2">
          <a href="#" className="text-gray-800">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
