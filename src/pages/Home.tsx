import FutureTransmissions from "@/components/FutureTransmissions";
import SectionTitle from "@/components/SectionTitle";
import { useInitialData } from "@/hooks/useInitialData";
import { useTags } from "@/hooks/useTags";
import Tag from "@/components/ui/Tag";
import HighlightedItem from "@/components/ui/HighlightedItem";

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
    <div className="flex flex-col gap-8">
      <section>
        <SectionTitle title="Destacados" />
        <ul className="mb-6 flex flex-wrap gap-2">
          {initialData?.destacados?.map((d) => {
            return (
              <li key={d._id}>
                <HighlightedItem>{d.titulo}</HighlightedItem>
              </li>
            );
          })}
        </ul>
      </section>

      <FutureTransmissions />

      <section>
        <SectionTitle title="Tags" />
        <ul className="mb-6 flex flex-wrap gap-2">
          {tags?.map((t) => {
            return <li key={t._id}>{t.tag && <Tag tag={t.tag} />}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
