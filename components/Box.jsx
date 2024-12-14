const Box = ({ title, children }) => {
  return (
    <main
      style={{
        boxShadow: "0px 1px 4px 0px #21212114",
      }}
      className="bg-white p-10 rounded-3xl w-[604px] space-y-8"
    >
      <header className="space-y-4">
        <h1 className="leading-[38px] text-[19px] font-semibold">{title}</h1>
        <div className="bg-neutral-100 h-px w-full block" />
      </header>
      {children}
    </main>
  );
};

export default Box;
