import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar      from './components/Navbar';
import Home        from './pages/Home';
import Stars       from './pages/Stars';
import StarDetail  from './pages/StarDetail';
import Recommended from './pages/Recommended';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/stars"       element={<Stars />} />
        <Route path="/stars/:id"   element={<StarDetail />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="*" element={
          <main className="min-h-screen flex flex-col items-center justify-center">
            <p style={{ fontFamily:"'Bebas Neue',cursive", fontSize:"6rem" }}
               className="text-white">404</p>
            <p className="text-ghost">Page not found.</p>
          </main>
        }/>
      </Routes>
    </Router>
  );
}