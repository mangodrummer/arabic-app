'use client';

import { useState } from 'react';
import { Module, Phrase, Subject } from './types';
import { foodModule } from './data/foodModule';

const PhraseCard = ({ phrase }: { phrase: Phrase }) => {
  const [gender, setGender] = useState<'masculine' | 'feminine'>('masculine');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{phrase.english}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-2">{phrase.arabic}</p>
        <p className="text-gray-500 mt-1">{phrase.franco}</p>
      </div>
      <div className="flex gap-2">
        {phrase.genderForms && (
          <button
            onClick={() => setGender(gender === 'masculine' ? 'feminine' : 'masculine')}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
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
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{subject.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subject.phrases.map((phrase: Phrase, index: number) => (
          <PhraseCard key={index} phrase={phrase} />
        ))}
      </div>
    </div>
  );
};

const LessonSection = ({ lesson }: { lesson: Module['lessons'][0] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h2>
      <p className="text-gray-600 mb-6">{lesson.description}</p>
      {lesson.subjects.map((subject: Subject, index: number) => (
        <SubjectSection key={index} subject={subject} />
      ))}
    </div>
  );
};

export default function Home() {
  const [currentModule] = useState<Module>(foodModule);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{currentModule.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{currentModule.description}</p>
        
        <div className="flex gap-4 mb-8">
          {currentModule.lessons.map((_: Module['lessons'][0], index: number) => (
            <button
              key={index}
              onClick={() => setCurrentLessonIndex(index)}
              className={`px-4 py-2 rounded-md ${
                currentLessonIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Lesson {index + 1}
            </button>
          ))}
        </div>

        <LessonSection lesson={currentModule.lessons[currentLessonIndex]} />
      </div>
    </main>
  );
} 