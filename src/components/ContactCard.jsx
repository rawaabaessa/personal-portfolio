const ContactCard = ({ type, disc, href, children }) => {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-white/2 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[inset_2px_2px_2px_rgba(255,255,255,0.25),inset_-2px_-2px_2px_rgba(255,255,255,0.05)]"
    >
      <a href={href} target="_blank">
        <div className="flex items-center gap-4">
          {children}
          <div className="flex flex-col items-start">
            <span className="capitalize">{type}</span>
            <span className="text-sm">{disc}</span>
          </div>
        </div>
      </a>
    </button>
  );
};

export default ContactCard;
