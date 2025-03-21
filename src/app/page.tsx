import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          مرحباً بك في تطبيق اللغة العربية
        </h1>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 text-right mb-4">
            هذا تطبيق لتعلم اللغة العربية
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              ابدأ التعلم
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
