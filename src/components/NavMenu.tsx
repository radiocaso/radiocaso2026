import { NavLink } from "react-router";

const sections = ["agenda", "archivo", "publicaciones", "info"];

export default function NavMenu() {
  return (
    <nav className="hidden gap-1 sm:flex">
      {sections.map((section) => (
        <NavLink
          key={section}
          to={`/${section}`}
          className={({ isActive }) =>
            `${isActive ? "bg-white text-black" : "border-white/20"} flex size-28 items-center justify-center rounded-full border text-xs uppercase transition-colors`
          }
        >
          {section}
        </NavLink>
      ))}
    </nav>
  );
}
