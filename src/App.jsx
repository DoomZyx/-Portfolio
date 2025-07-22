import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Homepage = lazy(() => import("../src/pages/homepage"));
const Projects = lazy(() => import("../src/components/Projects/projects"));

import ScrollToTop from "./hooks/ScrollToTop/scroll";
import "./Custom/Scrollbar/_scrollbar.scss";
import "./Custom/Cursor/_Cursor.scss";
import "./style.css";
import "./base/_base.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:id" element={<Projects />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
