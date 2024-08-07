import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ApplicationForm from './pages/ApplicationForm';
import Home from './pages/Home'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/application-form" element={<ApplicationForm />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
);

export default App;
