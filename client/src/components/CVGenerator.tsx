import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Plus, Trash2, FileText } from "lucide-react";
import { useState } from "react";

interface CVData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string[];
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    year: string;
  }>;
}

const commerceSkills = [
  "Tenue de caisse",
  "Mise en rayon",
  "Gestion d'inventaire",
  "Service client",
  "Merchandising",
  "Accueil client",
  "Encaissement",
  "Gestion des stocks",
  "Nettoyage et rangement",
  "Travail en équipe",
  "Communication",
  "Rigueur",
  "Polyvalence",
  "Sens de l'organisation"
];

export default function CVGenerator() {
  const [cvData, setCVData] = useState<CVData>({
    fullName: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "06 12 34 56 78",
    location: "Paris, France",
    summary: "Étudiant en CAP Équipier Polyvalent du Commerce, motivé et dynamique, cherchant un stage ou une alternance dans le secteur du retail.",
    skills: ["Tenue de caisse", "Mise en rayon", "Service client"],
    experience: [
      {
        id: "1",
        company: "Carrefour",
        position: "Équipier Polyvalent",
        duration: "Juin 2024 - Août 2024",
        description: "Mise en rayon, tenue de caisse, accueil client, gestion des stocks"
      }
    ],
    education: [
      {
        id: "1",
        school: "Lycée Professionnel XYZ",
        degree: "CAP Équipier Polyvalent du Commerce",
        year: "2024-2026"
      }
    ]
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>(cvData.skills);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setCVData({ ...cvData, skills: selectedSkills });
  };

  const addExperience = () => {
    setCVData({
      ...cvData,
      experience: [
        ...cvData.experience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          duration: "",
          description: ""
        }
      ]
    });
  };

  const removeExperience = (id: string) => {
    setCVData({
      ...cvData,
      experience: cvData.experience.filter(exp => exp.id !== id)
    });
  };

  const downloadCV = () => {
    const cvContent = `
${cvData.fullName}
${cvData.email} | ${cvData.phone} | ${cvData.location}

PROFIL
${cvData.summary}

COMPÉTENCES
${cvData.skills.join(", ")}

EXPÉRIENCE PROFESSIONNELLE
${cvData.experience.map(exp => `
${exp.position} - ${exp.company}
${exp.duration}
${exp.description}
`).join("\n")}

FORMATION
${cvData.education.map(edu => `
${edu.degree}
${edu.school} - ${edu.year}
`).join("\n")}
    `;

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(cvContent));
    element.setAttribute("download", `CV_${cvData.fullName.replace(/\s+/g, "_")}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <FileText className="text-blue-600" />
          Générateur de CV Commerce
        </h1>
        <p className="text-gray-600">Créez un CV professionnel mettant en avant vos compétences en commerce</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 border-none shadow-lg rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Informations Personnelles</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                value={cvData.fullName}
                onChange={(e) => setCVData({ ...cvData, fullName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={cvData.email}
                onChange={(e) => setCVData({ ...cvData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={cvData.phone}
                onChange={(e) => setCVData({ ...cvData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Localisation"
                value={cvData.location}
                onChange={(e) => setCVData({ ...cvData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Card>

          <Button
            onClick={downloadCV}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Télécharger CV
          </Button>
        </div>

        {/* Preview Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary */}
          <Card className="p-8 border-none shadow-lg rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
            <h3 className="text-lg font-bold mb-3">Profil Professionnel</h3>
            <textarea
              value={cvData.summary}
              onChange={(e) => setCVData({ ...cvData, summary: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              placeholder="Décrivez votre profil..."
            />
          </Card>

          {/* Skills */}
          <Card className="p-8 border-none shadow-lg rounded-2xl">
            <h3 className="text-lg font-bold mb-4">Compétences Clés</h3>
            <div className="flex flex-wrap gap-3">
              {commerceSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedSkills.includes(skill)
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-8 border-none shadow-lg rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Expérience Professionnelle</h3>
              <button
                onClick={addExperience}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all"
              >
                <Plus size={18} />
                Ajouter
              </button>
            </div>
            <div className="space-y-4">
              {cvData.experience.map((exp) => (
                <div key={exp.id} className="p-4 bg-gray-50 rounded-lg space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Entreprise"
                      value={exp.company}
                      onChange={(e) => {
                        const updated = cvData.experience.map(e => e.id === exp.id ? { ...e, company: e.target.value } : e);
                        setCVData({ ...cvData, experience: updated });
                      }}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Poste"
                    value={exp.position}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Durée (ex: Juin 2024 - Août 2024)"
                    value={exp.duration}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Description des tâches"
                    value={exp.description}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Tips */}
      <Card className="p-8 border-none shadow-lg rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50">
        <h3 className="text-lg font-bold mb-4">💡 Conseils pour Votre CV Commerce</h3>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Mettez en avant votre expérience en magasin, même si elle est courte</li>
          <li>✓ Listez toutes les compétences spécifiques au commerce (caisse, rayonnage, etc.)</li>
          <li>✓ Mentionnez votre polyvalence et votre capacité à travailler en équipe</li>
          <li>✓ Incluez vos stages, alternances et projets scolaires pertinents</li>
          <li>✓ Soyez précis sur les dates et les responsabilités</li>
        </ul>
      </Card>
    </div>
  );
}
