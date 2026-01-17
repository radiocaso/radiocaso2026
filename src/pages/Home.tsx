import { useFutureTransmissions } from "@/hooks/useFutureTransmissions";
import type { FutureTransmissionsQueryResult } from "@/lib/types";

export default function Home() {
  const { data, isLoading, error } = useFutureTransmissions();

  if (isLoading) return <div>cargando...</div>;
  if (error) return <div>{error?.message}</div>;

  return (
    <ul>
      {data?.map((t: FutureTransmissionsQueryResult[number]) => {
        return (
          <li key={t._id} className="mb-6 border-b border-white/20 pb-2">
            {t.fecha && <h2 className="text-xs">{t.fecha}</h2>}
            {t.titulo && <h1 className="font-bold">{t.titulo}</h1>}
            {t.contexto?.titulo && <p>{t.contexto.titulo}</p>}
            {t.programa?.titulo && <p>programa: {t.programa.titulo}</p>}
            {t.descripcionCorta && <p>{t.descripcionCorta}</p>}
            {t.tipoDeTransmision && (
              <p className="flex gap-2 text-xs">
                {t.tipoDeTransmision?.map((t) => (
                  <span key={t._id}>{t.tipoDeTransmision}</span>
                ))}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
