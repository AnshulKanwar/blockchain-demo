import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-32 py-5">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-xl">
            <Link to="/">Blockchain Demo</Link>
          </h1>
        </div>
        <div className="flex gap-x-12">
          <Link to="/hash" className="text-slate-600 hover:text-slate-900">
            Hash
          </Link>
          <Link to="/block" className="text-slate-600 hover:text-slate-900">
            Block
          </Link>
          <Link
            to="/blockchain"
            className="text-slate-600 hover:text-slate-900"
          >
            Blockchain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
