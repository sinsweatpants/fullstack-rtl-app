import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDirectionStore } from './store/directionStore';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./app/pages/HomePage'));
const AboutPage = lazy(() => import('./app/pages/AboutPage'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
  </div>
);

function App() {
  const { direction, rtlEnabled } = useDirectionStore();

  useEffect(() => {
    // Set document direction based on store
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === 'rtl' ? 'ar' : 'en';
  }, [direction]);

  return (
    <Router>
      <div className={`min-h-screen ${rtlEnabled ? 'font-arabic' : 'font-sans'}`}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
