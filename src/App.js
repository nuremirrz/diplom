import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Info from './pages/Info';

function App() {
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/info/:year/:district" element={<Info />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
