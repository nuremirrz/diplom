import './App.css';
import {Router, Routes, Route, MainPage, SignInPage, SignUpPage, TliTsiPage, CalculatorPage, InfoPage, HydrochemicalPage} from './pages'

function App() {
  return (    
      <>  
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/tli-tsi" element={<TliTsiPage />} />
            <Route path="/hydrochem" element={<HydrochemicalPage />} />
            <Route path="/calculate" element={<CalculatorPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </Router>
      </>    
  );
}

export default App;
