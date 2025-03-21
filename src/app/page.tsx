'use client';

import { useState } from 'react';
import Quiz from '@/components/Quiz';
import AudioPlayer from '@/components/AudioPlayer';

interface Phrase {
  english: string;
  arabic: string;
  franco: string;
  audioUrl: string;
}

const phrases: Phrase[] = [
  {
    english: "Hello",
    arabic: "مرحبا",
    franco: "mar7aba",
    audioUrl: "/audio/mar7aba.m4a"
  },
  {
    english: "How are you?",
    arabic: "كيفك؟",
    franco: "kifak?",
    audioUrl: "/audio/kifak.m4a"
  },
  {
    english: "Thank you",
    arabic: "شكراً",
    franco: "shukran",
    audioUrl: "/audio/shukran.m4a"
  },
  {
    english: "Good morning",
    arabic: "صباح الخير",
    franco: "sabah el kheir",
    audioUrl: "/audio/sabah-el-kheir.m4a"
  }
];

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Learn Lebanese Arabic
        </h1>
        
        {!showQuiz ? (
          <>
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
                Common Phrases
              </h2>
              
              <div className="space-y-6">
                {phrases.map((phrase, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg text-gray-900 dark:text-white">{phrase.english}</span>
                      <span className="text-lg text-gray-900 dark:text-white">{phrase.arabic}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <AudioPlayer text={phrase.franco} audioUrl={phrase.audioUrl} />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{phrase.franco}</span>
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
            <Quiz />
          </div>
        )}
      </main>
    </div>
  );
}
