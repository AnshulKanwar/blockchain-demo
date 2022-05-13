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
      <Block
        block={block}
        setBlock={setBlock}
      />
    </Layout>
  );
};

export default BlockPage;
