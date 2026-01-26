import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Receipt, CheckCircle2, XCircle, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function AnalyseTickets() {
  const [currentTicket, setCurrentTicket] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const tickets = [
    {
      id: 1,
      items: [
        { name: "Jus d'Orange 1L", price: 2.50, qty: 2, total: 5.00 },
        { name: "Pain de mie", price: 1.80, qty: 1, total: 1.80 },
        { name: "Remise Fidélité", price: -1.00, qty: 1, total: -1.00 },
      ],
      totalTTC: 5.80,
      error: "Aucune",
      explanation: "Le ticket est correct. 5.00 + 1.80 - 1.00 = 5.80."
    },
    {
      id: 2,
      items: [
        { name: "Lessive X-Tra", price: 12.90, qty: 1, total: 12.90 },
        { name: "Pack Eau 6x1.5L", price: 3.60, qty: 2, total: 7.20 },
      ],
      totalTTC: 21.10,
      error: "Erreur de calcul",
      explanation: "Il y a une erreur. 12.90 + 7.20 = 20.10, pas 21.10."
    }
  ];

  const handleCheck = (hasError: boolean) => {
    const ticketError = tickets[currentTicket].error !== "Aucune";
    setIsCorrect(hasError === ticketError);
    setShowResult(true);
    if (hasError === ticketError) {
      toast.success("Bien joué ! Bonne analyse.");
    } else {
      toast.error("Dommage, regardez bien les calculs.");
    }
  };

  const nextTicket = () => {
    setCurrentTicket((prev) => (prev + 1) % tickets.length);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 font-playfair">Analyse de Tickets</h1>
            <p className="text-gray-600">Repérez les erreurs de prix, de TVA ou de calcul sur les tickets de caisse.</p>
          </div>

          <Card className="bg-white dark:bg-gray-800 p-8 shadow-2xl rounded-[2.5rem] border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Receipt size={150} />
            </div>

            <div className="font-mono text-sm border-b-2 border-dashed border-gray-200 pb-6 mb-6">
              <div className="text-center mb-4">
                <h2 className="font-bold text-lg">SUPERMARCHÉ RÉUSSITE</h2>
                <p>69003 LYON</p>
                <p>Date: 22/01/2026</p>
              </div>
              <div className="space-y-2">
                {tickets[currentTicket].items.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.qty}x {item.name}</span>
                    <span>{item.total.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-xl font-bold">
                <span>TOTAL TTC</span>
                <span>{tickets[currentTicket].totalTTC.toFixed(2)}€</span>
              </div>
            </div>

            {!showResult ? (
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={() => handleCheck(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 py-6 rounded-2xl font-bold"
                >
                  <CheckCircle2 className="mr-2" /> Ticket Correct
                </Button>
                <Button 
                  onClick={() => handleCheck(true)}
                  variant="destructive"
                  className="py-6 rounded-2xl font-bold"
                >
                  <XCircle className="mr-2" /> Il y a une erreur
                </Button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-2xl mb-6 ${isCorrect ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}
              >
                <div className="flex items-center gap-2 font-bold mb-2">
                  {isCorrect ? <CheckCircle2 /> : <AlertTriangle />}
                  {isCorrect ? "Félicitations !" : "Oups..."}
                </div>
                <p className="text-sm">{tickets[currentTicket].explanation}</p>
                <Button 
                  onClick={nextTicket}
                  className="mt-4 w-full bg-gray-900 text-white hover:bg-black rounded-xl"
                >
                  <RefreshCw className="mr-2" size={16} /> Ticket Suivant
                </Button>
              </motion.div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
