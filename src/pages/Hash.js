import { useEffect, useState } from "react";
import sha256 from "crypto-js/sha256";

import Container from "../components/Container";
import Layout from "../components/Layout";

const Hash = () => {
  const [data, setData] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(sha256(data).toString());
  }, [data]);

  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-10">
            <span className="font-semibold">Data:</span>
            <textarea
              rows="8"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="bg-slate-100 grow p-3 rounded-lg"
            />
          </div>
          <div className="flex gap-x-10">
            <span className="font-semibold">Hash:</span>
            <input type="text" value={hash} readOnly className="bg-slate-100 grow p-3 rounded-lg" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Hash;
