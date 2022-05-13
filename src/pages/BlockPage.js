import { useState } from "react";

import Layout from "../components/Layout";
import Block from "../components/Block";

const BlockPage = () => {
  const [block, setBlock] = useState({
    block: 1,
    nonce: 72608,
    data: "",
    hash: "",
  });

  return (
    <Layout>
      <div className="w-[38rem] mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Block</h1>
        <Block block={block} setBlock={setBlock} width="w-38rem" />
      </div>
    </Layout>
  );
};

export default BlockPage;
