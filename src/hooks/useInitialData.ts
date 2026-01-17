import { useQuery } from "@tanstack/react-query";
import { getInitialData } from "@/lib/queries/initialDataQuery";

export function useInitialData() {
  return useQuery({
    queryKey: ["initialData"],
    queryFn: getInitialData,
  });
}
