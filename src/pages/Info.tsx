import SectionTitle from "@/components/SectionTitle";
import { useInitialData } from "@/hooks/useInitialData";
import { PortableText } from "@portabletext/react";

export default function Info() {
  const { data, isLoading, error } = useInitialData();

  if (isLoading) return <div>cargando...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <SectionTitle title="Información" />
      <div className="max-w-prose text-sm">
        {data?.descripcion && <PortableText value={data.descripcion} />}
      </div>
    </>
  );
}
