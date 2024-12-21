import { useState } from "react";
import logo from "./../logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    console.log(`Navigating to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the mobile menu after clicking
    } else {
      console.warn(`Section with id "${id}" not found.`);
    }
  };

  return (
    <header
      style={{
        backgroundImage: "linear-gradient(to right, #000000FF, #010053FF)"
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#ffffff] transition duration-300 hover:text-[#3f66ff] flex items-center">
          <img src={logo} alt="Nature Logo" className="h-8 mr-2" />
          <span className="text-lg">NatureBear</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-[#ede9fe] font-medium">
          <button
            onClick={() => scrollToSection("")}
            className="hover:text-[#7c3aed] transition duration-300 ease-in-out"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-[#7c3aed] transition duration-300 ease-in-out"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("vision")}
            className="hover:text-[#7c3aed] transition duration-300 ease-in-out"
          >
            Vision
          </button>
          <button
            onClick={() => scrollToSection("Contact")}
            className="hover:text-[#7c3aed] transition duration-300 ease-in-out"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#ede9fe] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#1e1b4b] border-t border-[#7e22ce] shadow-md">
          <button
            onClick={() => scrollToSection("")}
            className="block px-4 py-2 hover:bg-[#7e22ce] text-[#ede9fe] transition duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block px-4 py-2 hover:bg-[#7e22ce] text-[#ede9fe] transition duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("vision")}
            className="block px-4 py-2 hover:bg-[#7e22ce] text-[#ede9fe] transition duration-200"
          >
            Vision
          </button>
          <button
            onClick={() => scrollToSection("Contact")}
            className="block px-4 py-2 hover:bg-[#7e22ce] text-[#ede9fe] transition duration-200"
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
