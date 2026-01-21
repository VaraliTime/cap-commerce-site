import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { AdvancedLiveVisitors } from "./AdvancedLiveVisitors";
import { RadioPlayer } from "./RadioPlayer";
import { UpdateNotifications } from "./UpdateNotifications";
import Clock from "./Clock";
import CustomerCounter from "./CustomerCounter";
import NotificationSystem from "./NotificationSystem";
import { DarkModeToggle } from "./DarkModeToggle";

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
    { label: "Ateliers", href: "/ateliers" },
    { label: "Examens", href: "/examens" },
    { label: "Quiz", href: "/quiz" },
    { label: "Schémas", href: "/schemas" },
    { label: "Podcasts", href: "/podcasts" },
    { label: "Ressources", href: "/ressources" },
    { label: "Outils", href: "/outils" },
    { label: "Annales", href: "/annales" }
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all">
      <div className="container max-w-[1600px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Visitors */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-3xl transform group-hover:scale-110 transition-transform">📚</div>
                <span className="font-playfair text-2xl font-black text-gray-900 dark:text-white hidden xl:inline tracking-tight">
                  CAP <span className="text-emerald-600">Commerce</span>
                </span>
              </div>
            </Link>
            <div className="hidden lg:block border-l border-gray-200 dark:border-gray-700 pl-8">
              <AdvancedLiveVisitors />
            </div>
          </div>

          {/* Desktop Navigation & Tools */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
            <div className="max-w-xs w-full">
              <SearchBar />
            </div>
            
            <div className="flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`px-3 py-2 rounded-xl font-poppins font-semibold transition-all text-[12px] xl:text-sm whitespace-nowrap ${
                      isActive(item.href)
                        ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700">
              <Clock />
              <CustomerCounter />
              <NotificationSystem />
              <DarkModeToggle />
              <UpdateNotifications />
              <RadioPlayer />
            </div>
          </div>

          {/* Mobile Menu Button & Tools */}
          <div className="flex items-center gap-3 lg:hidden">
            <DarkModeToggle />
            <RadioPlayer />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-8 pt-4 border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-4 duration-300">
            <div className="px-2 py-4">
               <SearchBar />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-center py-4 px-4 rounded-2xl font-poppins font-bold text-sm transition-all ${
                      isActive(item.href)
                        ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 shadow-inner"
                        : "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
