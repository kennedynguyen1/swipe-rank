export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900">SwipeRank</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl">
        The ultimate applicant ranking tool for clubs and organizations.
        Compare applicaitons, make fair decisions, and streamline your selection process.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
        Get Started
      </button>
    </main>
  );
}