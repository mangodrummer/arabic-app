'use client';

import { useState } from 'react';

interface Question {
  english: string;
  arabic: string;
  franco: string;
  options: string[];
  correctAnswer: string;
  gender?: 'masculine' | 'feminine';
  feminineForm?: {
    arabic: string;
    franco: string;
  };
}

interface QuizProps {
  selectedGender: 'masculine' | 'feminine';
}

const questions: Question[] = [
  {
    english: "Hello",
    arabic: "مرحبا",
    franco: "mar7aba",
    options: ["mar7aba", "kifak", "shukran", "sabah el kheir"],
    correctAnswer: "mar7aba"
  },
  {
    english: "How are you?",
    arabic: "كيفك؟",
    franco: "kifak?",
    options: ["kifak", "kifik", "shukran", "sabah el kheir"],
    correctAnswer: "kifak",
    gender: 'masculine',
    feminineForm: {
      arabic: "كيفكِ؟",
      franco: "kifik?"
    }
  },
  {
    english: "Thank you",
    arabic: "شكراً",
    franco: "shukran",
    options: ["mar7aba", "kifak", "shukran", "sabah el kheir"],
    correctAnswer: "shukran"
  },
  {
    english: "Good morning",
    arabic: "صباح الخير",
    franco: "sabah el kheir",
    options: ["mar7aba", "kifak", "shukran", "sabah el kheir"],
    correctAnswer: "sabah el kheir"
  },
  {
    english: "Good night",
    arabic: "تصبح على خير",
    franco: "tsabbe7 3ala kheir",
    options: ["tsabbe7 3ala kheir", "min fadlak", "3afwan", "ma3 el salame"],
    correctAnswer: "tsabbe7 3ala kheir"
  },
  {
    english: "Please",
    arabic: "من فضلك",
    franco: "min fadlak",
    options: ["min fadlak", "min fadlik", "3afwan", "ma3 el salame"],
    correctAnswer: "min fadlak",
    gender: 'masculine',
    feminineForm: {
      arabic: "من فضلكِ",
      franco: "min fadlik"
    }
  },
  {
    english: "You're welcome",
    arabic: "عفواً",
    franco: "3afwan",
    options: ["tsabbe7 3ala kheir", "min fadlak", "3afwan", "ma3 el salame"],
    correctAnswer: "3afwan"
  },
  {
    english: "Goodbye",
    arabic: "مع السلامة",
    franco: "ma3 el salame",
    options: ["tsabbe7 3ala kheir", "min fadlak", "3afwan", "ma3 el salame"],
    correctAnswer: "ma3 el salame"
  }
];

export default function Quiz({ selectedGender }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    const correctAnswer = questions[currentQuestion].gender === 'feminine' && 
      questions[currentQuestion].feminineForm
      ? questions[currentQuestion].feminineForm.franco
      : questions[currentQuestion].correctAnswer;

    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  if (showScore) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          Quiz Complete! Your score: {score} out of {questions.length}
        </h3>
        <button
          onClick={restartQuiz}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const correctAnswer = currentQuestionData.gender === 'feminine' && 
    currentQuestionData.feminineForm
    ? currentQuestionData.feminineForm.franco
    : currentQuestionData.correctAnswer;

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        <p className="text-2xl font-bold mb-4">What is "{currentQuestionData.english}" in Lebanese Arabic?</p>
        {currentQuestionData.gender && (
          <p className="text-sm text-gray-500 mb-2">
            {selectedGender === 'feminine' ? 'Feminine form' : 'Masculine form'}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`p-4 rounded-lg text-lg font-semibold transition-colors ${
              selectedAnswer === option
                ? option === correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 