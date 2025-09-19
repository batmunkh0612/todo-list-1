export const Button = ({ children, handleOnClick }) => {
  return (
    <button
      className="bg-black text-white border border-white p-2 rounded-md"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
