import { Module } from '../types';

export const foodModule: Module = {
  id: 'food',
  title: 'Lebanese Food & Dining',
  description: 'Learn about Lebanese food, cooking, and restaurant conversations',
  lessons: [
    {
      title: 'Common Lebanese Foods',
      description: 'Learn the names of popular Lebanese dishes and ingredients',
      subjects: [
        {
          title: 'Main Dishes',
          phrases: [
            {
              english: 'Hummus',
              arabic: 'حمص',
              franco: '7ommos'
            },
            {
              english: 'Falafel',
              arabic: 'فلافل',
              franco: 'falafel'
            },
            {
              english: 'Tabbouleh',
              arabic: 'تبولة',
              franco: 'tabbouleh'
            },
            {
              english: 'Kibbeh',
              arabic: 'كبة',
              franco: 'kibbeh'
            }
          ]
        },
        {
          title: 'Desserts',
          phrases: [
            {
              english: 'Baklava',
              arabic: 'بقلاوة',
              franco: 'baklawa'
            },
            {
              english: 'Knafeh',
              arabic: 'كنافة',
              franco: 'knafeh'
            },
            {
              english: 'Maamoul',
              arabic: 'معمول',
              franco: 'ma3moul'
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            question: 'What is the Arabic word for Hummus?',
            options: ['فلافل', 'حمص', 'تبولة', 'كبة'],
            correctAnswer: 'حمص'
          },
          {
            question: 'Which dessert is made with cheese and semolina?',
            options: ['بقلاوة', 'كنافة', 'معمول'],
            correctAnswer: 'كنافة'
          }
        ]
      }
    },
    {
      title: 'Cooking at Home',
      description: 'Learn phrases for cooking and kitchen conversations',
      subjects: [
        {
          title: 'Cooking Verbs',
          phrases: [
            {
              english: 'I am cooking',
              arabic: 'عم بطبخ',
              franco: '3am betbakh'
            },
            {
              english: 'I am cutting',
              arabic: 'عم بقطع',
              franco: '3am be2ta3'
            },
            {
              english: 'I am mixing',
              arabic: 'عم بخلط',
              franco: '3am bekhalet'
            }
          ]
        },
        {
          title: 'Kitchen Items',
          phrases: [
            {
              english: 'Knife',
              arabic: 'سكينة',
              franco: 'sikkin'
            },
            {
              english: 'Pot',
              arabic: 'قدور',
              franco: '2edir'
            },
            {
              english: 'Plate',
              arabic: 'صحن',
              franco: 'sa7n'
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            question: 'How do you say "I am cooking" in Arabic?',
            options: ['عم بقطع', 'عم بطبخ', 'عم بخلط'],
            correctAnswer: 'عم بطبخ'
          },
          {
            question: 'What is the Arabic word for "knife"?',
            options: ['قدور', 'صحن', 'سكينة'],
            correctAnswer: 'سكينة'
          }
        ]
      }
    },
    {
      title: 'Restaurant Conversations',
      description: 'Learn how to order food and have conversations in restaurants',
      subjects: [
        {
          title: 'Ordering Food',
          phrases: [
            {
              english: 'I would like to order',
              arabic: 'بدي اطلب',
              franco: 'baddi atlob'
            },
            {
              english: 'What do you recommend?',
              arabic: 'شو بتنصحني؟',
              franco: 'shu betnase7ni?'
            },
            {
              english: 'The bill, please',
              arabic: 'الحساب من فضلك',
              franco: 'el 7esab min fadlak'
            }
          ]
        },
        {
          title: 'Food Preferences',
          phrases: [
            {
              english: 'I am vegetarian',
              arabic: 'انا نباتي',
              franco: 'ana nabaati'
            },
            {
              english: 'I am allergic to...',
              arabic: 'عندي حساسية من...',
              franco: '3andi 7asasiye min...'
            },
            {
              english: 'No spicy food, please',
              arabic: 'بدون حار من فضلك',
              franco: 'bidoun 7ar min fadlak'
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            question: 'How do you say "I would like to order" in Arabic?',
            options: ['بدي اطلب', 'شو بتنصحني؟', 'الحساب من فضلك'],
            correctAnswer: 'بدي اطلب'
          },
          {
            question: 'How do you say "I am vegetarian" in Arabic?',
            options: ['انا نباتي', 'عندي حساسية من...', 'بدون حار من فضلك'],
            correctAnswer: 'انا نباتي'
          }
        ]
      }
    }
  ]
}; 