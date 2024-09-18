import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <p>© 2021 Fast Pizza & Co.</p>

      <ul>
        <li>
          <Link>Fast pizza & Co. </Link>
        </li>
        <Link>Terms of Service</Link>
        <Link>Privacy Policy</Link>
        <Link>Contact us</Link>
      </ul>
    </footer>
  );
}
