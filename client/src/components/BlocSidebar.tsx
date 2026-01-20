import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Section {
  id: string;
  titre: string;
}

interface BlocSidebarProps {
  sections: Section[];
  activeSection: string | null;
  onSectionClick: (sectionId: string) => void;
  blocTitre: string;
}

export default function BlocSidebar({ 
  sections, 
  activeSection, 
  onSectionClick,
  blocTitre 
}: BlocSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
      >
        <ChevronDown size={24} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative top-16 lg:top-0 left-0 right-0 lg:right-auto
        w-full lg:w-64 h-[calc(100vh-64px)] lg:h-auto
        bg-white border-r border-gray-200
        overflow-y-auto
        transform transition-transform lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        z-30 lg:z-0
      `}>
        <div className="p-6">
          <h3 className="font-poppins font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
            Sections
          </h3>
          
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionClick(section.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 rounded transition-colors text-sm
                  ${activeSection === section.id
                    ? 'bg-emerald-50 text-emerald-600 font-semibold border-l-2 border-emerald-600'
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {section.titre}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
