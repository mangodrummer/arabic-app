import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Learn Lebanese Arabic
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
            Common Phrases
          </h2>
          
          <div className="space-y-6">
            {/* Greeting */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg text-gray-900 dark:text-white">Hello</span>
                <span className="text-lg text-gray-900 dark:text-white">مرحبا</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                mar7aba
              </div>
            </div>

            {/* How are you */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg text-gray-900 dark:text-white">How are you?</span>
                <span className="text-lg text-gray-900 dark:text-white">كيفك؟</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                kifak?
              </div>
            </div>

            {/* Thank you */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg text-gray-900 dark:text-white">Thank you</span>
                <span className="text-lg text-gray-900 dark:text-white">شكراً</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                shukran
              </div>
            </div>

            {/* Good morning */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg text-gray-900 dark:text-white">Good morning</span>
                <span className="text-lg text-gray-900 dark:text-white">صباح الخير</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                sabah el kheir
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
            Practice
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Start Quiz
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Listen & Repeat
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
