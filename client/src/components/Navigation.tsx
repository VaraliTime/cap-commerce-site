import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, BookOpen, Gamepad2, LayoutDashboard, PlayCircle } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { LiveVisitors } from "./LiveVisitors";
import { RadioPlayer } from "./RadioPlayer";
import { UpdateNotes } from "./UpdateNotes";
import { RealTimeClock } from "./RealTimeClock";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navGroups = [
    {
      label: "Cours (Blocs)",
      icon: <BookOpen size={16} />,
      items: [
        { label: "Bloc 1 : Réception", href: "/bloc1" },
        { label: "Bloc 2 : Merch", href: "/bloc2" },
        { label: "Bloc 3 : Vente", href: "/bloc3" },
        { label: "Bloc 4 : PSE", href: "/bloc4" },
        { label: "Référentiel Examen", href: "/referentiel" },
      ]
    },
    {
      label: "Interactif",
      icon: <Gamepad2 size={16} />,
      items: [
        { label: "Quiz & Tests", href: "/quiz" },
        { label: "Mini-Jeux CAP", href: "/mini-jeux" },
      ]
    },
    {
      label: "Outils & Schémas",
      icon: <LayoutDashboard size={16} />,
      items: [
        { label: "Schémas Pédago", href: "/schemas" },
        { label: "Cadencier", href: "/cadencier" },
        { label: "Plans de masse", href: "/plans-masse" },
      ]
    },
    {
      label: "Média",
      icon: <PlayCircle size={16} />,
      items: [
        { label: "Vidéos", href: "/videos" },
        { label: "Podcasts", href: "/podcasts" },
        { label: "Ressources", href: "/ressources" },
      ]
    }
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Bandeau de notification */}
      <div className="bg-emerald-600 text-white py-2 px-4 text-center text-sm font-medium shadow-md">
        🚀 Nouvelles mises à jour : Découvrez le Simulateur de Caisse et les Podcasts interactifs ! 
        <Link href="/mini-jeux">
          <a className="underline ml-2 hover:text-emerald-100 transition-colors">Essayer maintenant →</a>
        </Link>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="text-2xl transform group-hover:scale-110 transition-transform">📚</div>
                  <span className="font-playfair text-xl font-bold text-gray-900 hidden sm:inline group-hover:text-emerald-600 transition-colors">
                    CAP Commerce
                  </span>
                </div>
              </Link>
              <div className="hidden xl:block">
                <LiveVisitors />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/">
                <a className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/") ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"}`}>
                  Accueil
                </a>
              </Link>

              {navGroups.map((group) => (
                <div 
                  key={group.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-all">
                    {group.icon}
                    {group.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-2 mt-1 transition-all duration-200 origin-top-left ${activeDropdown === group.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <a className={`block px-4 py-2 text-sm transition-colors ${isActive(item.href) ? "text-emerald-600 bg-emerald-50 font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"}`}>
                          {item.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Tools */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <SearchBar />
              </div>
              <RealTimeClock />
              <UpdateNotes />
              <RadioPlayer />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-100 animate-in slide-in-from-top duration-300">
              <div className="mt-4 px-2">
                <Link href="/">
                  <a onClick={() => setIsOpen(false)} className={`block py-3 px-4 rounded-xl font-medium mb-2 ${isActive("/") ? "bg-emerald-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}>
                    Accueil
                  </a>
                </Link>
                
                {navGroups.map((group) => (
                  <div key={group.label} className="mb-4">
                    <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      {group.icon}
                      {group.label}
                    </div>
                    <div className="grid grid-cols-1 gap-1 mt-1">
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <a
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 px-8 rounded-lg text-sm transition-colors ${isActive(item.href) ? "text-emerald-600 bg-emerald-50 font-bold" : "text-gray-600 hover:bg-gray-50"}`}
                          >
                            {item.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
