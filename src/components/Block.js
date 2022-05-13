import { useEffect } from "react";
import { calculateSHA256 } from "../utils";

import Container from "./Container";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const Block = ({
  block: { block, nonce, data, hash },
  previousHash,
  setBlock,
}) => {
  const mine = () => {
    let newNonce = 0;

    while (
      !calculateSHA256(block, newNonce, data, previousHash).startsWith("0000")
    ) {
      newNonce = Math.floor(Math.random() * 1000000 + 1);
    }
    setBlock((prev) => ({ ...prev, nonce: newNonce }));
  };

  useEffect(() => {
    setBlock((prev) => ({
      ...prev,
      hash: calculateSHA256(block, nonce, data, previousHash),
    }));
  }, [block, nonce, data, previousHash, setBlock]);

  return (
    <div className="min-w-fit">
      <Container
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
                readOnly
                className="bg-slate-100 w-full px-3 py-2 rounded-r-lg"
              />
            </div>

            <span className="font-semibold">Nonce:</span>
            <Input
              type="number"
              value={nonce}
              onChange={(e) =>
                setBlock((prev) => ({ ...prev, nonce: e.target.value }))
              }
            />

            <span className="font-semibold">Data:</span>
            <TextArea
              value={data}
              onChange={(e) =>
                setBlock((prev) => ({ ...prev, data: e.target.value }))
              }
            />

            {previousHash && (
              <>
                <span className="font-semibold">Prev:</span>
                <Input value={previousHash} readOnly />
              </>
            )}

            <span className="font-semibold">Hash:</span>
            <Input value={hash} readOnly />

            <div></div>
            <Button onClick={mine}>Mine</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Block;
