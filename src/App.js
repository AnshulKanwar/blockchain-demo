import { HashRouter, Routes, Route } from "react-router-dom";
import BlockPage from "./pages/BlockPage";
import BlockchainPage from "./pages/BlockchainPage";
import Hash from "./pages/Hash";
import DistributedBlockchainPage from "./pages/DistributedBlockchainPage";
import TokensPage from "./pages/TokensPage";
import CoinbasePage from "./pages/CoinbasePage";

function App() {
  return (
    <div className="min-h-screen bg-[#F0F1F4] text-slate-600 pb-32">
      <HashRouter>
        <Routes>
          <Route path="" element={<Hash />} />
          <Route path="hash" element={<Hash />} />
          <Route path="block" element={<BlockPage />} />
          <Route path="blockchain" element={<BlockchainPage />} />
          <Route path="distributed" element={<DistributedBlockchainPage />} />
          <Route path="tokens" element={<TokensPage />} />
          <Route path="coinbase" element={<CoinbasePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
