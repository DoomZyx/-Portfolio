import "./style.css";
import "./base/_base.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../src/pages/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Homepage} />
      </Routes>
    </Router>
  );
}

export default App;
