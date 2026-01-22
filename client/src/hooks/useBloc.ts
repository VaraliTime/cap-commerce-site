import { useEffect, useState } from "react";

export interface BlocData {
  id: string;
  titre: string;
  description: string;
  icone: string;
  couleur: string;
  sections: Section[];
}

export interface Section {
  id: string;
  titre: string;
  contenu?: string;
  video_url?: string;
  exemple?: {
    titre: string;
    texte: string;
    icone?: string;
  };
  synthese_approfondie?: {
    titre: string;
    contenu: string;
    conseils_pro?: string[];
    points_techniques?: string[];
    concepts_avances?: string[];
    formules_cles?: string[];
    regles_d_or?: string[];
    techniques_avancees?: string[];
    notions_cles?: string[];
  };
  points_cles?: string[];
  etapes?: Etape[];
  documents?: Document[];
  principes?: Principe[];
  objectifs?: string[];
  cinq_b?: CinqB[];
  niveaux?: Niveau[];
  types?: Type[];
  sbam?: SBAM[];
  cap?: CAP[];
  techniques?: Technique[];
  points?: Point[];
}

export interface Etape {
  numero: number;
  titre: string;
  description: string;
}

export interface Document {
  nom: string;
  description: string;
}

export interface Principe {
  titre: string;
  description: string;
}

export interface CinqB {
  lettre: string;
  mot: string;
  explication: string;
}

export interface Niveau {
  nom: string;
  hauteur: string;
  caracteristiques: string;
  exemple: string;
}

export interface Type {
  type: string;
  description: string;
  importance: string;
}

export interface SBAM {
  lettre: string;
  mot: string;
  description: string;
}

export interface CAP {
  lettre: string;
  mot: string;
  description: string;
  exemple: string;
}

export interface Technique {
  etape: number;
  titre: string;
  description: string;
}

export interface Point {
  titre: string;
  description: string;
}

export const useBloc = (blocId: string) => {
  const [bloc, setBloc] = useState<BlocData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBloc = async () => {
      try {
        setLoading(true);
        const response = await fetch("/content.json");
        if (!response.ok) {
          throw new Error("Failed to load content");
        }
        const data = await response.json();
        const foundBloc = data.blocs.find((b: BlocData) => b.id === blocId);
        if (!foundBloc) {
          throw new Error(`Bloc ${blocId} not found`);
        }
        setBloc(foundBloc);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setBloc(null);
      } finally {
        setLoading(false);
      }
    };

    loadBloc();
  }, [blocId]);

  return { bloc, loading, error };
};
