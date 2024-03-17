import './App.css';
import {Router, Routes, Route, MainPage, SignInPage, SignUpPage, TliPage, TsiPage, CalculatorPage, InfoPage} from './pages'

function App() {
  return (
    <>  
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/tli" element={<TliPage />} />
          <Route path="/tsi" element={<TsiPage />} />
          <Route path="/calculate" element={<CalculatorPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>            
    </>
  );
}

export default App;
