import { usePastTransmissions } from "@/hooks/usePastTransmissions";
import type { PastTransmissionsQueryResult } from "@/lib/types";
import formatDate from "@/utils/formatDate";
import Tag from "./ui/Tag";

export default function PastTransmissions() {
  const { data, isLoading, error } = usePastTransmissions();

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      <ul>
        {data.map((t: PastTransmissionsQueryResult[number]) => (
          <li key={t._id}>
            <div className="grid grid-cols-[70px_1fr_2fr_200px] items-center gap-4 border-b border-white/10 py-4">
              <div className="text-xs">
                {formatDate({ date: t.fecha, short: true })}
              </div>
              <h2 className="">{t.titulo}</h2>
              <div>{t.programa && <h2>{t.programa.titulo}</h2>}</div>
              {t.tipoDeTransmision && (
                <div className="flex flex-col items-end gap-1 justify-self-end text-xs">
                  {t.tipoDeTransmision.map((tt) => {
                    return (
                      tt.tipoDeTransmision && (
                        <Tag
                          tag={tt.tipoDeTransmision}
                          variant="transmissionType"
                        />
                      )
                    );
                  })}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
