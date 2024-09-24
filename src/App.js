import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./cmp/homepage/index";
import TNA from "./cmp/tna_form"; // Importing TNA component
import Extra from "./cmp/extra"; // Importing Extra component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tna_form" element={<TNA />} />
        <Route path="/extra" element={<Extra />} />
       
      </Routes>
    </Router>
  );
}

export default App;
