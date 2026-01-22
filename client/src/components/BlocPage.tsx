import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import BlocSidebar from "@/components/BlocSidebar";
import ProgressBar from "@/components/ProgressBar";
import { useBloc, BlocData, Section } from "@/hooks/useBloc";

interface BlocPageProps {
  blocId: string;
}

export default function BlocPage({ blocId }: BlocPageProps) {
  const { bloc, loading, error } = useBloc(blocId);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  // Auto-expand first section on load
  useEffect(() => {
    if (bloc && bloc.sections.length > 0 && !expandedSection) {
      setExpandedSection(bloc.sections[0].id);
    }
  }, [bloc]);

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
    // Mark as completed when clicked
    setCompletedSections(prev => new Set(prev).add(sectionId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Chargement du contenu...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error || !bloc) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-red-600">Erreur : {error || "Bloc non trouvé"}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <Navigation />

      {/* Sidebar */}
      <BlocSidebar 
        sections={bloc.sections}
        activeSection={expandedSection}
        onSectionClick={handleSectionClick}
        blocTitre={bloc.titre}
      />

      <main className="flex-1 container mx-auto px-4 py-12 mt-16 lg:mt-0">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{bloc.icone}</span>
            <h1 className="font-playfair text-4xl font-bold text-gray-900">
              {bloc.titre}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            {bloc.description}
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar 
          current={completedSections.size}
          total={bloc.sections.length}
          title="Progression de révision"
        />

        {/* Sections */}
        <div className="space-y-8 mb-24">
          {bloc.sections.map((section: any, index: number) => (
            <Card 
              key={section.id}
              className={`border-2 overflow-hidden transition-all duration-300 ${expandedSection === section.id ? 'border-emerald-500 shadow-xl shadow-emerald-50' : 'border-gray-100 hover:border-emerald-200 shadow-sm'}`}
            >
              <button
                onClick={() => handleSectionClick(section.id)}
                className={`w-full p-8 text-left flex justify-between items-center transition-colors ${expandedSection === section.id ? 'bg-emerald-50/30' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-colors ${completedSections.has(section.id) ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {completedSections.has(section.id) ? "✓" : index + 1}
                  </div>
                  <h3 className={`font-poppins text-2xl font-bold transition-colors ${expandedSection === section.id ? 'text-emerald-700' : 'text-gray-900'}`}>
                    {section.titre}
                  </h3>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${expandedSection === section.id ? 'bg-emerald-600 text-white rotate-180' : 'bg-emerald-50 text-emerald-600'}`}>
                  <span className="text-2xl leading-none">{expandedSection === section.id ? "−" : "+"}</span>
                </div>
              </button>

              {expandedSection === section.id && (
                <div className="px-8 pb-10 border-t border-gray-100 bg-white animate-in slide-in-from-top-4 duration-300">
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-8"></div>
                  {section.contenu && (
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {section.contenu}
                    </p>
                  )}

                  {/* Video Integration */}
                  {section.video_url && (
                    <div className="mb-10 overflow-hidden rounded-3xl border-4 border-emerald-100 shadow-lg">
                      <div className="bg-emerald-600 text-white px-4 py-2 text-sm font-bold flex items-center gap-2">
                        <span>📺</span> Vidéo Pédagogique
                      </div>
                      <div className="aspect-video">
                        <iframe
                          src={section.video_url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {/* Example Box */}
                  {section.example && (
                    <div className="mb-10 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 rounded-3xl relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500">
                        {section.example.icone || "💡"}
                      </div>
                      <h4 className="font-poppins font-bold text-amber-800 mb-3 flex items-center gap-2 text-xl">
                        <span className="bg-amber-200 p-2 rounded-xl">{section.example.icone || "💡"}</span>
                        {section.example.titre}
                      </h4>
                      <p className="text-amber-900 leading-relaxed text-lg italic">
                        {section.example.texte}
                      </p>
                    </div>
                  )}

                  {/* Backward compatibility for 'exemple' field name */}
                  {section.exemple && (
                    <div className="mb-10 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 rounded-3xl relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500">
                        {section.exemple.icone || "💡"}
                      </div>
                      <h4 className="font-poppins font-bold text-amber-800 mb-3 flex items-center gap-2 text-xl">
                        <span className="bg-amber-200 p-2 rounded-xl">{section.exemple.icone || "💡"}</span>
                        {section.exemple.titre}
                      </h4>
                      <p className="text-amber-900 leading-relaxed text-lg italic">
                        {section.exemple.texte}
                      </p>
                    </div>
                  )}

                  {/* Schema Image Integration */}
                  {section.schema && (
                    <div className="mb-8 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4 text-center">
                        Schéma : {section.schema_titre || section.titre}
                      </h4>
                      <img 
                        src={section.schema} 
                        alt={section.schema_titre || section.titre}
                        className="max-w-full h-auto mx-auto rounded"
                      />
                    </div>
                  )}

                  {section.points_cles && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-3">Points clés :</h4>
                      <ul className="space-y-2">
                        {section.points_cles.map((point: string, idx: number) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.etapes && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Étapes :</h4>
                      <div className="space-y-4">
                        {section.etapes.map((etape: any) => (
                          <div key={etape.numero || etape.titre} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-2">
                              {etape.numero ? `Étape ${etape.numero} : ` : ""}{etape.titre}
                            </h5>
                            <p className="text-gray-700">{etape.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.documents && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Documents :</h4>
                      <div className="space-y-3">
                        {section.documents.map((doc: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {doc.nom}
                            </h5>
                            <p className="text-gray-700">{doc.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.principes && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Principes :</h4>
                      <div className="space-y-3">
                        {section.principes.map((principe: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {principe.titre}
                            </h5>
                            <p className="text-gray-700">{principe.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.objectifs && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-3">Objectifs :</h4>
                      <ul className="space-y-2">
                        {section.objectifs.map((obj: string, idx: number) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.cinq_b && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Les 5B :</h4>
                      <div className="space-y-3">
                        {section.cinq_b.map((item: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {item.lettre} - {item.mot}
                            </h5>
                            <p className="text-gray-700">{item.explication}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.niveaux && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Niveaux :</h4>
                      <div className="space-y-3">
                        {section.niveaux.map((niveau: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {niveau.nom} ({niveau.hauteur})
                            </h5>
                            <p className="text-gray-700 mb-2"><strong>Caractéristiques :</strong> {niveau.caracteristiques}</p>
                            <p className="text-gray-700"><strong>Exemple :</strong> {niveau.exemple}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.types && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Types :</h4>
                      <div className="space-y-3">
                        {section.types.map((type: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {type.type}
                            </h5>
                            <p className="text-gray-700 mb-2">{type.description}</p>
                            <p className="text-gray-600 text-sm"><strong>Importance :</strong> {type.importance}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.sbam && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Méthode SBAM :</h4>
                      <div className="space-y-3">
                        {section.sbam.map((item: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {item.lettre} - {item.mot}
                            </h5>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.cap && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Méthode CAP :</h4>
                      <div className="space-y-3">
                        {section.cap.map((item: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {item.lettre} - {item.mot}
                            </h5>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            <p className="text-gray-600 text-sm"><strong>Exemple :</strong> {item.exemple}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.conseils && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Conseils :</h4>
                      <div className="space-y-3">
                        {section.conseils.map((conseil: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {conseil.titre}
                            </h5>
                            <p className="text-gray-700">{conseil.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.risques && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Risques :</h4>
                      <div className="space-y-3">
                        {section.risques.map((risque: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {risque.nom}
                            </h5>
                            <p className="text-gray-700 mb-2">{risque.description}</p>
                            <p className="text-gray-600 text-sm"><strong>Prévention :</strong> {risque.prevention}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.regles && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Règles :</h4>
                      <div className="space-y-3">
                        {section.regles.map((regle: any, idx: number) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {regle.titre}
                            </h5>
                            <p className="text-gray-700">{regle.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
