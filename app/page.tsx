'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="title text-5xl md:text-6xl font-bold text-indigo-900">
            Learn Lebanese Arabic
          </h1>
          <p className="subtitle text-xl md:text-2xl text-indigo-700">
            Discover the rich flavors of Lebanese culture through language
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card group hover:scale-105 transition-transform duration-200">
            <div className="h-48 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🍽️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Food & Dining</h2>
            <p className="text-gray-600 mb-4">
              Learn essential phrases for ordering food, cooking, and dining in Lebanese restaurants
            </p>
            <button
              onClick={() => router.push('/food')}
              className="btn-primary w-full"
            >
              Start Learning
            </button>
          </div>

          <div className="card group hover:scale-105 transition-transform duration-200 opacity-50 cursor-not-allowed">
            <div className="h-48 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🛍️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Shopping</h2>
            <p className="text-gray-600 mb-4">
              Master phrases for shopping in Lebanese markets and stores (Coming Soon)
            </p>
            <button className="btn-primary w-full opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>

          <div className="card group hover:scale-105 transition-transform duration-200 opacity-50 cursor-not-allowed">
            <div className="h-48 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-6xl">🗣️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Daily Life</h2>
            <p className="text-gray-600 mb-4">
              Learn common phrases for everyday conversations (Coming Soon)
            </p>
            <button className="btn-primary w-full opacity-50 cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 