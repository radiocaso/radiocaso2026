import { NavLink } from "react-router";

const sections = ["agenda", "archivo", "publicaciones", "info"];

export default function NavMenu() {
  return (
    <nav className="flex gap-1">
      {sections.map((section) => (
        <NavLink
          key={section}
          to={`/${section}`}
        >
          {section}
        </NavLink>
      ))}
    </nav>
  );
}
