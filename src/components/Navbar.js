import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-32 pt-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-2xl">
            <Link to="/">Blockchain Demo</Link>
          </h1>
        </div>
        <div className="flex gap-x-12 text-slate-500 font-normal">
          <NavLink
            to="/hash"
            className={({ isActive }) => (isActive ? "text-black" : "hover:text-black")}
          >
            Hash
          </NavLink>
          <NavLink
            to="/block"
            className={({ isActive }) => (isActive ? "text-black" : "hover:text-black")}
          >
            Block
          </NavLink>
          <NavLink
            to="/blockchain"
            className={({ isActive }) => (isActive ? "text-black" : "hover:text-black")}
          >
            Blockchain
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
