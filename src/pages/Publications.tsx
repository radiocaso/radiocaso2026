import SectionTitle from "@/components/SectionTitle";
import { usePublications } from "@/hooks/usePublications";

export default function Publications() {
  const { data, isLoading, error } = usePublications();

  if (isLoading) return <div>cargando...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <SectionTitle title="Publicaciones" />
      <ul>
        {data?.map((p) => (
          <li key={p._id}>{p.titulo}</li>
        ))}
      </ul>
    </>
  );
}
