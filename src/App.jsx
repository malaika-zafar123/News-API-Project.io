import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import DetailPage from "./DetailPage";
import Navbar from "./Navbar";

function App() {
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar setCategory={setCategory} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home category={category} search={search} />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
