import { useEffect } from "react";
import { calculateSHA256 } from "../utils";

import Container from "./Container";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Token from "./Token";

const Block = ({
  block: { block, nonce, transactions, data, hash },
  previousHash,
  setBlock,
  width,
}) => {
  const mine = () => {
    let newNonce = 0;

    while (
      !calculateSHA256(block, newNonce, transactions || data, previousHash).startsWith("0000")
    ) {
      newNonce = Math.floor(Math.random() * 1000000 + 1);
    }
    setBlock((prev) => ({ ...prev, nonce: newNonce }));
  };

  const handleChange = (value, idx) => {
    let newTxs = [...transactions]
    console.log(newTxs[idx].value)
    newTxs[idx].value = value
    setBlock(prev => ({...prev, transactions: newTxs}))
  }

  useEffect(() => {
    setBlock((prev) => ({
      ...prev,
      hash: calculateSHA256(block, nonce, transactions || data, previousHash),
    }));
  }, [block, nonce, transactions, data, previousHash, setBlock]);

  return (
    <div className={`min-w-fit ${width || "w-[32rem]"}`}>
      <Container
        background={hash.startsWith("0000") ? "bg-[#C4D4D3]" : "bg-[#D4C3C3]"}
      >
        <div className="flex flex-col gap-y-5">
          <div className="grid grid-cols-[1fr_5fr] gap-y-5 justify-items-start">
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

            {transactions ? (
              <>
                <span className="font-semibold">Tx</span>
                <div className="flex flex-col gap-y-0.5">
                  {transactions.map((tx, idx) => (
                    <Token key={idx} id={idx} tx={tx} handleChange={handleChange}/>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="font-semibold">Data:</span>
                <TextArea
                  value={data}
                  onChange={(e) =>
                    setBlock((prev) => ({ ...prev, data: e.target.value }))
                  }
                />
              </>
            )}

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
