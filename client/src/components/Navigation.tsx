import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, BookOpen, Gamepad2, LayoutDashboard, PlayCircle, UserCircle, Trophy, Brain, Briefcase, Calculator, GraduationCap, Store, CreditCard, Map, Mic, FileText } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { LiveVisitors } from "./LiveVisitors";
import { RadioPlayer } from "./RadioPlayer";
import UpdateNotifications from "./UpdateNotifications";
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
        { label: "Simulateur d'Examen", href: "/simulateur-examen" },
        { label: "Simulateur de Caisse", href: "/simulateur-caisse" },
        { label: "Flashcards Mémoire", href: "/flashcards" },
        { label: "Plan de Masse Interactif", href: "/plan-interactif" },
        { label: "Quiz & Tests", href: "/quiz" },
      ]
    },
    {
      label: "IA & Coaching",
      icon: <Brain size={16} />,
      items: [
        { label: "Coach IA Oral (EP3)", href: "/coach-ia" },
        { label: "Correcteur Dossier IA", href: "/dossier-pro" },
        { label: "Scénarios de Vente", href: "/coach-ia" },
        { label: "Glossaire Audio", href: "/glossaire" },
      ]
    },
    {
      label: "Carrière & Pro",
      icon: <Briefcase size={16} />,
      items: [
        { label: "Générateur de CV", href: "/dossier-pro" },
        { label: "Annuaire Enseignes", href: "/ressources" },
        { label: "Dossier Professionnel", href: "/dossier-pro" },
        { label: "Calculatrice Pro", href: "/calculatrice" },
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
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 text-center text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top duration-500">
        🏆 NOUVEAU : Rejoignez les Ligues et gagnez des badges ! 
        <Link href="/ligues">
          <a className="underline ml-2 hover:text-emerald-100 transition-colors font-bold">Voir le classement →</a>
        </Link>
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm dark:bg-gray-900/95 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="bg-emerald-100 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors dark:bg-emerald-900/30">
                    <div className="text-2xl transform group-hover:rotate-12 transition-transform">📚</div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-playfair text-xl font-bold text-gray-900 dark:text-white hidden sm:inline group-hover:text-emerald-600 transition-colors leading-none">
                      CAP Commerce
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase hidden sm:inline">
                      Réussite EPC
                    </span>
                  </div>
                </div>
              </Link>
              <div className="hidden xl:block">
                <LiveVisitors />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/">
                <a className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/") ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 hover:text-emerald-600 dark:hover:bg-gray-800"}`}>
                  Accueil
                </a>
              </Link>

              <Link href="/ligues">
                <a className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/ligues") ? "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 hover:text-yellow-600 dark:hover:bg-gray-800"}`}>
                  <Trophy size={16} className={isActive("/ligues") ? "text-yellow-600" : "text-yellow-500"} />
                  Ligues
                </a>
              </Link>

              {navGroups.map((group) => (
                <div 
                  key={group.label} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 hover:text-emerald-600 dark:hover:bg-gray-800 transition-all">
                    {group.icon}
                    {group.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-56 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl py-2 mt-1 transition-all duration-200 origin-top-left ${activeDropdown === group.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    {group.items.map((item) => (
                      <Link key={item.label} href={item.href}>
                        <a className={`block px-4 py-2 text-sm transition-colors ${isActive(item.href) ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 font-bold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-emerald-600"}`}>
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
              <Link href="/dashboard">
                <a className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all ${isActive("/dashboard") ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"}`}>
                  <UserCircle size={20} />
                  <span className="hidden sm:inline">Mon Profil</span>
                </a>
              </Link>
              <div className="hidden md:block">
                <SearchBar />
              </div>
              <RealTimeClock />
              <UpdateNotifications />
              <RadioPlayer />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300">
              <div className="mt-4 px-2">
                <Link href="/dashboard">
                  <a onClick={() => setIsOpen(false)} className={`flex items-center gap-3 py-4 px-4 rounded-xl font-bold mb-4 ${isActive("/dashboard") ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30"}`}>
                    <UserCircle size={24} /> Mon Tableau de Bord
                  </a>
                </Link>
                
                <Link href="/ligues">
                  <a onClick={() => setIsOpen(false)} className={`flex items-center gap-3 py-4 px-4 rounded-xl font-bold mb-4 ${isActive("/ligues") ? "bg-yellow-50 text-yellow-600" : "text-gray-700 dark:text-gray-400"}`}>
                    <Trophy size={24} className="text-yellow-500" /> Ligues & Classement
                  </a>
                </Link>

                <Link href="/">
                  <a onClick={() => setIsOpen(false)} className={`block py-3 px-4 rounded-xl font-medium mb-2 ${isActive("/") ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`}>
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
                        <Link key={item.label} href={item.href}>
                          <a
                            onClick={() => setIsOpen(false)}
                            className={`block py-2 px-8 rounded-lg text-sm transition-colors ${isActive(item.href) ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 font-bold" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"}`}
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
