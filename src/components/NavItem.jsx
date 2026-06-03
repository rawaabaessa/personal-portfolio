const NavItem = ({ children }) => {
  return (
    <div className="capitalize text-light-gray dark:text-white dark:hover:text-secondery hover:text-mid-pink cursor-pointer">
      {children}
    </div>
  );
};

export default NavItem;
