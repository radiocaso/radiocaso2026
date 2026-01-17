import { client } from "@/lib/sanityClient";
import { defineQuery } from "groq";

const initialDataQuery = defineQuery(`*[_type == "infoGeneral"][0] {
    titulo,
    descripcion,
    contacto,
    redesSociales,
    logo,
    configuracionDeTransmision,
    destacados[]->{
      _id,
      _type,
      titulo,
      slug,
    },
  }`);

export async function getInitialData() {
  return client.fetch(initialDataQuery);
}
