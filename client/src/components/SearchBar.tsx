import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Link } from "wouter";

interface SearchResult {
  type: "bloc" | "section" | "glossaire";
  title: string;
  description?: string;
  link: string;
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [allContent, setAllContent] = useState<any>(null);

  // Load content on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch("/content.json");
        const data = await response.json();
        setAllContent(data);
      } catch (err) {
        console.error("Failed to load content for search:", err);
      }
    };
    loadContent();
  }, []);

  // Search through content
  useEffect(() => {
    if (!query.trim() || !allContent) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search blocs
    allContent.blocs?.forEach((bloc: any) => {
      if (bloc.titre.toLowerCase().includes(q)) {
        newResults.push({
          type: "bloc",
          title: bloc.titre,
          description: bloc.description,
          link: `/${bloc.id}`
        });
      }

      // Search sections
      bloc.sections?.forEach((section: any) => {
        if (section.titre.toLowerCase().includes(q)) {
          newResults.push({
            type: "section",
            title: section.titre,
            description: bloc.titre,
            link: `/${bloc.id}`
          });
        }
      });
    });

    // Search glossaire
    allContent.ressources?.glossaire?.forEach((term: any) => {
      if (term.terme.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q)) {
        newResults.push({
          type: "glossaire",
          title: term.terme,
          description: term.definition,
          link: "/ressources"
        });
      }
    });

    setResults(newResults.slice(0, 8)); // Limit to 8 results
  }, [query, allContent]);

  return (
    <>
      {/* Search Button in Navigation */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 text-sm"
      >
        <Search size={16} />
        <span>Rechercher...</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          {/* Search Box */}
          <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg shadow-xl z-10">
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
              <Search size={20} className="text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Rechercher un bloc, une section, un terme..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none text-gray-900 placeholder-gray-500"
              />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result, idx) => (
                  <Link key={idx} href={result.link}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-semibold text-emerald-600 uppercase mt-1">
                          {result.type === "bloc" ? "Bloc" : result.type === "section" ? "Section" : "Glossaire"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {result.title}
                          </p>
                          {result.description && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {result.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results */}
            {query.trim() && results.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                <p>Aucun résultat trouvé pour "{query}"</p>
              </div>
            )}

            {/* Empty State */}
            {!query.trim() && (
              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                <p>Tapez pour rechercher...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
