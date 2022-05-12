const Container = ({ title, children, background }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">{title}</h1>
      <div className={`${background} rounded-xl p-10`}>{children}</div>
    </div>
  );
};

export default Container;
