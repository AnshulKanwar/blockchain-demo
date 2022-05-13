import Blockchain from "../components/Blockchain";
import Layout from "../components/Layout";

const BlockchainPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1 className="text-3xl font-semibold mb-8">Blockchain</h1>
          <Blockchain />
        </div>
      </Layout>
    </div>
  );
};

export default BlockchainPage;
