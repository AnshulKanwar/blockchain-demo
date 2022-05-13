import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlockPage from "./pages/BlockPage";
import BlockchainPage from "./pages/BlockchainPage";
import Hash from "./pages/Hash";

function App() {
  return (
    <div className="min-h-screen bg-[#F0F1F4] text-slate-600 pb-32">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Hash />} />
          <Route path="hash" element={<Hash />} />
          <Route path="block" element={<BlockPage />} />
          <Route path="blockchain" element={<BlockchainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
