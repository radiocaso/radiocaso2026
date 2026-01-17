import { client } from "@/lib/sanityClient";
import { defineQuery } from "groq";

const futureTransmissionsQuery =
  defineQuery(`*[_type == "transmision" && fecha > now()] | order(fecha asc) { 
    _id,
    titulo,
    fecha,
    tipoDeTransmision[]->{
      _id,
      tipoDeTransmision
    },
    programa->{
      _id,
      titulo},
    contexto->{
      _id,
      titulo},
    descripcionCorta,
  }`);

export async function getFutureTransmissions() {
  return client.fetch(futureTransmissionsQuery);
}
