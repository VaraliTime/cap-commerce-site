import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import Navigation from "@/components/Navigation";
import Quiz from "@/components/Quiz";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface QuizData {
  id: string;
  blocId: string;
  titre: string;
  description: string;
  questions: any[];
}

export default function QuizPage() {
  const [match, params] = useRoute("/quiz/:blocId");
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        const response = await fetch("/quiz.json");
        const data = await response.json();
        setQuizzes(data.quizzes || []);
      } catch (err) {
        console.error("Failed to load quizzes:", err);
      } finally {
        setLoading(false);
      }
    };
    loadQuizzes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600">Chargement des quiz...</p>
          </div>
        </main>
      </div>
    );
  }

  // Show specific quiz
  if (match && params?.blocId) {
    const quiz = quizzes.find(q => q.blocId === params.blocId);
    
    if (!quiz) {
      return (
        <div className="min-h-screen bg-white">
          <Navigation />
          <main className="container mx-auto px-4 py-12">
            <div className="text-center">
              <p className="text-red-600 mb-4">Quiz non trouvé</p>
              <Link href="/quiz">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Retour aux quiz
                </Button>
              </Link>
            </div>
          </main>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="container mx-auto px-4 py-12">
          <Link href="/quiz">
            <a className="text-emerald-600 hover:text-emerald-700 mb-6 inline-block">
              ← Retour aux quiz
            </a>
          </Link>
          
          <div className="mb-8">
            <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-2">
              {quiz.titre}
            </h1>
            <p className="text-xl text-gray-600">
              {quiz.description}
            </p>
          </div>

          <Quiz questions={quiz.questions} title={quiz.titre} />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2024 Réussir son CAP Commerce
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // Show quiz list
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            📝 Quiz de révision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Testez vos connaissances avec nos quiz interactifs. Chaque quiz contient des questions à choix multiples avec explications détaillées.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-2">
                {quiz.titre}
              </h2>
              <p className="text-gray-600 mb-4">
                {quiz.description}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {quiz.questions.length} questions
              </p>
              <Link href={`/quiz/${quiz.blocId}`}>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Commencer le quiz
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="font-poppins text-xl font-semibold text-blue-900 mb-4">
            💡 Conseils pour réussir les quiz
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Lisez attentivement chaque question</li>
            <li>• Prenez le temps de réfléchir avant de répondre</li>
            <li>• Utilisez les explications pour mieux comprendre</li>
            <li>• Révisez les sections où vous avez des doutes</li>
            <li>• Refaites les quiz pour progresser</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce
          </p>
        </div>
      </footer>
    </div>
  );
}
