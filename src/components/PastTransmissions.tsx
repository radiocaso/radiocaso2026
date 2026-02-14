import { usePastTransmissions } from "@/hooks/usePastTransmissions";
import type { PastTransmissionsQueryResult } from "@/lib/types";
import formatDate from "@/utils/formatDate";

export default function PastTransmissions() {
  const { data, isLoading, error } = usePastTransmissions();

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      <ul>
        {data.map((t: PastTransmissionsQueryResult[number]) => (
          <li key={t._id}>
            <div className="flex gap-2">
              <span>{formatDate({ date: t.fecha, short: true })}</span>
              {" - "}
              <h2>{t.titulo}</h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
