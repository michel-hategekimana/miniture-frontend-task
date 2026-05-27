import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen} />
      <div
        className={`pointer-events-none fixed inset-0 z-[45] bg-black/35 transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
