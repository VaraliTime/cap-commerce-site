import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const CHATBOT_RESPONSES: { [key: string]: string } = {
  // Greetings
  'bonjour|salut|coucou|hello|hi': 'Bonjour ! 👋 Bienvenue sur CAP Commerce. Je suis ici pour répondre à vos questions sur les cours, les blocs de compétences et les modalités d\'examen. Comment puis-je vous aider ?',
  
  // Bloc 1 questions
  'bloc 1|réception|commande|stock': 'Le Bloc 1 porte sur la réception et le suivi des commandes. Vous y apprendrez à réceptionner les marchandises, contrôler les livraisons, gérer les stocks et utiliser les outils numériques. Voulez-vous en savoir plus sur une compétence spécifique ?',
  
  // Bloc 2 questions
  'bloc 2|rayon|merchandising|étiquette': 'Le Bloc 2 concerne la mise en valeur et l\'approvisionnement. Vous apprendrez à approvisionner les rayons, mettre en place du merchandising, étiqueter les produits et maintenir l\'état marchand du magasin.',
  
  // Bloc 3 questions
  'bloc 3|client|vente|accueil|sbam|cap': 'Le Bloc 3 traite du conseil et de l\'accompagnement du client. Vous y découvrirez la méthode SBAM (Sourire, Bonjour, Aide, Merci) pour l\'accueil, la méthode CAP pour l\'argumentation (Caractéristique, Avantage, Preuve), et les techniques de vente.',
  
  // Bloc 4 questions
  'bloc 4|pse|santé|prévention|environnement': 'Le Bloc 4 porte sur la Prévention-Santé-Environnement. Vous y étudierez la santé au travail, le sommeil, les risques professionnels, le cadre juridique et les gestes de premiers secours.',
  
  // Exam questions
  'examen|épreuve|ep1|ep2|ep3|diplôme|jour j': 'Les épreuves du CAP EPC sont au nombre de trois : EP1 (Réception - coef. 3), EP2 (Mise en valeur - coef. 4) et EP3 (Conseil client - coef. 5). Consultez la page "Examen" pour tous les détails, les compétences évaluées et les conseils d\'expert !',
  
  // Quiz questions
  'quiz|test|exercice|question': 'Nous proposons des quiz pour chaque bloc de compétences ! Accédez-y depuis la page Quiz pour tester vos connaissances et vous préparer aux épreuves.',
  
  // Schémas questions
  'schéma|diagramme|omnicanal|sbam|cap': 'Consultez la page "Schémas" pour voir des illustrations visuelles des concepts clés : l\'écosystème omnicanal, la méthode SBAM et la méthode CAP. Les schémas aident à mieux comprendre et mémoriser !',
  
  // General help
  'aide|help|besoin|question': 'Je suis là pour vous aider ! Vous pouvez me poser des questions sur les 4 blocs de compétences, les modalités d\'examen, les schémas, les quiz, ou n\'importe quel sujet lié au CAP Commerce.',
  
  // Encouragement
  'merci|thanks|merci beaucoup|super': 'De rien ! 😊 N\'hésitez pas à me poser d\'autres questions. Bonne chance pour vos révisions !',
  
  // Default
  'default': 'C\'est une bonne question ! Je ne suis pas sûr de la réponse précise. Je vous conseille de consulter les pages des blocs correspondants ou la page Examen pour plus de détails. Y a-t-il autre chose que je puisse vous aider ?'
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! 👋 Je suis l\'assistant CAP Commerce. Posez-moi vos questions sur les cours, les blocs de compétences ou les modalités d\'examen !',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    for (const [keywords, response] of Object.entries(CHATBOT_RESPONSES)) {
      if (keywords === 'default') continue;
      const keywordList = keywords.split('|');
      if (keywordList.some(keyword => lowerMessage.includes(keyword))) {
        return response;
      }
    }
    
    return CHATBOT_RESPONSES.default;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Assistant CAP Commerce</h3>
              <p className="text-xs text-emerald-100">Toujours disponible</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-emerald-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
