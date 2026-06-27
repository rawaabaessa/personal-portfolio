const Input = ({ type, placeholder, value, onChange, name, ...props }) => {
  const classes =
    "rounded-2xl border border-3 border-white text-white py-2 px-4 focus:border-mid-pink focus:outline-none placeholder-white placeholder-opacity-50 placeholder:text-xs";
  return type === "text" ? (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
      {...props}
    />
  ) : (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${classes} min-h-24`}
      {...props}
    />
  );
};

export default Input;
