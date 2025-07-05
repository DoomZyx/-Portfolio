import "./style.css";
import "./base/_base.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../src/pages/homepage";
import Projects from "../src/components/Projects/projects";

import ScrollToTop from "./hooks/ScrollToTop/scroll";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={Homepage} />
        <Route path="/project/:id" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
