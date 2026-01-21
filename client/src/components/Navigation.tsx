import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { LiveVisitors } from "./LiveVisitors";
import { RadioPlayer } from "./RadioPlayer";
import { UpdateNotes } from "./UpdateNotes";
import { RealTimeClock } from "./RealTimeClock";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Bloc 1", href: "/bloc1" },
    { label: "Bloc 2", href: "/bloc2" },
    { label: "Bloc 3", href: "/bloc3" },
    { label: "Bloc 4", href: "/bloc4" },
    { label: "Examen", href: "/referentiel" },
    { label: "Quiz", href: "/quiz" },
    { label: "Schémas", href: "/schemas" },
    { label: "Cadencier", href: "/cadencier" },
    { label: "Plans de masse", href: "/plans-masse" },
    { label: "Vidéos", href: "/videos" },
    { label: "Podcasts", href: "/podcasts" },
    { label: "Ressources", href: "/ressources" }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="text-2xl font-bold text-emerald-600">📚</div>
                <span className="font-playfair text-xl font-bold text-gray-900 hidden sm:inline">
                  CAP Commerce
                </span>
              </div>
            </Link>
            <div className="hidden md:block">
              <LiveVisitors />
            </div>
          </div>

          {/* Desktop Navigation & Tools */}
          <div className="hidden lg:flex items-center gap-4">
            <SearchBar />
            <div className="flex items-center gap-4 mr-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`font-poppins font-medium transition-colors text-sm ${
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
            <div className="flex items-center gap-2">
              <RealTimeClock />
              <UpdateNotes />
              <RadioPlayer />
            </div>
          </div>

          {/* Mobile Menu Button & Tools */}
          <div className="flex items-center gap-2 lg:hidden">
            <RealTimeClock />
            <UpdateNotes />
            <RadioPlayer />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <div className="px-4 py-3 sm:hidden">
               <SearchBar />
            </div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 font-poppins font-medium text-sm transition-colors ${
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
