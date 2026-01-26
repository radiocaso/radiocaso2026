import { client } from "@/lib/sanityClient";
import { defineQuery } from "groq";

const tagsQuery = defineQuery(`*[_type == "tag"] {
    _id,
    tag,
  }`);

export async function getTags() {
  return client.fetch(tagsQuery);
}
