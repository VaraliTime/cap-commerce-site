import { useState, useMemo } from "react";
import { Search } from "lucide-react";

interface Term {
  terme: string;
  definition: string;
}

interface InteractiveGlossaryProps {
  terms: Term[];
}

export default function InteractiveGlossary({ terms }: InteractiveGlossaryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return terms;
    
    const q = searchQuery.toLowerCase();
    return terms.filter(term => 
      term.terme.toLowerCase().includes(q) || 
      term.definition.toLowerCase().includes(q)
    );
  }, [terms, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Rechercher un terme..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Results Count */}
      {searchQuery && (
        <p className="text-sm text-gray-600">
          {filteredTerms.length} résultat{filteredTerms.length > 1 ? "s" : ""} trouvé{filteredTerms.length > 1 ? "s" : ""}
        </p>
      )}

      {/* Terms List */}
      <div className="space-y-3">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term) => (
            <button
              key={term.terme}
              onClick={() => setExpandedTerm(expandedTerm === term.terme ? null : term.terme)}
              className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-gray-900">
                    {term.terme}
                  </h3>
                  {expandedTerm === term.terme && (
                    <p className="text-gray-700 mt-3 leading-relaxed">
                      {term.definition}
                    </p>
                  )}
                </div>
                <span className="text-emerald-600 text-xl flex-shrink-0">
                  {expandedTerm === term.terme ? "−" : "+"}
                </span>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>Aucun terme trouvé pour "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
