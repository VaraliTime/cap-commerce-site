import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { CreditCard, Banknote, ShoppingCart, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, name: "Jus d'Orange Bio", price: 2.50, icon: "🍊" },
  { id: 2, name: "Pain de Mie", price: 1.20, icon: "🍞" },
  { id: 3, name: "Lessive Liquide", price: 8.90, icon: "🧼" },
  { id: 4, name: "Chocolat Noir", price: 1.80, icon: "🍫" },
  { id: 5, name: "Eau Minérale (x6)", price: 3.60, icon: "💧" }
];

export default function SimulateurCaisse() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Scan, 2: Payment, 3: Success

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(Number(newTotal.toFixed(2)));
  }, [cart]);

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, cartId: Math.random() }]);
  };

  const removeFromCart = (cartId: number) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const handlePayment = (method: string) => {
    setPaymentMethod(method);
    setStep(3);
    // XP Reward
    const currentXP = parseInt(localStorage.getItem("user_xp") || "0");
    localStorage.setItem("user_xp", (currentXP + 50).toString());
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <CreditCard className="text-emerald-600" /> Simulateur de Caisse
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Entraînez-vous à l'encaissement et à la relation client.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Product Selection */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-none shadow-xl bg-white dark:bg-gray-800 rounded-3xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShoppingCart size={20} className="text-emerald-500" /> Scanner les articles
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {products.map(p => (
                  <button
                    key={p.id}
                    onClick={() => addToCart(p)}
                    className="p-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 hover:border-emerald-500 transition-all text-center group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{p.icon}</div>
                    <div className="font-bold text-sm dark:text-white">{p.name}</div>
                    <div className="text-emerald-600 font-bold">{p.price.toFixed(2)} €</div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-none shadow-xl bg-white dark:bg-gray-800 rounded-3xl">
              <h2 className="text-xl font-bold mb-6">Ticket de caisse</h2>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-gray-400 italic text-center py-8">Aucun article scanné</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.cartId} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span>{item.icon}</span>
                        <span className="font-medium text-sm">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold">{item.price.toFixed(2)} €</span>
                        <button onClick={() => removeFromCart(item.cartId)} className="text-red-400 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>

          {/* Checkout Panel */}
          <div className="space-y-6">
            <Card className="p-8 border-none shadow-2xl bg-emerald-600 text-white rounded-[2.5rem] sticky top-24">
              <div className="text-center mb-8">
                <p className="text-emerald-100 text-sm uppercase font-bold tracking-widest mb-2">Total à payer</p>
                <p className="text-6xl font-bold">{total.toFixed(2)} <span className="text-2xl">€</span></p>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Button 
                      disabled={cart.length === 0}
                      onClick={() => setStep(2)}
                      className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-8 rounded-2xl font-bold text-lg shadow-lg"
                    >
                      Procéder au paiement
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                    <p className="text-center font-bold mb-4">Choisir le mode de règlement :</p>
                    <Button onClick={() => handlePayment('CB')} className="w-full bg-emerald-700 hover:bg-emerald-800 py-6 rounded-xl flex items-center justify-center gap-3">
                      <CreditCard size={20} /> Carte Bancaire
                    </Button>
                    <Button onClick={() => handlePayment('Espèces')} className="w-full bg-emerald-700 hover:bg-emerald-800 py-6 rounded-xl flex items-center justify-center gap-3">
                      <Banknote size={20} /> Espèces
                    </Button>
                    <Button variant="ghost" onClick={() => setStep(1)} className="w-full text-emerald-100 hover:text-white">
                      Retour aux articles
                    </Button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Paiement Accepté !</h3>
                    <p className="text-emerald-100 mb-8">N'oubliez pas de dire : "Merci, au revoir et bonne journée !"</p>
                    <Button 
                      onClick={() => {
                        setCart([]);
                        setStep(1);
                        setPaymentMethod(null);
                      }}
                      className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-6 rounded-xl font-bold"
                    >
                      Nouveau client
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-3xl border-2 border-amber-100 dark:border-amber-800">
              <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2 mb-2">
                <AlertCircle size={18} /> Rappel SBAM
              </h4>
              <p className="text-sm text-amber-700 dark:text-amber-300 italic">
                "Bonjour ! Avez-vous la carte de fidélité ? Cela fera {total.toFixed(2)} € s'il vous plaît."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
