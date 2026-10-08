import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Stars from './pages/Stars';
import StarDetail from './pages/StarDetail';
import Recommended from './pages/Recommended';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Stars */}
        <Route
          path="/stars"
          element={<Stars />}
        />

        {/* Individual Star */}
        <Route
          path="/stars/:id"
          element={<StarDetail />}
        />

        {/* Recommended */}
        <Route
          path="/recommended"
          element={<Recommended />}
        />




        {/* 404 */}
        <Route
          path="*"
          element={
            <main className="min-h-screen flex flex-col items-center justify-center">
              <p
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "6rem",
                }}
                className="text-white"
              >
                404
              </p>

              <p className="text-ghost">
                Page not found.
              </p>
            </main>
          }
        />

      </Routes>
    </Router>
  );
}