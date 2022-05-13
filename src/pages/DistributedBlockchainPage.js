import Blockchain from "../components/Blockchain"
import Layout from "../components/Layout"

const DistributedBlockchainPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold mb-8">Distributed Blockchain</h1>
      <div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer A</h2>
          <Blockchain />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer B</h2>
          <Blockchain />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-8">Peer C</h2>
          <Blockchain />
        </div>
      </div>
    </Layout>
  )
}

export default DistributedBlockchainPage