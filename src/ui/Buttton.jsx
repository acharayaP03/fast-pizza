import { Link } from 'react-router-dom';

const className =
  'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-500 disabled:cursor-not-allowed';

export default function Button({ children, ...props }) {
  if (props.to) {
    return (
      <Link to={props.to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
