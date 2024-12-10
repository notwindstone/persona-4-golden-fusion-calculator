"use client";

import { fuse } from "@/lib/fuse";
import { personae } from "@/config/data";

export default function Home() {
  const persona1 = personae.find((persona) => {
    return persona.name === 'Angel';
  });
  const persona2 = personae.find((persona) => {
    return persona.name === 'Izanagi';
  });
console.log(persona1, persona2)
  return (
    <div>
      Initial
      <button 
        className={"p-2 bg-red-400 rounded text-white"}
        onClick={() => fuse("Magician", persona1, persona2)}
      >
        Fuse
      </button>
    </div>
  );
}
