import { NavLink } from "react-router";

const sections = ["agenda", "archivo", "publicaciones", "info"];

export default function NavMenu() {
  return (
    <nav className="flex gap-1">
      {sections.map((section) => (
        <NavLink
          key={section}
          to={`/${section}`}
          className="flex size-24 items-center justify-center rounded-full border-2 text-xs uppercase"
        >
          {section}
        </NavLink>
      ))}
    </nav>
  );
}
