import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-stone-800 text-center text-stone-300">
      <div className="py-6">
        <Link className="text-[28px] font-bold uppercase tracking-widest">
          Fast pizza & Co.{' '}
        </Link>
        <p className="text-sm">© 2021 Fast Pizza & Co.</p>
      </div>

      <ul className="flex items-center justify-center gap-2 pb-2">
        <Link>Terms of Service</Link>
        <Link>Privacy Policy</Link>
        <Link>Contact us</Link>
      </ul>
    </footer>
  );
}
