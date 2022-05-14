import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-16 md:px-32 pt-12">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-base md:text-3xl">
            <Link to="/">Blockchain Demo</Link>
          </h1>
        </div>
        <div className="flex items-center gap-x-8 md:gap-x-10 lg:gap-x-12 text-slate-500 font-normal">
          <NavLink
            to="/hash"
            className={({ isActive }) =>
              isActive ? "text-black" : "hover:text-black"
            }
          >
            Hash
          </NavLink>
          <NavLink
            to="/block"
            className={({ isActive }) =>
              isActive ? "text-black" : "hover:text-black"
            }
          >
            Block
          </NavLink>
          <NavLink
            to="/blockchain"
            className={({ isActive }) =>
              isActive ? "text-black" : "hover:text-black"
            }
          >
            Blockchain
          </NavLink>
          <NavLink
            to="/distributed"
            className={({ isActive }) =>
              isActive ? "text-black" : "hover:text-black"
            }
          >
            Distributed
          </NavLink>
          <NavLink
            to="/tokens"
            className={({ isActive }) =>
              isActive ? "text-black" : "hover:text-black"
            }
          >
            Tokens
          </NavLink>
          <NavLink
            to="/coinbase"
            className={({ isActive }) =>
              isActive ? "text-black" : "hover:text-black"
            }
          >
            Coinbase
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
