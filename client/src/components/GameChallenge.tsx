import { useState, useEffect, useCallback } from 'react';
import { Timer, Trophy, XCircle, CheckCircle2, Play, User, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number[];
  multiple: boolean;
  points: number;
}

interface ScoreEntry {
  name: string;
  score: number;
  date: string;
}

export const GameChallenge = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover' | 'saving'>('idle');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [playerName, setPlayerName] = useState('');
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);

  // Charger les données
  useEffect(() => {
    fetch('/game_data.json')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.questions);
        setLeaderboard(data.leaderboard || []);
      })
      .catch(err => console.error("Erreur chargement jeu:", err));
  }, []);

  const endGame = useCallback(() => {
    setGameState('gameover');
  }, []);

  // Chronomètre
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame();
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, endGame]);

  const startGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(30);
    setSelectedOptions([]);
    setGameState('playing');
  };

  const handleOptionClick = (index: number) => {
    if (gameState !== 'playing') return;
    
    const question = questions[currentQuestionIndex];
    if (question.multiple) {
      setSelectedOptions(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      checkAnswer([index]);
    }
  };

  const checkAnswer = (selected: number[]) => {
    const question = questions[currentQuestionIndex];
    const isCorrect = selected.length === question.correct.length && 
                     selected.every(val => question.correct.includes(val));

    if (isCorrect) {
      setScore(prev => prev + question.points);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(prev => prev + 1);
        setTimeLeft(30);
        setSelectedOptions([]);
      } else {
        // Fin des questions (victoire temporaire)
        setGameState('gameover');
      }
    } else {
      endGame();
    }
  };

  const saveScore = () => {
    if (!playerName.trim()) return;
    setGameState('saving');
    
    const newEntry: ScoreEntry = {
      name: playerName,
      score: score,
      date: new Date().toISOString()
    };

    // Note: Dans un vrai environnement, on ferait un POST vers une API
    // Ici on simule la sauvegarde locale et on informe l'utilisateur
    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    setLeaderboard(updatedLeaderboard);
    
    // Simulation de délai réseau
    setTimeout(() => {
      setGameState('idle');
      setPlayerName('');
    }, 1000);
  };

  if (gameState === 'idle') {
    return (
      <Card className="p-8 text-center bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100">
        <Trophy className="mx-auto text-amber-500 mb-4" size={64} />
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Défi CAP Commerce 🏆</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Testez vos connaissances ! 30 secondes par question. Une erreur et c'est fini. 
          Serez-vous sur le podium cette semaine ?
        </p>
        <Button onClick={startGame} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-xl rounded-full shadow-xl">
          <Play className="mr-2" /> Commencer le Défi
        </Button>
      </Card>
    );
  }

  if (gameState === 'gameover') {
    return (
      <Card className="p-8 text-center border-2 border-red-100">
        <XCircle className="mx-auto text-red-500 mb-4" size={64} />
        <h2 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">Partie Terminée !</h2>
        <p className="text-2xl font-bold text-emerald-600 mb-6">Score Final : {score}</p>
        
        <div className="max-w-sm mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enregistrez votre score</label>
          <div className="flex gap-2">
            <Input 
              placeholder="Votre prénom" 
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="bg-white"
            />
            <Button onClick={saveScore} disabled={!playerName.trim()} className="bg-emerald-600">
              Valider
            </Button>
          </div>
        </div>
        
        <Button variant="outline" onClick={() => setGameState('idle')} className="w-full">
          Retour au menu
        </Button>
      </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card className="p-6 border-2 border-emerald-500 shadow-2xl relative overflow-hidden">
      {/* Barre de progression temps */}
      <div className="absolute top-0 left-0 h-2 bg-gray-100 w-full">
        <div 
          className={`h-full transition-all duration-1000 ${timeLeft < 10 ? 'bg-red-500' : 'bg-emerald-500'}`}
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center mb-8 mt-2">
        <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full text-emerald-700 font-bold">
          <Trophy size={20} />
          <span>Score: {score}</span>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold ${timeLeft < 10 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-gray-50 text-gray-600'}`}>
          <Timer size={20} />
          <span>{timeLeft}s</span>
        </div>
      </div>

      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2 block">
          Question {currentQuestionIndex + 1} / {questions.length}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
          {currentQuestion?.question}
        </h3>
        {currentQuestion?.multiple && (
          <span className="text-sm text-blue-600 font-medium mt-2 block italic">
            * Plusieurs réponses possibles
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 mb-8">
        {currentQuestion?.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(idx)}
            className={`p-4 text-left rounded-xl border-2 transition-all flex items-center justify-between ${
              selectedOptions.includes(idx)
                ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                : 'border-gray-100 hover:border-emerald-200 hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span className="font-medium">{option}</span>
            {selectedOptions.includes(idx) && <CheckCircle2 className="text-emerald-500" size={20} />}
          </button>
        ))}
      </div>

      {currentQuestion?.multiple && (
        <Button 
          onClick={() => checkAnswer(selectedOptions)}
          disabled={selectedOptions.length === 0}
          className="w-full bg-emerald-600 py-6 text-lg rounded-xl"
        >
          Valider mes choix
        </Button>
      )}
    </Card>
  );
};
