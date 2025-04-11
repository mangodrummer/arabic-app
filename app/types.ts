export interface Phrase {
  english: string;
  arabic: string;
  franco: string;
  genderForms?: {
    masculine: string;
    feminine: string;
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