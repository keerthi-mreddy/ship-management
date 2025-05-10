import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  return (
    <Router basename='/ship-management'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
