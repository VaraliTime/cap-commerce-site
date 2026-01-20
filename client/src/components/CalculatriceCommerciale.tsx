import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Percent, Euro, ArrowRightLeft } from "lucide-react";

export const CalculatriceCommerciale = () => {
  const [paht, setPaht] = useState<number>(0);
  const [marge, setMarge] = useState<number>(0);
  const [tauxMarque, setTauxMarque] = useState<number>(0);
  const [pvht, setPvht] = useState<number>(0);
  const [tva, setTva] = useState<number>(20);
  const [pvttc, setPvttc] = useState<number>(0);

  // Calculs automatiques
  useEffect(() => {
    const calculatedPvht = paht + marge;
    setPvht(calculatedPvht);
    
    const calculatedPvttc = calculatedPvht * (1 + tva / 100);
    setPvttc(calculatedPvttc);

    if (calculatedPvht > 0) {
      setTauxMarque((marge / calculatedPvht) * 100);
    }
  }, [paht, marge, tva]);

  return (
    <Card className="p-6 border-2 border-blue-100 dark:border-blue-900/30 bg-white dark:bg-gray-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6 border-b pb-4 border-gray-100 dark:border-gray-700">
        <Calculator className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
          Calculatrice Commerciale
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Euro size={16} /> Prix d'Achat HT (PAHT)
            </Label>
            <Input 
              type="number" 
              value={paht || ''} 
              onChange={(e) => setPaht(Number(e.target.value))}
              className="text-lg font-mono"
              placeholder="0.00"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <ArrowRightLeft size={16} /> Marge Commerciale (€)
            </Label>
            <Input 
              type="number" 
              value={marge || ''} 
              onChange={(e) => setMarge(Number(e.target.value))}
              className="text-lg font-mono"
              placeholder="0.00"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <Percent size={16} /> Taux de TVA (%)
            </Label>
            <select 
              value={tva} 
              onChange={(e) => setTva(Number(e.target.value))}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value={20}>20% (Taux normal)</option>
              <option value={10}>10% (Restauration, produits agri)</option>
              <option value={5.5}>5.5% (Alimentaire, produits essentiels)</option>
              <option value={2.1}>2.1% (Presse, médicaments remboursés)</option>
            </select>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 space-y-6">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-4">Résultats</h3>
          
          <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <span className="text-sm text-gray-600 dark:text-gray-400">Prix de Vente HT (PVHT)</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white font-mono">{pvht.toFixed(2)} €</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <span className="text-sm text-gray-600 dark:text-gray-400">Taux de Marque</span>
            <span className="text-xl font-bold text-blue-600 font-mono">{tauxMarque.toFixed(2)} %</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-blue-600 rounded-xl shadow-lg text-white">
            <span className="font-bold">Prix de Vente TTC</span>
            <span className="text-2xl font-black font-mono">{pvttc.toFixed(2)} €</span>
          </div>

          <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
            <p className="text-[10px] text-blue-700 dark:text-blue-400 uppercase font-bold tracking-widest mb-2">Formules utilisées :</p>
            <ul className="text-[10px] text-blue-600 dark:text-blue-500 space-y-1 italic">
              <li>• PVHT = PAHT + Marge</li>
              <li>• Taux de Marque = (Marge / PVHT) * 100</li>
              <li>• PVTTC = PVHT * (1 + Taux TVA)</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};
