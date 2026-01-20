import { useState, useEffect } from 'react';
import { X, GraduationCap, BookOpen, Rocket, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été fermé dans cette session
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-emerald-500 transform animate-in zoom-in-95 duration-300">
        <div className="relative bg-emerald-600 p-8 text-center text-white">
          <button 
            onClick={closePopup}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap size={40} />
          </div>
          <h2 className="font-playfair text-3xl font-bold mb-2">Bienvenue les Apprentis ! 🎓</h2>
          <p className="text-emerald-100 font-medium">Le site est de nouveau accessible</p>
        </div>
        
        <div className="p-8 text-center">
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Salut à tous les futurs pros du commerce ! 👋
            </p>
            <p>
              Nous sommes ravis de vous retrouver. Le site a été mis à jour avec de nouveaux schémas et des cours encore plus complets pour vous aider à décrocher votre CAP ! 🚀
            </p>
            <p className="font-medium text-emerald-700">
              Passez un excellent moment de révision parmi nous ! ✨📚
            </p>
          </div>
          
          <div className="mt-8 flex flex-col gap-3">
            <Button 
              onClick={closePopup}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-xl rounded-2xl shadow-lg shadow-emerald-200 transition-all hover:scale-[1.02]"
            >
              C'est parti ! 🚀
            </Button>
            <div className="flex justify-center gap-2 text-emerald-500">
              <Heart size={16} className="fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">Bonne chance pour vos examens</span>
              <Heart size={16} className="fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
