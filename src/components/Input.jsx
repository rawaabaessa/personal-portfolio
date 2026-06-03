const Input = ({ type, placeholder }) => {
  const classes =
    "rounded-2xl border border-3 border-white text-white py-2 px-4 focus:border-mid-pink focus:outline-none placeholder-white placeholder-opacity-50 placeholder:text-xs";
  return type === "text" ? (
    <input type="text" placeholder={placeholder} className={classes} />
  ) : (
    <textarea placeholder={placeholder} className={`${classes}`} />
  );
};

export default Input;
