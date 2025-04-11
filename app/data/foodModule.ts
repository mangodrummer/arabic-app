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
              franco: '7ommos',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: I love eating ___ with pita bread',
                answer: 'حمص',
                hint: 'A creamy dip made from chickpeas'
              }
            },
            {
              english: 'Falafel',
              arabic: 'فلافل',
              franco: 'falafel',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What is falafel made from?',
                options: ['Chickpeas', 'Lentils', 'Rice', 'Wheat'],
                answer: 'Chickpeas'
              }
            },
            {
              english: 'Tabbouleh',
              arabic: 'تبولة',
              franco: 'tabbouleh',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: ___ is a salad made with parsley and bulgur',
                answer: 'تبولة',
                hint: 'Starts with ت'
              }
            },
            {
              english: 'Kibbeh',
              arabic: 'كبة',
              franco: 'kibbeh',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What is the main ingredient in kibbeh?',
                options: ['Lamb', 'Chicken', 'Beef', 'Fish'],
                answer: 'Lamb'
              }
            },
            {
              english: 'Fattoush',
              arabic: 'فتوش',
              franco: 'fattoush'
            },
            {
              english: 'Moutabal',
              arabic: 'متبل',
              franco: 'moutabal'
            },
            {
              english: 'Shawarma',
              arabic: 'شاورما',
              franco: 'shawarma'
            },
            {
              english: 'Manaqish',
              arabic: 'مناقيش',
              franco: 'manaqish'
            },
            {
              english: "I want to eat",
              arabic: "أريد أن آكل",
              franco: "Areed an akol",
              exercise: {
                type: 'fill-in-blank',
                prompt: "Complete the sentence: أريد أن ___ (I want to eat)",
                answer: "آكل",
                hint: "The verb starts with 'آ'"
              }
            },
            {
              english: "I want to drink",
              arabic: "أريد أن أشرب",
              franco: "Areed an ashrab",
              exercise: {
                type: 'multiple-choice',
                prompt: "What is the correct way to say 'I want to drink' in Arabic?",
                answer: "أريد أن أشرب",
                options: [
                  "أريد أن آكل",
                  "أريد أن أشرب",
                  "أريد أن أذهب",
                  "أريد أن أقرأ"
                ]
              }
            }
          ]
        },
        {
          title: 'Desserts',
          phrases: [
            {
              english: 'Baklava',
              arabic: 'بقلاوة',
              franco: 'baklawa',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: ___ is a sweet pastry with nuts and honey',
                answer: 'بقلاوة',
                hint: 'Starts with ب'
              }
            },
            {
              english: 'Knafeh',
              arabic: 'كنافة',
              franco: 'knafeh',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What is knafeh made with?',
                options: ['Cheese and semolina', 'Chocolate', 'Fruit', 'Cream'],
                answer: 'Cheese and semolina'
              }
            },
            {
              english: 'Maamoul',
              arabic: 'معمول',
              franco: 'ma3moul'
            },
            {
              english: 'Atayef',
              arabic: 'قطايف',
              franco: '2atayef'
            },
            {
              english: 'Mafroukeh',
              arabic: 'مفروكة',
              franco: 'mafroukeh'
            }
          ]
        },
        {
          title: 'Drinks',
          phrases: [
            {
              english: 'Arabic Coffee',
              arabic: 'قهوة عربية',
              franco: '2ahwe 3arabiyye'
            },
            {
              english: 'Tea with Mint',
              arabic: 'شاي بالنعنع',
              franco: 'shay bel na3na3'
            },
            {
              english: 'Ayran',
              arabic: 'عيران',
              franco: '3ayran'
            },
            {
              english: 'Jallab',
              arabic: 'جلاب',
              franco: 'jallab'
            },
            {
              english: "I am hungry",
              arabic: "أنا جائع",
              franco: "Ana gaa'",
              exercise: {
                type: 'fill-in-blank',
                prompt: "Complete the sentence: أنا ___ (I am hungry)",
                answer: "جائع",
                hint: "The word starts with 'ج'"
              }
            },
            {
              english: "I am thirsty",
              arabic: "أنا عطشان",
              franco: "Ana atshan",
              exercise: {
                type: 'multiple-choice',
                prompt: "What is the correct way to say 'I am thirsty' in Arabic?",
                answer: "أنا عطشان",
                options: [
                  "أنا جائع",
                  "أنا عطشان",
                  "أنا سعيد",
                  "أنا حزين"
                ]
              }
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
          },
          {
            question: 'What is the Arabic word for "Arabic Coffee"?',
            options: ['شاي بالنعنع', 'قهوة عربية', 'عيران'],
            correctAnswer: 'قهوة عربية'
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
              franco: '3am betbakh',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: ___ بطبخ (I am cooking)',
                answer: 'عم',
                hint: 'Starts with ع'
              }
            },
            {
              english: 'I am cutting',
              arabic: 'عم بقطع',
              franco: '3am be2ta3',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What does "عم بقطع" mean?',
                options: ['I am cooking', 'I am cutting', 'I am mixing', 'I am eating'],
                answer: 'I am cutting'
              }
            },
            {
              english: 'I am mixing',
              arabic: 'عم بخلط',
              franco: '3am bekhalet'
            },
            {
              english: 'I am frying',
              arabic: 'عم بقلي',
              franco: '3am be2li'
            },
            {
              english: 'I am boiling',
              arabic: 'عم بسلق',
              franco: '3am beslo2'
            },
            {
              english: 'I am baking',
              arabic: 'عم بخبز',
              franco: '3am bekhabbez'
            }
          ]
        },
        {
          title: 'Kitchen Items',
          phrases: [
            {
              english: 'Knife',
              arabic: 'سكينة',
              franco: 'sikkin',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: Please pass me the ___ (knife)',
                answer: 'سكينة',
                hint: 'Starts with س'
              }
            },
            {
              english: 'Pot',
              arabic: 'قدور',
              franco: '2edir',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What is the Arabic word for "pot"?',
                options: ['صحن', 'قدور', 'ملعقة', 'شوكة'],
                answer: 'قدور'
              }
            },
            {
              english: 'Plate',
              arabic: 'صحن',
              franco: 'sa7n'
            },
            {
              english: 'Spoon',
              arabic: 'ملعقة',
              franco: 'mal3a2a'
            },
            {
              english: 'Fork',
              arabic: 'شوكة',
              franco: 'shouka'
            },
            {
              english: 'Cutting Board',
              arabic: 'لوح تقطيع',
              franco: 'lo7 ta2ti3'
            }
          ]
        },
        {
          title: 'Ingredients',
          phrases: [
            {
              english: 'Salt',
              arabic: 'ملح',
              franco: 'mel7'
            },
            {
              english: 'Oil',
              arabic: 'زيت',
              franco: 'zeit'
            },
            {
              english: 'Garlic',
              arabic: 'ثوم',
              franco: 'toum'
            },
            {
              english: 'Onion',
              arabic: 'بصل',
              franco: 'basal'
            },
            {
              english: 'Lemon',
              arabic: 'ليمون',
              franco: 'laymoun'
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
          },
          {
            question: 'How do you say "garlic" in Arabic?',
            options: ['بصل', 'ثوم', 'ليمون'],
            correctAnswer: 'ثوم'
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
              franco: 'baddi atlob',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: ___ اطلب (I would like to order)',
                answer: 'بدي',
                hint: 'Starts with ب'
              }
            },
            {
              english: 'What do you recommend?',
              arabic: 'شو بتنصحني؟',
              franco: 'shu betnase7ni?',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What does "شو بتنصحني؟" mean?',
                options: ['What is the price?', 'What do you recommend?', 'Where is the bathroom?', 'How are you?'],
                answer: 'What do you recommend?'
              }
            },
            {
              english: 'The bill, please',
              arabic: 'الحساب من فضلك',
              franco: 'el 7esab min fadlak'
            },
            {
              english: 'Is this spicy?',
              arabic: 'هيدا حار؟',
              franco: 'hayda 7ar?'
            },
            {
              english: 'Can I have more bread?',
              arabic: 'بدي خبز زيادة',
              franco: 'baddi khabbez ziyade'
            },
            {
              english: 'Is there meat in this dish?',
              arabic: 'في لحمة بهيدا الطبق؟',
              franco: 'fi la7me behayda el taba2?'
            }
          ]
        },
        {
          title: 'Food Preferences',
          phrases: [
            {
              english: 'I am vegetarian',
              arabic: 'انا نباتي',
              franco: 'ana nabaati',
              exercise: {
                type: 'fill-in-blank',
                prompt: 'Complete the phrase: ___ نباتي (I am vegetarian)',
                answer: 'انا',
                hint: 'Starts with ا'
              }
            },
            {
              english: 'I am allergic to...',
              arabic: 'عندي حساسية من...',
              franco: '3andi 7asasiye min...'
            },
            {
              english: 'No spicy food, please',
              arabic: 'بدون حار من فضلك',
              franco: 'bidoun 7ar min fadlak',
              exercise: {
                type: 'multiple-choice',
                prompt: 'What does "بدون حار من فضلك" mean?',
                options: ['More bread please', 'No spicy food please', 'The bill please', 'Water please'],
                answer: 'No spicy food please'
              }
            },
            {
              english: 'I don\'t eat meat',
              arabic: 'ما باكل لحمة',
              franco: 'ma bakol la7me'
            },
            {
              english: 'I don\'t eat dairy',
              arabic: 'ما باكل حليب',
              franco: 'ma bakol 7aleeb'
            },
            {
              english: "I like",
              arabic: "أحب",
              franco: "Aheb",
              exercise: {
                type: 'fill-in-blank',
                prompt: "Complete the sentence: ___ الطعام (I like food)",
                answer: "أحب",
                hint: "The word starts with 'أ'"
              }
            },
            {
              english: "I don't like",
              arabic: "لا أحب",
              franco: "La aheb",
              exercise: {
                type: 'multiple-choice',
                prompt: "What is the correct way to say 'I don't like' in Arabic?",
                answer: "لا أحب",
                options: [
                  "أحب",
                  "لا أحب",
                  "أريد",
                  "لا أريد"
                ]
              }
            }
          ]
        },
        {
          title: 'Compliments & Feedback',
          phrases: [
            {
              english: 'This is delicious!',
              arabic: 'هيدا طيب كتير!',
              franco: 'hayda tayyeb kteer!'
            },
            {
              english: 'The food is amazing',
              arabic: 'الأكل لذيذ',
              franco: 'el akl laziz'
            },
            {
              english: 'Thank you for the meal',
              arabic: 'شكراً عالوجبة',
              franco: 'shukran 3al wajbe'
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
          },
          {
            question: 'How do you say "This is delicious" in Arabic?',
            options: ['هيدا طيب كتير!', 'الأكل لذيذ', 'شكراً عالوجبة'],
            correctAnswer: 'هيدا طيب كتير!'
          }
        ]
      }
    }
  ]
}; 