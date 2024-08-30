import Link from "next/link";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Discography", path: "/discography" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Luke Benedict
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {LINKS.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
