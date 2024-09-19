import { Link } from 'react-router-dom';

export default function Button({ children, ...props }) {
  const baseClass =
    'text-sm inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed border border-yellow-500';

  const className = {
    primary: `${baseClass} bg-yellow-400  px-3 py-2 md:px-4 md:py-2`,
    secondary: `border-stone-300 px-3 py-2 md:px-4 md:py-2 text-sm inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed border border-stone-500'`,
    small: `${baseClass}  bg-yellow-400 px-3 py-1 text-xs md:px-4 md:py-2`,
  };

  if (props.to) {
    return (
      <Link to={props.to} className={className[props.type]}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={className[props.type]}>
      {children}
    </button>
  );
}
