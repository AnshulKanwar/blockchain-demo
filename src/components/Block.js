import { useEffect } from "react";
import { calculateSHA256 } from "../utils";
import { FiArrowRight } from "react-icons/fi";

import Container from "./Container";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Token from "./Token";

const Block = ({
  block: { block, nonce, coinbase, transactions, data, hash },
  previousHash,
  setBlock,
}) => {
  const mine = () => {
    let newNonce = 0;

    while (
      !calculateSHA256(
        block,
        newNonce,
        coinbase || "",
        transactions || data,
        previousHash || ""
      ).startsWith("0000")
    ) {
      newNonce = Math.floor(Math.random() * 1000000 + 1);
    }
    setBlock((prev) => ({ ...prev, nonce: newNonce }));
  };

  const handleChange = (value, idx) => {
    let newTxs = [...transactions];
    console.log(newTxs[idx].value);
    newTxs[idx].value = value;
    setBlock((prev) => ({ ...prev, transactions: newTxs }));
  };

  useEffect(() => {
    setBlock((prev) => ({
      ...prev,
      hash: calculateSHA256(
        block,
        nonce,
        coinbase || "",
        transactions || data || "",
        previousHash || ""
      ),
    }));
  }, [block, nonce, coinbase, transactions, data, previousHash, setBlock]);

  return (
    <div className="w-[42rem]">
      <Container
        background={hash.startsWith("0000") ? "bg-[#C4D4D3]" : "bg-[#D4C3C3]"}
      >
        <div className="grid grid-cols-[minmax(80px,_1fr)_6fr] gap-5 justify-items-start">
          <span className="font-semibold justify-self-end">Block:</span>
          <div className="flex w-full">
            <span className="bg-slate-200 px-5 py-2 rounded-l-lg">#</span>
            <input
              type="number"
              value={block}
              readOnly
              className="bg-slate-100 w-full px-3 py-2 rounded-r-lg"
            />
          </div>

          <span className="font-semibold justify-self-end">Nonce:</span>
          <Input
            type="number"
            value={nonce}
            onChange={(e) =>
              setBlock((prev) => ({ ...prev, nonce: e.target.value }))
            }
          />

          {coinbase && (
            <>
              <span className="font-semibold justify-self-end">Coinbase:</span>
              <div className="flex w-full">
                <span className="bg-slate-200 px-5 py-2 rounded-l-lg">₹</span>
                <input
                  type="number"
                  value={coinbase.value}
                  onChange={(e) => {
                    setBlock((prev) => ({
                      ...prev,
                      coinbase: { ...prev.coinbase, value: e.target.value },
                    }));
                  }}
                  className="bg-slate-100 w-full px-3 py-2"
                />
                <span className="bg-slate-200 px-5 py-2 flex items-center">
                  <FiArrowRight />
                </span>
                <input
                  type="text"
                  value={coinbase.to}
                  readOnly
                  className="bg-slate-100 w-full px-3 py-2 rounded-r-lg"
                />
              </div>
            </>
          )}

          {transactions ? (
            <>
              <span className="font-semibold justify-self-end">Tx:</span>
              <div className="flex flex-col w-full gap-y-0.5">
                {transactions.map((tx, idx) => (
                  <Token
                    key={idx}
                    id={idx}
                    tx={tx}
                    handleChange={handleChange}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <span className="font-semibold justify-self-end">Data:</span>
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
              <span className="font-semibold justify-self-end">Prev:</span>
              <Input value={previousHash} readOnly />
            </>
          )}

          <>
            <span className="font-semibold justify-self-end">Hash:</span>
            <Input value={hash} readOnly />
          </>

          <div></div>
          <Button onClick={mine}>Mine</Button>
        </div>
      </Container>
    </div>
  );
};

export default Block;
