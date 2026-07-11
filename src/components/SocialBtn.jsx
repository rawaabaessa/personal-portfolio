const SocialBtn = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-secondery transition-colors duration-300"
      aria-label={`Link to ${href}`}
    >
      {children}
    </a>
  );
};

export default SocialBtn;
