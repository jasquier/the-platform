import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <div className="p-2 flex gap-10">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/posts" className="[&.active]:font-bold">
        Posts
      </Link>
    </div>
  );
}
