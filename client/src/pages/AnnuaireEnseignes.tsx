import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Store, MapPin, Briefcase, ExternalLink, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function AnnuaireEnseignes() {
  const [searchTerm, setSearchTerm] = useState("");

  const enseignes = [
    { name: "Carrefour", type: "Grande Distribution", sector: "Alimentaire", recruitment: "Élevé", website: "https://recrute.carrefour.fr" },
    { name: "Decathlon", type: "GSS", sector: "Sport", recruitment: "Élevé", website: "https://recrutement.decathlon.fr" },
    { name: "Leroy Merlin", type: "GSS", sector: "Bricolage", recruitment: "Moyen", website: "https://recrutement.leroymerlin.fr" },
    { name: "Fnac Darty", type: "GSS", sector: "Culture/Électro", recruitment: "Moyen", website: "https://www.fnacdarty.com/carrieres/" },
    { name: "Lidl", type: "Hard Discount", sector: "Alimentaire", recruitment: "Très Élevé", website: "https://emplois.lidl.fr" },
    { name: "Zara", type: "GSS", sector: "Prêt-à-porter", recruitment: "Élevé", website: "https://www.inditexcareers.com" },
  ];

  const filteredEnseignes = enseignes.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.sector.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-playfair">Annuaire des Enseignes</h1>
          <p className="text-gray-600">Trouvez votre futur stage ou premier emploi parmi les enseignes qui recrutent des CAP EPC.</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher une enseigne ou un secteur (ex: Sport, Alimentaire)..." 
                className="pl-10 py-6 rounded-2xl border-none shadow-sm bg-white dark:bg-gray-800"
              />
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-2xl px-8">
              <Filter className="mr-2" size={18} /> Filtres
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEnseignes.map((e, i) => (
            <Card key={i} className="p-6 border-none shadow-lg bg-white dark:bg-gray-800 rounded-3xl hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-2xl">
                  <Store className="text-emerald-600" size={24} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  e.recruitment === 'Très Élevé' || e.recruitment === 'Élevé' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'bg-blue-100 text-blue-700'
                }`}>
                  Recrutement {e.recruitment}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{e.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{e.type} • {e.sector}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                <MapPin size={14} /> Partout en France
              </div>
              <Button 
                asChild
                variant="outline" 
                className="w-full rounded-xl border-2 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all"
              >
                <a href={e.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} /> Site Carrière
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
