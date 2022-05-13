import { useState } from "react";

import Block from "./Block";

const Blockchain = () => {
  const generateNewBlockState = (n, nonce) => ({
    block: n,
    nonce: nonce,
    data: "",
    hash: "",
  });

  const [block1, setBlock1] = useState(generateNewBlockState(1, 11316));
  const [block2, setBlock2] = useState(generateNewBlockState(2, 35230));
  const [block3, setBlock3] = useState(generateNewBlockState(3, 12937));
  const [block4, setBlock4] = useState(generateNewBlockState(4, 35990));
  const [block5, setBlock5] = useState(generateNewBlockState(5, 56265));

  return (
    <div className="overflow-x-scroll">
      <div className="inline-flex gap-x-16 mb-10 mr-20">
        <Block
          block={block1}
          setBlock={setBlock1}
          previousHash={"0".repeat(64)}
        />
        <Block block={block2} setBlock={setBlock2} previousHash={block1.hash} />
        <Block block={block3} setBlock={setBlock3} previousHash={block2.hash} />
        <Block block={block4} setBlock={setBlock4} previousHash={block3.hash} />
        <Block block={block5} setBlock={setBlock5} previousHash={block4.hash} />
      </div>
    </div>
  );
};

export default Blockchain;
