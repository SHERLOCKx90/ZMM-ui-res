import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Toggle mobile menu when the screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="bg-[#BF2025] text-white p-4 rounded-[0.5rem] transition-all">
      <div className="flex items-center justify-between">
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobile ? "✕" : "☰"} {/* Toggle icon based on isMobile */}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <ul className="mt-4">
          <li className="py-2 hover:text-black font-bold hover:cursor-pointer">Rules & Regulations</li>
          <li className="py-2 hover:cursor-pointer hover:bg-white hover:text-black font-montserrat font-bold hover:flex hover:flex-row hover:justify-start hover:px-5 hover:items-center rounded-[1000px] hover:transition hover:ease-linear hover:translate-x-1">Login</li>
        </ul>
      )}

      {/* Desktop menu */}
      <ul className="hidden lg:flex mt-4">
        <li className="mx-4">Menu Item 1</li>
        <li className="mx-4">Menu Item 2</li>
        <li className="mx-4">Menu Item 3</li>
      </ul>
    </nav>
  );
};

export default Navbar;

