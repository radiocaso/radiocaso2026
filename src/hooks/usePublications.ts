import { useQuery } from "@tanstack/react-query";
import { getPublications } from "@/lib/queries/publicationsQuery";

export function usePublications() {
  return useQuery({
    queryKey: ["publictions"],
    queryFn: getPublications,
  });
}
