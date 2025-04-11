'use client';

import { useState } from 'react';
import { Module, Phrase, Subject } from '../types';
import { foodModule } from '../data/foodModule';
import Link from 'next/link';

const PhraseCard = ({ phrase }: { phrase: Phrase }) => {
  const [gender, setGender] = useState<'masculine' | 'feminine'>('masculine');
  
  return (
    <div className="card group hover:scale-105 transition-transform duration-200">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">{phrase.english}</h3>
        <p className="text-3xl font-bold text-indigo-900 mt-2">{phrase.arabic}</p>
        <p className="text-gray-500 mt-1">{phrase.franco}</p>
      </div>
      <div className="flex gap-2 mt-4">
        {phrase.genderForms && (
          <button
            onClick={() => setGender(gender === 'masculine' ? 'feminine' : 'masculine')}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm hover:bg-indigo-200 transition-colors"
          >
            {gender === 'masculine' ? '♂' : '♀'}
          </button>
        )}
      </div>
    </div>
  );
};

const SubjectSection = ({ subject }: { subject: Subject }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-indigo-900 mb-6">{subject.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subject.phrases.map((phrase, index) => (
          <PhraseCard key={index} phrase={phrase} />
        ))}
      </div>
    </div>
  );
};

const LessonSection = ({ lesson }: { lesson: Module['lessons'][0] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-indigo-900 mb-2">{lesson.title}</h2>
      <p className="text-xl text-indigo-700 mb-8">{lesson.description}</p>
      {lesson.subjects.map((subject, index) => (
        <SubjectSection key={index} subject={subject} />
      ))}
    </div>
  );
};

export default function FoodModule() {
  const [currentModule] = useState<Module>(foodModule);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-indigo-900">{currentModule.title}</h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
        
        <p className="text-xl text-indigo-700 mb-8 text-center">{currentModule.description}</p>
        
        <div className="flex gap-4 mb-8 justify-center">
          {currentModule.lessons.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentLessonIndex(index)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                currentLessonIndex === index
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              Lesson {index + 1}
            </button>
          ))}
        </div>

        <LessonSection lesson={currentModule.lessons[currentLessonIndex]} />
      </div>
    </div>
  );
} 