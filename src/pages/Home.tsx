import FutureTransmissions from "@/components/FutureTransmissions";
import SectionTitle from "@/components/SectionTitle";
import { useInitialData } from "@/hooks/useInitialData";
import { useTags } from "@/hooks/useTags";

export default function Home() {
  const {
    data: initialData,
    isLoading: initialDataIsLoading,
    error: initialDataError,
  } = useInitialData();
  const { data: tags, isLoading: tagsIsLoading, error: tagsError } = useTags();

  if (initialDataIsLoading || tagsIsLoading) return <div>cargando...</div>;
  if (initialDataError || tagsError)
    return <div>{initialDataError?.message || tagsError?.message}</div>;

  return (
    <>
      <SectionTitle title="Próximas Transmisiones" />
      <FutureTransmissions />

      <SectionTitle title="Destacados" />
      <ul className="mb-6 flex flex-wrap gap-2">
        {initialData?.destacados?.map((d) => {
          return <li key={d._id}>{d.titulo}</li>;
        })}
      </ul>

      <SectionTitle title="Tags" />
      <ul className="mb-6 flex flex-wrap gap-2">
        {tags?.map((t) => {
          return (
            <li key={t._id} className="border px-1">
              {t.tag}
            </li>
          );
        })}
      </ul>
    </>
  );
}
