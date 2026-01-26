import { client } from "@/lib/sanityClient";
import { defineQuery } from "groq";

const publicationsQuery =
  defineQuery(`*[_type == "publicacion"] | order(fecha desc) { 
      _id,
      titulo,
      slug,
      fecha,
      tipoDePublicacion,
      descripcion,
      recursos[]->{
        _id,
        titulo,
        url,
        archivo{
          asset->{
            url
          }
        },
      },
      creditos
    }`);

export async function getPublications() {
  return client.fetch(publicationsQuery);
}
