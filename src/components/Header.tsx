import { useInitialData } from "@/hooks/useInitialData";
import { urlFor } from "@/lib/sanityImageUrl";
import NavMenu from "@/components/NavMenu";
import { NavLink } from "react-router";

export default function Header() {
  const { data, isLoading, error } = useInitialData();

  if (isLoading) return <div>cargando...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <header className="flex justify-between">
        <NavLink to="/">
          <div className="flex items-end gap-2">
            {data?.titulo && (
              <h1 className="text-4xl font-bold sm:text-7xl">{data?.titulo}</h1>
            )}
            {data?.logo && (
              <img
                className="w-15 invert sm:w-25"
                src={
                  urlFor(data.logo).format("webp").width(100).url() + "&fit=max"
                }
              />
            )}
          </div>
        </NavLink>
        <NavMenu />
      </header>
    </>
  );
}
