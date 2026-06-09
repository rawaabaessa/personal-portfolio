const Button = ({ children, variant = "filled", Icon, ...props }) => {
  const base =
    "dark:text-white text-xs sm:text-sm md:text-md py-3 px-8 rounded-full font-semibold flex items-center gap-2 transition duration-300 cursor-pointer ";

  const styles = {
    filled: "text-white bg-[linear-gradient(to_right,#9b3586_0%,#9B3586_100%)]",
    outline:
      "border border-mid-pink text-light-gray-50 hover:text-white hover:bg-[linear-gradient(to_right,#9b3586_0%,#9B3586_100%)]",
    workBtn:
      "text-mid-pink dark:text-secondery border border-mid-pink dark:border-secondery hover:bg-mid-pink hover:text-white dark:hover:bg-secondery",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
      {Icon && Icon}
    </button>
  );
};

export default Button;
