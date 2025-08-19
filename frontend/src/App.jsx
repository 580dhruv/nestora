import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import InputFormPage from './pages/InputFormPage';
import PredictionResultPage from './pages/PredictionResultPage';
import LoginPage from './pages/LoginPage';
import SellPropertyPage from './pages/SellPropertyPage';
import BuyPropertyPage from './pages/BuyPropertyPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/input" element={<InputFormPage />} />
        <Route path="/result" element={<PredictionResultPage />} />
        <Route path="/sell" element={<SellPropertyPage/>}/>
        <Route path="/buy" element={<BuyPropertyPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/privacy" element={<PrivacyPage/>}/>
        <Route path="/terms" element={<TermsPage/>}/>
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
