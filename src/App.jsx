import React, { useState } from 'react';
import Quiz from './components/Quiz.jsx';
import Analysis from './components/Analysis.jsx';
import Result from './components/Result.jsx';

import SalesPage from './components/SalesPage.jsx';

function App() {
  const [view, setView] = useState('quiz'); // quiz, analysis, result, sales

  const handleQuizFinish = () => {
    setView('analysis');
  };

  const handleAnalysisComplete = () => {
    setView('result');
  };

  const handleGoToSales = () => {
    setView('sales');
  };

  // Footer visibility toggle condition
  const showFooter = view !== 'sales'; // Optional: hide footer on sales page if needed, but keeping for consistency

  return (
    <div className="app-container">
      {view === 'quiz' && <Quiz onFinish={handleQuizFinish} />}
      {view === 'analysis' && <Analysis onComplete={handleAnalysisComplete} />}
      {view === 'result' && <Result onContinue={handleGoToSales} />}
      {view === 'sales' && <SalesPage />}

      {/* Footer Branding - Static Position */}
      <div style={{
        marginTop: '4rem',
        padding: '2rem 1rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        opacity: 0.5,
        width: '100%',
        position: 'relative',
        clear: 'both'
      }}>
        © 2026 CS Business. Todos os direitos reservados.
      </div>
    </div>
  );
}

export default App;
