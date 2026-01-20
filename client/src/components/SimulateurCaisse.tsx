import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Coins, RotateCcw, CheckCircle2, AlertCircle } from "lucide-react";

export const SimulateurCaisse = () => {
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const [changeToGive, setChangeToGive] = useState(0);
  const [userChange, setUserChange] = useState(0);
  const [status, setStatus] = useState<'idle' | 'playing' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const startNewGame = () => {
    const newTotal = Math.floor(Math.random() * 4500 + 500) / 100; // Entre 5€ et 50€
    const possiblePayments = [10, 20, 50, 100].filter(p => p > newTotal);
    const newPaid = possiblePayments[Math.floor(Math.random() * possiblePayments.length)];
    
    setTotal(newTotal);
    setPaid(newPaid);
    setChangeToGive(Math.round((newPaid - newTotal) * 100) / 100);
    setUserChange(0);
    setStatus('playing');
    setMessage('');
  };

  const addMoney = (amount: number) => {
    if (status !== 'playing') return;
    setUserChange(prev => Math.round((prev + amount) * 100) / 100);
  };

  const validate = () => {
    if (userChange === changeToGive) {
      setStatus('success');
      setMessage('Parfait ! Le rendu de monnaie est exact.');
    } else {
      setStatus('error');
      setMessage(`Erreur. Vous avez rendu ${userChange}€ au lieu de ${changeToGive}€.`);
    }
  };

  const coins = [
    { label: '2€', value: 2, color: 'bg-amber-400' },
    { label: '1€', value: 1, color: 'bg-slate-300' },
    { label: '50c', value: 0.5, color: 'bg-amber-600/70' },
    { label: '20c', value: 0.2, color: 'bg-amber-600/60' },
    { label: '10c', value: 0.1, color: 'bg-amber-600/50' },
    { label: '5c', value: 0.05, color: 'bg-orange-400' },
  ];

  const bills = [
    { label: '50€', value: 50, color: 'bg-orange-200' },
    { label: '20€', value: 20, color: 'bg-blue-200' },
    { label: '10€', value: 10, color: 'bg-red-200' },
    { label: '5€', value: 5, color: 'bg-emerald-200' },
  ];

  return (
    <Card className="p-8 border-2 border-emerald-100 dark:border-emerald-900/30 bg-white dark:bg-gray-800 shadow-xl">
      <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 dark:border-gray-700">
        <ShoppingCart className="text-emerald-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Simulateur de Caisse</h2>
      </div>

      {status === 'idle' ? (
        <div className="text-center py-12">
          <Coins className="mx-auto text-emerald-200 mb-6" size={64} />
          <h3 className="text-xl font-bold mb-4">Prêt pour l'encaissement ?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Entraînez-vous à rendre la monnaie rapidement et sans erreur. Un réflexe essentiel du Bloc 3 !
          </p>
          <Button onClick={startNewGame} className="bg-emerald-600 hover:bg-emerald-700 px-12 py-6 text-lg rounded-2xl">
            Commencer le service
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ticket & Client */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Ticket de caisse</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total des achats</span>
                <span className="text-2xl font-mono font-bold">{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between items-center text-emerald-600 font-bold">
                <span>Le client donne</span>
                <span className="text-2xl font-mono">{paid.toFixed(2)} €</span>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <span className="font-bold text-gray-900 dark:text-white">À RENDRE</span>
                <span className="text-3xl font-black text-emerald-600 font-mono">?</span>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 flex items-center gap-2">
                <Coins size={20} /> Votre tiroir-caisse
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {bills.map(b => (
                  <button 
                    key={b.label}
                    onClick={() => addMoney(b.value)}
                    className={`${b.color} hover:brightness-95 active:scale-95 transition-all p-4 rounded-xl font-bold text-gray-800 shadow-sm border border-black/5`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {coins.map(c => (
                  <button 
                    key={c.label}
                    onClick={() => addMoney(c.value)}
                    className={`${c.color} hover:brightness-95 active:scale-95 transition-all p-3 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xs text-gray-800 shadow-sm border border-black/5 mx-auto`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Rendu actuel */}
          <div className="flex flex-col justify-between">
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] border-4 border-emerald-500 p-8 text-center shadow-2xl">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">Vous rendez actuellement :</h4>
              <div className="text-6xl font-black text-emerald-600 font-mono mb-4">
                {userChange.toFixed(2)} €
              </div>
              <Button variant="ghost" onClick={() => setUserChange(0)} className="text-gray-400 hover:text-red-500">
                <RotateCcw size={16} className="mr-2" /> Recommencer le rendu
              </Button>
            </div>

            <div className="space-y-4 mt-8">
              {status === 'playing' ? (
                <Button onClick={validate} className="w-full py-8 text-xl bg-emerald-600 hover:bg-emerald-700 rounded-2xl shadow-lg">
                  Valider le rendu
                </Button>
              ) : (
                <div className={`p-6 rounded-2xl border-2 flex items-center gap-4 animate-in zoom-in-95 ${status === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                  {status === 'success' ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
                  <div className="flex-1">
                    <p className="font-bold">{message}</p>
                    <Button onClick={startNewGame} variant="link" className={status === 'success' ? 'text-emerald-600 p-0' : 'text-red-600 p-0'}>
                      Client suivant →
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
