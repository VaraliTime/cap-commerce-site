import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Bloc 1", href: "/bloc1" },
    { label: "Bloc 2", href: "/bloc2" },
    { label: "Bloc 3", href: "/bloc3" },
    { label: "Ressources", href: "/ressources" }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl font-bold text-emerald-600">📚</div>
              <span className="font-playfair text-xl font-bold text-gray-900 hidden sm:inline">
                CAP Commerce
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`font-poppins font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-emerald-600 border-b-2 border-emerald-600 pb-1"
                      : "text-gray-600 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 font-poppins font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
