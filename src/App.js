import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Block from "./pages/Block";
import Blockchain from "./pages/Blockchain";
import Hash from "./pages/Hash";

function App() {
  return (
    <div className="min-h-screen bg-[#F0F1F4]">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Hash />} />
          <Route path="hash" element={<Hash />} />
          <Route path="block" element={<Block />} />
          <Route path="blockchain" element={<Blockchain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
