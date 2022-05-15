import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-24 pt-12">
      <div className="flex flex-col lg:flex-row text-center lg:text-left gap-y-8 justify-between">
        <div>
          <h1 className="font-semibold text-3xl">
            <Link to="/">Blockchain Demo</Link>
          </h1>
          <span className="text-xs">
            <span className="font-semibold">Inspired From </span>
            <a
              className="hover:underline"
              href="https://www.youtube.com/watch?v=_160oMzblY8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blockchain 101 - A Visual Demo
            </a>
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-8 md:gap-x-10 lg:gap-x-12 text-slate-500 font-normal">
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
