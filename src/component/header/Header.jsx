export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        JobPort<span className="text-yellow-500">.</span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Pages
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-black">
          Contact
        </a>
      </nav>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-100 rounded-full">Cart</button>
        <button className="px-6 py-2 bg-black text-white rounded-full">
          Post a job
        </button>
      </div>
    </header>
  );
}
