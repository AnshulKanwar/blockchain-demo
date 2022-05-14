import Layout from "../components/Layout"

import CoinbaseBlock from "../components/CoinbaseBlock"

const CoinbasePage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-8">Coinbase Transactions</h1>
      <div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer A</h2>
          <CoinbaseBlock />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer B</h2>
          <CoinbaseBlock />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer C</h2>
          <CoinbaseBlock />
        </div>
      </div>
    </Layout>
  )
}

export default CoinbasePage