import { FiArrowRight } from "react-icons/fi";

const Token = ({ tx: { value, from, to }, handleChange, id }) => {
  return (
    <div className="flex w-full">
      <span className="bg-slate-200 px-5 py-2 rounded-l-lg">₹</span>
      <input
        type="number"
        value={value}
        onChange={(e) => handleChange(e.target.value, id)}
        className="bg-slate-100 w-full px-2 py-2 -20"
      />
      <span className="bg-slate-200 px-5 py-2">From</span>
      <input
        type="text"
        value={from}
        readOnly
        className="bg-slate-100 w-full px-2 py-2 -20"
      />
      <span className="bg-slate-200 px-5 py-2 flex items-center">
        {" "}
        <FiArrowRight />{" "}
      </span>
      <input
        type="text"
        value={to}
        readOnly
        className="bg-slate-100 w-full px-2 py-2 -20 rounded-r-lg"
      />
    </div>
  );
};

export default Token;
