import { Link } from 'react-router-dom';

export default function Button({ children, ...props }) {
  const baseClass =
    'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed';

  const className = {
    primary: `${baseClass} px-4 py-3 md:px-6 md:py-4`,
    secondary: `${baseClass} px-3 py-2 md:px-4 md:py-3`,
    small: `${baseClass} px-3 py-1 text-xs md:px-4 md:py-2`,
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
