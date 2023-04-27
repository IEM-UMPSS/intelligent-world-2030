import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">IEMUMP</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/flow">Event Schedule</Link>
          </li>
          {/* <li>
            <a>Our Sponsors</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
