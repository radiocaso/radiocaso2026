import { useQuery } from "@tanstack/react-query";
import { getTags } from "@/lib/queries/tagsQuery";

export function useTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  });
}
