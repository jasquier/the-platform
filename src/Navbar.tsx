import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <div className="flex gap-10 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
    </div>
  );
}
