import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explication: string;
}

interface QuizProps {
  questions: Question[];
  title: string;
}

export default function Quiz({ questions, title }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const answeredCount = answers.filter(a => a !== null).length;
  const correctCount = answers.filter((a, i) => a === questions[i].correctAnswer).length;

  const handleSelectAnswer = (optionIndex: number) => {
    if (!showResults) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = optionIndex;
      setAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const percentage = Math.round((correctCount / questions.length) * 100);

  if (showResults) {
    return (
      <div className="space-y-6">
        <Card className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
          <div className="text-center">
            <div className="text-6xl font-bold text-emerald-600 mb-4">
              {percentage}%
            </div>
            <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-2">
              Quiz terminé !
            </h2>
            <p className="text-gray-700 text-lg">
              Vous avez obtenu <strong>{correctCount} / {questions.length}</strong> bonnes réponses
            </p>
          </div>
        </Card>

        {/* Feedback */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-poppins font-semibold text-blue-900 mb-3">
            {percentage >= 80 ? "🎉 Excellent travail !" : percentage >= 60 ? "👍 Bon résultat !" : "💪 Continuez vos révisions !"}
          </h3>
          <p className="text-blue-800">
            {percentage >= 80 
              ? "Vous maîtrisez bien ce sujet. Vous êtes prêt pour l'examen !"
              : percentage >= 60
              ? "Vous avez une bonne compréhension. Révisez les points faibles."
              : "Révisez ce bloc plus attentivement et retentez le quiz."}
          </p>
        </div>

        {/* Review Answers */}
        <div className="space-y-4">
          <h3 className="font-poppins font-semibold text-gray-900">Résumé des réponses :</h3>
          {questions.map((q, idx) => {
            const userAnswer = answers[idx];
            const isUserCorrect = userAnswer === q.correctAnswer;
            return (
              <Card key={q.id} className={`p-4 border-l-4 ${isUserCorrect ? "border-emerald-500 bg-emerald-50" : "border-red-500 bg-red-50"}`}>
                <div className="flex items-start gap-3">
                  {isUserCorrect ? (
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  ) : (
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-2">Question {idx + 1} : {q.question}</p>
                    <p className={`text-sm mb-2 ${isUserCorrect ? "text-emerald-700" : "text-red-700"}`}>
                      Votre réponse : {userAnswer !== null ? q.options[userAnswer] : "Non répondu"}
                    </p>
                    {!isUserCorrect && (
                      <p className="text-sm text-emerald-700 mb-2">
                        Bonne réponse : {q.options[q.correctAnswer]}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 italic">
                      💡 {q.explication}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Button
          onClick={handleReset}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
        >
          <RotateCcw size={18} className="mr-2" />
          Recommencer le quiz
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-600">
          Question {currentQuestionIndex + 1} / {questions.length}
        </span>
        <span className="text-sm text-gray-600">
          {answeredCount} répondu{answeredCount > 1 ? "es" : "e"}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-emerald-600 h-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <Card className="p-8 border border-gray-200">
        <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectOption = idx === currentQuestion.correctAnswer;
            let bgColor = "bg-white hover:bg-gray-50 border-gray-200";
            
            if (selectedAnswer !== null) {
              if (isSelected && isCorrect) {
                bgColor = "bg-emerald-50 border-emerald-500";
              } else if (isSelected && !isCorrect) {
                bgColor = "bg-red-50 border-red-500";
              } else if (isCorrectOption && !isCorrect) {
                bgColor = "bg-emerald-50 border-emerald-500";
              }
            } else if (isSelected) {
              bgColor = "bg-emerald-50 border-emerald-500";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${bgColor} ${selectedAnswer !== null ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected 
                      ? isCorrect 
                        ? "border-emerald-600 bg-emerald-600" 
                        : "border-red-600 bg-red-600"
                      : isCorrectOption && selectedAnswer !== null && !isCorrect
                      ? "border-emerald-600 bg-emerald-600"
                      : "border-gray-300"
                  }`}>
                    {isSelected && (isCorrect ? <CheckCircle size={16} className="text-white" /> : <XCircle size={16} className="text-white" />)}
                    {isCorrectOption && selectedAnswer !== null && !isCorrect && <CheckCircle size={16} className="text-white" />}
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {selectedAnswer !== null && (
          <div className={`p-4 rounded-lg ${isCorrect ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"}`}>
            <p className={`font-semibold mb-2 ${isCorrect ? "text-emerald-900" : "text-red-900"}`}>
              {isCorrect ? "✓ Correct !" : "✗ Incorrect"}
            </p>
            <p className={`text-sm ${isCorrect ? "text-emerald-800" : "text-red-800"}`}>
              💡 {currentQuestion.explication}
            </p>
          </div>
        )}
      </Card>

      {/* Navigation */}
      <div className="flex gap-4">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="outline"
          className="flex-1"
        >
          Précédent
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          {currentQuestionIndex === questions.length - 1 ? "Terminer" : "Suivant"}
        </Button>
      </div>
    </div>
  );
}
