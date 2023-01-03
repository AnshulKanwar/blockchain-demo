const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="w-28 px-3 py-2 rounded-lg bg-[#3E4260] text-white hover:bg-[#262B4D] active:bg-[#1D213B]">
      {children}
    </button>
  )
}

export default Button