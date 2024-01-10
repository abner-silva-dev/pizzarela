import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
  type = "primary",
  className = "",
  onClick,
}) {
  const base =
    "inline-block rounded-full text-sm bg-red-500 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    base,
    primary: base + " px-4 py-3 sm:py-4 md:px-6",
    small: base + " py-2 px-4 md:py-2.5 md:px-6 text-xs",
    round: base + " py-1 px-2.5 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:py-3.5 md:px-6 hover:text-stone-800 focus:text-stone-800",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      className={`${styles[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
