import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Bloc3() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "sec1",
      titre: "Accueil du client - Méthode SBAM",
      contenu: "L'accueil est la première impression que le client a de votre magasin. La méthode SBAM garantit un accueil professionnel et chaleureux.",
      sbam: [
        { lettre: "S", mot: "Sourire", desc: "Accueillez le client avec un sourire sincère. Cela crée une atmosphère positive et rassurante." },
        { lettre: "B", mot: "Bonjour", desc: "Saluez le client poliment : 'Bonjour, bienvenue!' ou 'Bonjour, comment allez-vous?'. Utilisez le ton approprié." },
        { lettre: "A", mot: "Au revoir", desc: "À la fin de l'interaction, dites 'Au revoir' avec chaleur. Cela crée une dernière impression positive." },
        { lettre: "M", mot: "Merci", desc: "Remerciez le client pour son achat : 'Merci beaucoup!' ou 'Merci de votre visite!'. Montrez votre appréciation." }
      ]
    },
    {
      id: "sec2",
      titre: "Étapes de la vente",
      contenu: "La vente suit un processus structuré qui maximise les chances de conclure une transaction satisfaisante.",
      etapes: [
        { num: 1, titre: "Prise de contact", desc: "Accueillez le client avec la méthode SBAM. Montrez votre disponibilité et votre intérêt pour l'aider." },
        { num: 2, titre: "Découverte des besoins", desc: "Posez des questions ouvertes et fermées pour comprendre les besoins du client." },
        { num: 3, titre: "Argumentation", desc: "Présentez les produits en utilisant la méthode CAP : Caractéristique, Avantage, Preuve." },
        { num: 4, titre: "Traitement des objections", desc: "Écoutez les préoccupations du client, reformulez-les, puis répondez avec des arguments adaptés." },
        { num: 5, titre: "Vente additionnelle", desc: "Proposez des produits complémentaires ou des améliorations de manière discrète et pertinente." },
        { num: 6, titre: "Encaissement", desc: "Effectuez le paiement avec professionnalisme. Vérifiez les moyens de paiement, rendez la monnaie correctement." },
        { num: 7, titre: "Prise de congé", desc: "Remerciez le client, dites 'Au revoir' avec chaleur, invitez-le à revenir." }
      ]
    },
    {
      id: "sec3",
      titre: "Méthode CAP - Argumentation",
      contenu: "La méthode CAP est une technique d'argumentation efficace pour présenter les produits et convaincre le client.",
      cap: [
        { lettre: "C", mot: "Caractéristique", desc: "Décrivez les propriétés objectives du produit : 'Ce pull est en coton 100%, taille M, couleur bleu marine.'", exemple: "Ce produit contient 500ml, il est bio et sans additifs." },
        { lettre: "A", mot: "Avantage", desc: "Expliquez les bénéfices pour le client : 'Le coton est confortable et respirant, idéal pour l'été.'", exemple: "Cela signifie que vous avez un produit naturel, bon pour votre santé et l'environnement." },
        { lettre: "P", mot: "Preuve", desc: "Fournissez des preuves : avis clients, certifications, démonstration.", exemple: "Ce produit a reçu le label bio officiel et a été testé par 1000 clients satisfaits." }
      ]
    },
    {
      id: "sec4",
      titre: "Gestion des objections",
      contenu: "Les objections du client sont normales. Voici comment les gérer efficacement.",
      techniques: [
        { etape: 1, titre: "Écoute active", desc: "Écoutez complètement l'objection sans interrompre. Montrez que vous comprenez." },
        { etape: 2, titre: "Reformulation", desc: "Reformulez l'objection pour montrer votre compréhension : 'Si je comprends bien, vous trouvez le prix un peu élevé?'" },
        { etape: 3, titre: "Validation", desc: "Validez la préoccupation du client : 'C'est une excellente question, beaucoup de clients me posent la même.'" },
        { etape: 4, titre: "Réponse adaptée", desc: "Répondez avec des arguments pertinents : 'Oui, mais ce produit dure deux fois plus longtemps, donc c'est plus économique.'" }
      ]
    },
    {
      id: "sec5",
      titre: "Encaissement et fidélisation",
      contenu: "L'encaissement est l'étape finale de la vente. C'est aussi une opportunité de fidéliser le client.",
      points: [
        { titre: "Procédures de paiement", desc: "Maîtrisez tous les moyens de paiement : espèces, cartes bancaires, chèques, paiements numériques." },
        { titre: "Rendu de monnaie", desc: "Rendez la monnaie correctement et poliment. Comptez-la devant le client pour éviter les litiges." },
        { titre: "Carte de fidélité", desc: "Proposez l'inscription à la carte de fidélité : 'Avez-vous une carte de fidélité? Sinon, je peux vous l'ouvrir en 2 minutes!'" },
        { titre: "Emballage et présentation", desc: "Emballez les produits avec soin. Proposez un emballage cadeau si applicable. Cela améliore l'expérience client." },
        { titre: "Remerciements et invitation", desc: "Remerciez le client et invitez-le à revenir : 'Merci beaucoup! À bientôt!'" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">👥</span>
            <h1 className="font-playfair text-4xl font-bold text-gray-900">
              Bloc 3 : Conseil et accompagnement du client
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Maîtrisez les techniques de vente et d'accueil pour offrir un excellent service client. Ce bloc couvre l'accueil, les étapes de la vente et la fidélisation.
          </p>
        </div>

        {/* Schéma */}
        <div className="mb-12 bg-gray-50 rounded-lg p-8">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            Les 7 étapes de la vente
          </h2>
          <img 
            src="/images/etapes_vente.png" 
            alt="Étapes de la vente" 
            className="w-full max-w-2xl mx-auto"
          />
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section) => (
            <Card 
              key={section.id}
              className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-poppins text-xl font-semibold text-gray-900">
                  {section.titre}
                </h3>
                <span className="text-emerald-600 text-2xl">
                  {expandedSection === section.id ? "−" : "+"}
                </span>
              </button>

              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                  {section.contenu && (
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {section.contenu}
                    </p>
                  )}

                  {section.sbam && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Méthode SBAM :</h4>
                      <div className="space-y-3">
                        {section.sbam.map((s, idx) => (
                          <div key={idx} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-1">
                              <span className="text-emerald-600 text-lg font-bold">{s.lettre}</span> - {s.mot}
                            </h5>
                            <p className="text-gray-700">{s.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.etapes && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Les 7 étapes :</h4>
                      <div className="space-y-3">
                        {section.etapes.map((etape) => (
                          <div key={etape.num} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-2">
                              Étape {etape.num} : {etape.titre}
                            </h5>
                            <p className="text-gray-700">{etape.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.cap && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Méthode CAP :</h4>
                      <div className="space-y-3">
                        {section.cap.map((c, idx) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              <span className="text-lg">{c.lettre}</span> - {c.mot}
                            </h5>
                            <p className="text-gray-700 mb-2">{c.desc}</p>
                            <p className="text-gray-600 text-sm"><strong>Exemple :</strong> {c.exemple}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm mt-4 italic">Conseil : Adaptez votre argumentation au client et à ses besoins spécifiques</p>
                    </div>
                  )}

                  {section.techniques && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Techniques :</h4>
                      <div className="space-y-3">
                        {section.techniques.map((tech, idx) => (
                          <div key={idx} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-2">
                              Étape {tech.etape} : {tech.titre}
                            </h5>
                            <p className="text-gray-700">{tech.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.points && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Points clés :</h4>
                      <div className="space-y-3">
                        {section.points.map((point, idx) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {point.titre}
                            </h5>
                            <p className="text-gray-700">{point.desc}</p>
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

        {/* Fiche de révision */}
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded mb-12">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            📝 Fiche de révision rapide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                SBAM
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>S</strong>ourire</li>
                <li><strong>B</strong>onjour</li>
                <li><strong>A</strong>u revoir</li>
                <li><strong>M</strong>erci</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                CAP
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>C</strong>aractéristique</li>
                <li><strong>A</strong>vantage</li>
                <li><strong>P</strong>reuve</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                7 étapes de la vente
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>1. Prise de contact</li>
                <li>2. Découverte des besoins</li>
                <li>3. Argumentation</li>
                <li>4. Objections</li>
                <li>5. Vente additionnelle</li>
                <li>6. Encaissement</li>
                <li>7. Prise de congé</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce
          </p>
        </div>
      </footer>
    </div>
  );
}
