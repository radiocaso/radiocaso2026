import type { FutureTransmissionsQueryResult } from "@/lib/types";
import Tag from "@/components/ui/Tag";
import formatDate from "@/utils/formatDate";

export default function TransissionCard({
  transmission,
}: {
  transmission: FutureTransmissionsQueryResult[number];
}) {
  return (
    <div className="mb-6 flex h-70 flex-col gap-2 overflow-y-scroll rounded bg-white/5 p-4">
      {transmission.fecha && (
        <h2 className="text-xs">
          {transmission.fecha && formatDate({ date: transmission.fecha })}
        </h2>
      )}
      {transmission.titulo && (
        <h1 className="font-bold">{transmission.titulo}</h1>
      )}
      {transmission.contexto?.titulo && <p>{transmission.contexto.titulo}</p>}
      {transmission.programa?.titulo && (
        <p>programa: {transmission.programa.titulo}</p>
      )}
      {transmission.descripcionCorta && <p>{transmission.descripcionCorta}</p>}
      {transmission.tipoDeTransmision && (
        <ul className="mt-auto flex gap-2 text-xs">
          {transmission.tipoDeTransmision?.map((t) => (
            <li key={t._id}>
              {t.tipoDeTransmision && (
                <Tag tag={t.tipoDeTransmision} variant="transmissionType" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
