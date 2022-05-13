const Container = ({ children, background }) => {
  return (
    <div>
      <div className={`${background} rounded-xl p-10`}>{children}</div>
    </div>
  );
};

export default Container;
