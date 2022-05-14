import { useState } from "react";

import Block from "./Block";

const transactions = [
  [
    { value: "25.00", from: "Darcy", to: "Bingley" },
    { value: "4.27", from: "Elizabeth", to: "Jane" },
    { value: "19.22", from: "Wickham", to: "Lydia" },
    { value: "106.44", from: "Lady Catherine de Bourgh", to: "Collins" },
    { value: "6.42", from: "Charlotte", to: "Elizabeth" },
  ],
  [
    { value: "97.67", from: "Ripley", to: "Lambert" },
    { value: "48.61", from: "Kane", to: "Ash" },
    { value: "6.15", from: "Parker", to: "Dallas" },
    { value: "10.44", from: "Hicks", to: "Newt" },
    { value: "88.32", from: "Bishop", to: "Burke" },
    { value: "45.00", from: "Hudson", to: "Gorman" },
    { value: "92.00", from: "Vasquez", to: "Apone" },
  ],
  [
    { value: "10.00", from: "Emily", to: "Jackson" },
    { value: "5.00", from: "Madison", to: "Jackson" },
    { value: "20.00", from: "Lucas", to: "Grace" },
  ],
  [
    { value: "62.19", from: "Rick", to: "Ilsa" },
    { value: "867.96", from: "Captain Louis Renault", to: "Strasser" },
    { value: "276.15", from: "Victor Laszlo", to: "Ilsa" },
    { value: "97.13", from: "Rick", to: "Sam" },
    { value: "119.63", from: "Captain Louis Renault", to: "Jan Brandel" },
  ],
  [
    { value: "14.12", from: "Denise Lovett", to: "Edmund Lovett" },
    { value: "2760.29", from: "Lord Glendenning", to: "John Moray" },
    { value: "413.78", from: "Katherine Glendenning", to: "Miss Audrey" },
  ],
];

const Blockchain = () => {
  const generateNewBlockState = (n, nonce) => ({
    block: n,
    nonce: nonce,
    transactions: transactions[n-1],
    hash: "",
  });

  const [block1, setBlock1] = useState(generateNewBlockState(1, 249647));
  const [block2, setBlock2] = useState(generateNewBlockState(2, 951007));
  const [block3, setBlock3] = useState(generateNewBlockState(3, 485421));
  const [block4, setBlock4] = useState(generateNewBlockState(4, 931141));
  const [block5, setBlock5] = useState(generateNewBlockState(5, 109774));

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
