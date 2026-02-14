import { useFutureTransmissions } from "@/hooks/useFutureTransmissions";
import type { FutureTransmissionsQueryResult } from "@/lib/types";
import TransmissionCard from "@/components/ui/TransmissionCard";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router";

export default function FutureTransmissions() {
  const { data, isLoading, error } = useFutureTransmissions();

  if (isLoading) return <div>cargando...</div>;
  if (error) return <div>{error?.message}</div>;

  if (data?.length && data.length < 1) return null;

  return (
    <section>
      <SectionTitle title="Próximas Transmisiones" />
      <div className="flex flex-col items-end">
        <ul className="mb-6 grid gap-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((t: FutureTransmissionsQueryResult[number]) => {
            return (
              <li key={t._id}>
                <TransmissionCard transmission={t} />
              </li>
            );
          })}
        </ul>
        <Button>
          <Link to="/agenda">{"->"} ver agenda completa</Link>
        </Button>
      </div>
    </section>
  );
}
