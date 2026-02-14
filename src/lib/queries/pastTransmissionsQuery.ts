import { client } from "@/lib/sanityClient";
import { defineQuery } from "groq";

const pastTransmissionsQuery =
  defineQuery(`*[_type == "transmision" && fecha < now()] | order(fecha desc) {
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

export async function getPastTransmissions() {
  return client.fetch(pastTransmissionsQuery);
}
