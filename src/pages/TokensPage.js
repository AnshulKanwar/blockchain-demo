import Blockchain from "../components/Blockchain"
import Layout from "../components/Layout"

import TokensBlock from "../components/TokensBlock"

const TokensPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-8">Tokens</h1>
      <div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer A</h2>
          <TokensBlock />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer B</h2>
          <TokensBlock />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer C</h2>
          <TokensBlock />
        </div>
      </div>
    </Layout>
  )
}

export default TokensPage