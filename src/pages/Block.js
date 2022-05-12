import { useEffect, useState } from "react";

import Container from "../components/Container";
import Input from "../components/Input";
import Layout from "../components/Layout";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { calculateSHA256 } from "../utils";

const Block = () => {
  const [block, setBlock] = useState(1);
  const [nonce, setNonce] = useState(72608);
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");

  const mine = () => {
    console.log('mining....')

    let newNonce = 0;

    console.log(calculateSHA256(block, newNonce, data))
    while (!calculateSHA256(block, newNonce, data).startsWith("0000")) {
      newNonce = Math.floor(Math.random() * 1000000 + 1);
    }
    setNonce(newNonce)
  };

  useEffect(() => {
    setHash(calculateSHA256(block, nonce, data));
  }, [block, nonce, data]);

  return (
    <div>
      <Layout>
        <Container
          title="Block"
          background={hash.startsWith("0000") ? "bg-[#C4D4D3]" : "bg-[#D4C3C3]"}
        >
          <div className="flex flex-col gap-y-5">
            <div className="grid grid-cols-[1fr_4fr] gap-y-5 justify-items-start">
              <span className="font-semibold">Block:</span>
              <div className="flex w-full">
                <span className="bg-slate-200 px-5 py-2 rounded-l-lg">#</span>
                <input
                  type="number"
                  value={block}
                  onChange={(e) => setBlock(e.target.value)}
                  className="bg-slate-100 w-full px-3 py-2 rounded-r-lg"
                />
              </div>

              <span className="font-semibold">Nonce:</span>
              <Input
                type="number"
                value={nonce}
                onChange={(e) => setNonce(e.target.value)}
              />

              <span className="font-semibold">Data:</span>
              <TextArea
                value={data}
                onChange={(e) => setData(e.target.value)}
              />

              <span className="font-semibold">Hash:</span>
              <Input value={hash} readOnly />

              <div></div>
              <Button onClick={mine}>Mine</Button>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Block;
