const Button = ({ text, className, id }) => {
  return (
    <a
      href={id ? `#${id}` : "#"}
      onClick={(e) => {
        if (!id) return;
        e.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        const offset = Math.min(window.innerHeight * 0.08, 72);
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}images/arrow-down.svg`}
            alt=""
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
