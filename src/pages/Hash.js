import { useEffect, useState } from "react";

import Container from "../components/Container";
import Layout from "../components/Layout";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { calculateSHA256 } from "../utils";

const Hash = () => {
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(calculateSHA256(data))
  }, [data]);

  return (
    <Layout>
      <Container title="SHA256 Hash" background="bg-white">
        <div className="flex flex-col gap-y-5">
          <div className="grid grid-cols-[1fr_4fr] gap-y-5">
            <span className="font-semibold">Data:</span>
            <TextArea
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <span className="font-semibold">Hash:</span>
            <Input type="text" value={hash} readOnly/>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Hash;
