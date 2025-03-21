'use client';

import { useState } from 'react';
import Quiz from '@/components/Quiz';
import Image from 'next/image';

interface Phrase {
  english: string;
  arabic: string;
  franco: string;
  imageUrl: string;
  gender?: 'masculine' | 'feminine';
  feminineForm?: {
    arabic: string;
    franco: string;
  };
}

const phrases: Phrase[] = [
  {
    english: "Hello",
    arabic: "مرحبا",
    franco: "mar7aba",
    imageUrl: "/images/hello.jpg"
  },
  {
    english: "How are you?",
    arabic: "كيفك؟",
    franco: "kifak?",
    imageUrl: "/images/how-are-you.jpg",
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
    imageUrl: "/images/thank-you.jpg"
  },
  {
    english: "Good morning",
    arabic: "صباح الخير",
    franco: "sabah el kheir",
    imageUrl: "/images/good-morning.jpg"
  },
  {
    english: "Good night",
    arabic: "تصبح على خير",
    franco: "tsabbe7 3ala kheir",
    imageUrl: "/images/good-night.jpg"
  },
  {
    english: "Please",
    arabic: "من فضلك",
    franco: "min fadlak",
    imageUrl: "/images/please.jpg",
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
    imageUrl: "/images/youre-welcome.jpg"
  },
  {
    english: "Goodbye",
    arabic: "مع السلامة",
    franco: "ma3 el salame",
    imageUrl: "/images/goodbye.jpg"
  }
];

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'masculine' | 'feminine'>('masculine');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Learn Lebanese Arabic
        </h1>
        
        {!showQuiz ? (
          <>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedGender('masculine')}
                    className={`px-4 py-2 rounded ${
                      selectedGender === 'masculine'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Masculine
                  </button>
                  <button
                    onClick={() => setSelectedGender('feminine')}
                    className={`px-4 py-2 rounded ${
                      selectedGender === 'feminine'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Feminine
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                Common Phrases
              </h2>
              
              <div className="space-y-6">
                {phrases.map((phrase, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={phrase.imageUrl}
                          alt={phrase.english}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg text-gray-900 dark:text-white">{phrase.english}</span>
                          <span className="text-lg text-gray-900 dark:text-white">
                            {phrase.gender && selectedGender === 'feminine' && phrase.feminineForm
                              ? phrase.feminineForm.arabic
                              : phrase.arabic}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {phrase.gender && selectedGender === 'feminine' && phrase.feminineForm
                            ? phrase.feminineForm.franco
                            : phrase.franco}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                Practice
              </h2>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Quiz</h2>
              <button
                onClick={() => setShowQuiz(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Back to Phrases
              </button>
            </div>
            <Quiz selectedGender={selectedGender} />
          </div>
        )}
      </main>
    </div>
  );
}
