
import React, { useState } from 'react';

// Define page types
type Page = 'home' | 'details';

// New component for the "Details" page
const DetailsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="p-6 bg-slate-700/40 rounded-lg shadow-lg ring-1 ring-slate-700 animate-fadeIn">
      <h2 className="text-3xl font-semibold text-emerald-400 mb-4">Details Page</h2>
      <p className="text-slate-300 leading-relaxed mb-6">
        This is the details page. You navigated here from the home page.
        This demonstrates simple client-side routing within the same application.
      </p>
      <button
        onClick={() => onNavigate('home')}
        aria-label="Go back to Home page"
        className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75 active:bg-slate-700"
      >
        Back to Home
      </button>
    </div>
  );
};

// Component for the "Home" page content (existing content)
const HomePage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="p-6 bg-slate-700/40 rounded-lg shadow-lg ring-1 ring-slate-700 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-sky-300 mb-3">Welcome!</h2>
        <p className="text-slate-300 leading-relaxed">
          This is a basic React application styled with Tailwind CSS.
          It's a starting point to test the setup and build more complex UIs.
        </p>
      </div>

      <div className="p-6 bg-slate-700/40 rounded-lg shadow-lg ring-1 ring-slate-700 flex flex-col items-center">
        <h2 className="text-xl font-medium text-sky-300 mb-4">Interactive Counter</h2>
        <p className="text-6xl font-bold text-white mb-5 tabular-nums" aria-live="polite">{count}</p>
        <button
          onClick={() => setCount(prevCount => prevCount + 1)}
          aria-label="Increment counter"
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 active:bg-sky-700 transform active:scale-95"
        >
          Increment
        </button>
      </div>

      <div className="p-6 bg-slate-700/40 rounded-lg shadow-lg ring-1 ring-slate-700 text-center">
        <h2 className="text-xl font-medium text-sky-300 mb-4">Navigation</h2>
        <button
          onClick={() => onNavigate('details')}
          aria-label="Go to Details page"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75 active:bg-emerald-700"
        >
          Go to Details Page
        </button>
      </div>
    </>
  );
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center p-4 sm:p-6 selection:bg-sky-500 selection:text-white">
      <div className="bg-slate-800/60 backdrop-blur-lg shadow-2xl rounded-xl p-6 sm:p-8 max-w-lg w-full">
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 pb-2">
            {currentPage === 'home' ? 'React Test App' : 'Details View'}
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            {currentPage === 'home' ? 'A simple demonstration of React and Tailwind CSS.' : 'Exploring different sections of the app.'}
          </p>
        </header>

        <main className="space-y-6" role="main" aria-live="polite">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
          {currentPage === 'details' && <DetailsPage onNavigate={handleNavigation} />}
        </main>

        <footer className="mt-10 pt-6 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-500">
            Powered by React &amp; Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
