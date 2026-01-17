import { useQuery } from "@tanstack/react-query";
import { getFutureTransmissions } from "@/lib/queries/futureTransmissionsQuery";

export function useFutureTransmissions() {
  return useQuery({
    queryKey: ["futureTransmissions"],
    queryFn: getFutureTransmissions,
  });
}
