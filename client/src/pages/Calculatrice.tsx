import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Calculator, Percent, Euro, ArrowRightLeft } from "lucide-react";

export default function Calculatrice() {
  const [paht, setPaht] = useState<number>(0);
  const [pvht, setPvht] = useState<number>(0);
  const [tva, setTva] = useState<number>(20);
  const [pvttc, setPvttc] = useState<number>(0);
  const [marge, setMarge] = useState<number>(0);
  const [tauxMarque, setTauxMarque] = useState<number>(0);

  useEffect(() => {
    const calculatedPvttc = pvht * (1 + tva / 100);
    setPvttc(Number(calculatedPvttc.toFixed(2)));
    
    const calculatedMarge = pvht - paht;
    setMarge(Number(calculatedMarge.toFixed(2)));
    
    if (pvht > 0) {
      const calculatedTaux = (calculatedMarge / pvht) * 100;
      setTauxMarque(Number(calculatedTaux.toFixed(2)));
    }
  }, [paht, pvht, tva]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Calculator className="text-emerald-600" /> Calculatrice Commerciale
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Outil d'aide aux calculs de prix, marges et TVA pour le CAP EPC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 space-y-6 shadow-xl border-none bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b pb-2">
              <ArrowRightLeft size={20} className="text-emerald-500" /> Saisie des données
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paht">Prix d'Achat HT (€)</Label>
                <Input 
                  id="paht" 
                  type="number" 
                  value={paht || ''} 
                  onChange={(e) => setPaht(Number(e.target.value))}
                  placeholder="Ex: 10.50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pvht">Prix de Vente HT (€)</Label>
                <Input 
                  id="pvht" 
                  type="number" 
                  value={pvht || ''} 
                  onChange={(e) => setPvht(Number(e.target.value))}
                  placeholder="Ex: 15.90"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tva">Taux de TVA (%)</Label>
                <select 
                  id="tva"
                  className="w-full p-2 rounded-md border border-input bg-background"
                  value={tva}
                  onChange={(e) => setTva(Number(e.target.value))}
                >
                  <option value={20}>20% (Taux normal)</option>
                  <option value={10}>10% (Taux intermédiaire)</option>
                  <option value={5.5}>5.5% (Taux réduit)</option>
                  <option value={2.1}>2.1% (Taux super réduit)</option>
                </select>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-6 shadow-xl border-none bg-emerald-600 text-white">
            <h2 className="text-xl font-bold flex items-center gap-2 border-b border-emerald-400 pb-2">
              <Percent size={20} /> Résultats
            </h2>
            
            <div className="space-y-6">
              <div className="bg-emerald-700/50 p-4 rounded-xl">
                <p className="text-emerald-100 text-sm uppercase font-bold">Prix de Vente TTC</p>
                <p className="text-4xl font-bold">{pvttc} <span className="text-xl">€</span></p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-700/50 p-4 rounded-xl">
                  <p className="text-emerald-100 text-sm uppercase font-bold">Marge Brute</p>
                  <p className="text-2xl font-bold">{marge} €</p>
                </div>
                <div className="bg-emerald-700/50 p-4 rounded-xl">
                  <p className="text-emerald-100 text-sm uppercase font-bold">Taux de Marque</p>
                  <p className="text-2xl font-bold">{tauxMarque} %</p>
                </div>
              </div>

              <div className="text-xs text-emerald-100 italic space-y-1">
                <p>Formules utilisées :</p>
                <p>• PV TTC = PV HT × (1 + TVA/100)</p>
                <p>• Marge = PV HT - PA HT</p>
                <p>• Taux de Marque = (Marge / PV HT) × 100</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
