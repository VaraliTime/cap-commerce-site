import { useState, useEffect } from "react";
import { useBloc } from "../hooks/useBloc";
import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";
import { Card } from "./ui/card";

interface BlocPageProps {
  blocId: string;
}

const BlocPage = ({ blocId }: BlocPageProps) => {
  const { bloc, loading, error } = useBloc(blocId);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [expertMode, setExpertMode] = useState<Record<string, boolean>>({});

  const toggleExpertMode = (sectionId: string) => {
    setExpertMode(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`progress-${blocId}`);
    if (saved) {
      setCompletedSections(new Set(JSON.parse(saved)));
    }
  }, [blocId]);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(`progress-${blocId}`, JSON.stringify(Array.from(completedSections)));
  }, [completedSections, blocId]);

  const handleSectionClick = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
    // Mark as completed when clicked
    setCompletedSections(prev => new Set(prev).add(sectionId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <main className="container mx-auto px-4 py-24">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            <p className="text-emerald-800 font-bold animate-pulse">Préparation de vos ressources...</p>
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
          <div className="text-center text-red-600">
            <p>Erreur : {error || "Bloc non trouvé"}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 mt-16 lg:mt-0 bg-slate-50/50">
        {/* Header */}
        <div className="mb-12 p-8 rounded-[2.5rem] bg-white border border-white shadow-xl shadow-emerald-100/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-5xl shadow-inner">
                {bloc.icone}
              </div>
              <div>
                <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-1">Module de Formation</div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900">
                  {bloc.titre}
                </h1>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {bloc.description}
            </p>
          </div>
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

                  {/* Expert Mode Toggle */}
                  {section.synthese_approfondie && (
                    <div className="mb-8">
                      <button
                        onClick={() => toggleExpertMode(section.id)}
                        className={`w-full p-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all border-2 ${expertMode[section.id] ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-white text-indigo-600 border-indigo-100 hover:border-indigo-600'}`}
                      >
                        <span className="text-xl">{expertMode[section.id] ? "📖" : "🚀"}</span>
                        {expertMode[section.id] ? "Revenir à la fiche simplifiée" : "Développer la synthèse approfondie (Mode Expert)"}
                      </button>
                    </div>
                  )}

                  {/* Synthese Approfondie Content */}
                  {section.synthese_approfondie && expertMode[section.id] && (
                    <div className="mb-10 animate-in zoom-in-95 duration-300">
                      <div className="bg-indigo-900 text-white p-10 rounded-[3rem] shadow-2xl shadow-indigo-200 relative overflow-hidden border-4 border-indigo-500/30">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-2xl">🎓</div>
                            <h4 className="font-playfair text-3xl font-bold">{section.synthese_approfondie.titre}</h4>
                          </div>
                          
                          <p className="text-indigo-100 text-lg leading-relaxed mb-8 italic border-l-4 border-indigo-400 pl-6">
                            {section.synthese_approfondie.contenu}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Render dynamic lists based on available fields */}
                            {Object.entries(section.synthese_approfondie).map(([key, value]) => {
                              if (Array.isArray(value)) {
                                const labels: Record<string, string> = {
                                  conseils_pro: "Conseils de Pro",
                                  points_techniques: "Points Techniques",
                                  concepts_avances: "Concepts Avancés",
                                  formules_cles: "Formules Clés",
                                  regles_d_or: "Règles d'Or",
                                  techniques_avancees: "Techniques Avancées",
                                  notions_cles: "Notions Clés"
                                };
                                return (
                                  <div key={key} className="bg-white/10 p-6 rounded-3xl border border-white/10">
                                    <h5 className="font-bold text-indigo-300 mb-4 uppercase tracking-widest text-sm">{labels[key] || key}</h5>
                                    <ul className="space-y-3">
                                      {value.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3">
                                          <span className="text-indigo-400 mt-1">✦</span>
                                          <span className="text-sm font-medium">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
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
                  {(section.example || section.exemple) && (
                    <div className="mb-10 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-8 rounded-3xl relative overflow-hidden group">
                      <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500">
                        {(section.example || section.exemple).icone || "💡"}
                      </div>
                      <h4 className="font-poppins font-bold text-amber-800 mb-3 flex items-center gap-2 text-xl">
                        <span className="bg-amber-200 p-2 rounded-xl">{(section.example || section.exemple).icone || "💡"}</span>
                        {(section.example || section.exemple).titre}
                      </h4>
                      <p className="text-amber-900 leading-relaxed text-lg italic">
                        {(section.example || section.exemple).texte}
                      </p>
                    </div>
                  )}

                  {section.points_cles && (
                    <div className="mb-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm">📝</span>
                        À retenir impérativement :
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.points_cles.map((point: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                            <div className="w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex-shrink-0 mt-0.5 group-hover:bg-emerald-500 transition-colors"></div>
                            <span className="text-gray-700 font-medium">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.etapes && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm">🛤️</span>
                        Méthodologie pas à pas :
                      </h4>
                      <div className="space-y-4">
                        {section.etapes.map((etape: any) => (
                          <div key={etape.numero || etape.titre} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-emerald-100">
                              {etape.numero}
                            </div>
                            <div>
                              <h5 className="font-poppins font-bold text-gray-900 mb-2 text-lg">
                                {etape.titre}
                              </h5>
                              <p className="text-gray-600 leading-relaxed">{etape.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.documents && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm">📄</span>
                        Documents à maîtriser :
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.documents.map((doc: any, idx: number) => (
                          <div key={idx} className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-purple-200 transition-all group">
                            <h5 className="font-poppins font-bold text-purple-700 mb-3 text-lg flex items-center gap-2">
                              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                              {doc.nom}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">{doc.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.principes && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm">⚖️</span>
                        Principes fondamentaux :
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.principes.map((principe: any, idx: number) => (
                          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all">
                            <h5 className="font-poppins font-bold text-orange-700 mb-3 text-lg">
                              {principe.titre}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">{principe.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.objectifs && (
                    <div className="mb-10 bg-emerald-900 text-white p-8 rounded-[2.5rem] shadow-xl shadow-emerald-100 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                      <h4 className="font-poppins font-bold mb-6 flex items-center gap-2 text-xl">
                        <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">🎯</span>
                        Objectifs de la leçon :
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {section.objectifs.map((obj: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                            <span className="text-emerald-400 text-xl">★</span>
                            <span className="font-medium">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.cinq_b && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm">🖐️</span>
                        La règle des 5B :
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                        {section.cinq_b.map((item: any, idx: number) => (
                          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center hover:border-emerald-500 transition-all group">
                            <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
                              {item.lettre}
                            </div>
                            <h5 className="font-poppins font-bold text-gray-900 mb-2">{item.mot}</h5>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.explication}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.niveaux && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">📏</span>
                        Niveaux de présentation :
                      </h4>
                      <div className="space-y-4">
                        {section.niveaux.map((niveau: any, idx: number) => (
                          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-center hover:border-indigo-200 transition-all">
                            <div className="w-full md:w-48 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg shadow-indigo-100">
                              {niveau.hauteur}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-poppins font-bold text-gray-900 mb-1 text-lg">{niveau.nom}</h5>
                              <p className="text-gray-600 text-sm mb-2">{niveau.caracteristiques}</p>
                              <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold">
                                Exemple : {niveau.exemple}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.sbam && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-sm">😊</span>
                        La méthode SBAM :
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {section.sbam.map((item: any, idx: number) => (
                          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center hover:border-pink-500 transition-all group">
                            <div className="w-12 h-12 bg-pink-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg shadow-pink-100 group-hover:scale-110 transition-transform">
                              {item.lettre}
                            </div>
                            <h5 className="font-poppins font-bold text-gray-900 mb-2">{item.mot}</h5>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.cap && (
                    <div className="mb-10">
                      <h4 className="font-poppins font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center text-sm">💡</span>
                        La méthode CAP :
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {section.cap.map((item: any, idx: number) => (
                          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-cyan-500 transition-all group">
                            <div className="w-14 h-14 bg-cyan-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-6 shadow-lg shadow-cyan-100 group-hover:rotate-12 transition-transform">
                              {item.lettre}
                            </div>
                            <h5 className="font-poppins font-bold text-gray-900 mb-3 text-xl">{item.mot}</h5>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
};

export default BlocPage;
