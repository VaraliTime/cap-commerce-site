import { useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CommercialCalculator = () => {
  const [calcType, setCalcType] = useState<'tva' | 'margin' | 'coefficient' | 'price'>('tva');
  const [values, setValues] = useState({ a: '', b: '', c: '' });
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (key: string, val: string) => {
    setValues(prev => ({ ...prev, [key]: val }));
  };

  const calculate = () => {
    const a = parseFloat(values.a);
    const b = parseFloat(values.b);
    const c = parseFloat(values.c);

    if (isNaN(a) || isNaN(b)) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    let res = 0;
    switch (calcType) {
      case 'tva':
        // TVA = Prix HT * Taux TVA / 100
        res = a * b / 100;
        break;
      case 'margin':
        // Marge = Prix de vente - Prix d'achat
        res = a - b;
        break;
      case 'coefficient':
        // Coefficient = Prix de vente TTC / Prix d'achat HT
        res = a / b;
        break;
      case 'price':
        // Prix TTC = Prix HT * (1 + Taux TVA / 100)
        res = a * (1 + b / 100);
        break;
    }
    setResult(Math.round(res * 100) / 100);
  };

  const reset = () => {
    setValues({ a: '', b: '', c: '' });
    setResult(null);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-blue-600" size={32} />
        <h2 className="text-3xl font-bold text-gray-900 font-playfair">Calculatrice Commerciale</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sélection du type de calcul */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest">Type de calcul</label>
          <div className="space-y-2">
            {[
              { id: 'tva', label: 'Calcul TVA', desc: 'TVA = Prix HT × Taux TVA ÷ 100' },
              { id: 'margin', label: 'Marge Commerciale', desc: 'Marge = PV - PA' },
              { id: 'coefficient', label: 'Coefficient Multiplicateur', desc: 'Coeff = PV TTC ÷ PA HT' },
              { id: 'price', label: 'Prix TTC', desc: 'Prix TTC = Prix HT × (1 + TVA ÷ 100)' }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => { setCalcType(type.id as any); reset(); }}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  calcType === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <p className="font-bold text-gray-900">{type.label}</p>
                <p className="text-xs text-gray-600 mt-1">{type.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Formulaire de calcul */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest">Paramètres</label>
          
          {calcType === 'tva' && (
            <>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Prix HT (€)</label>
                <Input
                  type="number"
                  placeholder="Ex: 100"
                  value={values.a}
                  onChange={(e) => handleInputChange('a', e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Taux TVA (%)</label>
                <Input
                  type="number"
                  placeholder="Ex: 20"
                  value={values.b}
                  onChange={(e) => handleInputChange('b', e.target.value)}
                  className="bg-white"
                />
              </div>
            </>
          )}

          {calcType === 'margin' && (
            <>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Prix de Vente (€)</label>
                <Input
                  type="number"
                  placeholder="Ex: 150"
                  value={values.a}
                  onChange={(e) => handleInputChange('a', e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Prix d'Achat (€)</label>
                <Input
                  type="number"
                  placeholder="Ex: 100"
                  value={values.b}
                  onChange={(e) => handleInputChange('b', e.target.value)}
                  className="bg-white"
                />
              </div>
            </>
          )}

          {calcType === 'coefficient' && (
            <>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Prix de Vente TTC (€)</label>
                <Input
                  type="number"
                  placeholder="Ex: 150"
                  value={values.a}
                  onChange={(e) => handleInputChange('a', e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Prix d'Achat HT (€)</label>
                <Input
                  type="number"
                  placeholder="Ex: 100"
                  value={values.b}
                  onChange={(e) => handleInputChange('b', e.target.value)}
                  className="bg-white"
                />
              </div>
            </>
          )}

          {calcType === 'price' && (
            <>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Prix HT (€)</label>
                <Input
                  type="number"
                  placeholder="Ex: 100"
                  value={values.a}
                  onChange={(e) => handleInputChange('a', e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Taux TVA (%)</label>
                <Input
                  type="number"
                  placeholder="Ex: 20"
                  value={values.b}
                  onChange={(e) => handleInputChange('b', e.target.value)}
                  className="bg-white"
                />
              </div>
            </>
          )}

          <div className="flex gap-2">
            <Button onClick={calculate} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2">
              Calculer
            </Button>
            <Button onClick={reset} variant="outline" className="flex-1 py-2">
              <RotateCcw size={16} className="mr-2" /> Réinitialiser
            </Button>
          </div>

          {result !== null && (
            <div className="mt-6 p-4 bg-blue-100 border-2 border-blue-500 rounded-lg">
              <p className="text-xs text-blue-700 font-semibold uppercase mb-2">Résultat</p>
              <p className="text-3xl font-bold text-blue-900">{result.toFixed(2)} €</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
