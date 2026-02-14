import { useFutureTransmissions } from "@/hooks/useFutureTransmissions";
import type { FutureTransmissionsQueryResult } from "@/lib/types";
import TransmissionCard from "@/components/ui/TransmissionCard";
import Button from "@/components/ui/Button";

export default function FutureTransmissions() {
  const { data, isLoading, error } = useFutureTransmissions();

  if (isLoading) return <div>cargando...</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <section className="flex flex-col items-end">
      <ul className="mb-6 grid gap-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((t: FutureTransmissionsQueryResult[number]) => {
          return (
            <li key={t._id}>
              <TransmissionCard transmission={t} />
            </li>
          );
        })}
      </ul>
      <Button>+ ver mas</Button>
    </section>
  );
}
