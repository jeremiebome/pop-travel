// import './app.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import LandingPage from "./components/landingpage";
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Destination from './pages/Destination';
import './index.css'
import Newsletter from './components/Newsletter';


function App () {
  const location = useLocation();

  // Définir les routes où le header ne doit pas être visible
  const hideHeaderOnRoutes = ['/signin', '/signup'];
  return (
    <>
    {/* Afficher le Header uniquement si la route actuelle ne fait pas partie de celles spécifiées */}
    {!hideHeaderOnRoutes.includes(location.pathname) && <Header />}
    
    <div>
          
          
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          </Routes>
    </div>
    
    </>
  );
}
function MainApp() {
  return (
    <Router>
      <App />
      <Newsletter />
    </Router>
  );
}

export default MainApp;
