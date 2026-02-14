import { useQuery } from "@tanstack/react-query";
import { getPastTransmissions } from "@/lib/queries/pastTransmissionsQuery";

export function usePastTransmissions() {
  return useQuery({
    queryKey: ["pastTransmissions"],
    queryFn: getPastTransmissions,
  });
}
