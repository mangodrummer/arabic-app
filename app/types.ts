export interface Phrase {
  english: string;
  arabic: string;
  franco: string;
  genderForms?: {
    masculine: string;
    feminine: string;
  };
  exercise?: {
    type: 'fill-in-blank' | 'multiple-choice';
    prompt: string;
    answer: string;
    hint?: string;
    options?: string[];
  };
}

export interface Subject {
  title: string;
  phrases: Phrase[];
}

export interface Lesson {
  title: string;
  description: string;
  subjects: Subject[];
  quiz: {
    questions: {
      question: string;
      options: string[];
      correctAnswer: string;
    }[];
  };
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
} 