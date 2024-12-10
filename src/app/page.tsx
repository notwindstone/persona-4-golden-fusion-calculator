"use client";

import { fuse } from "@/lib/fuse";
import { personae } from "@/config/data";
import { useState } from "react";

export default function Home() {
  const [currentPersona, setCurrentPersona] = useState();
  const persona1 = personae.find((persona) => {
    return persona.name === 'Angel';
  });
  const persona2 = personae.find((persona) => {
    return persona.name === 'Izanagi';
  });
  const fusion = fuse("Magician", persona1, persona2).name;

console.log(persona1, persona2, fusion)
  return (
    <div>
      Initial
      <button 
        className={"p-2 bg-red-400 rounded text-white"}
        onClick={() => setCurrentPersona(fusion)}
      >
        Fuse <b>Angel</b> and <b>Izanagi</b>
      </button>
      <div>
        Current: {currentPersona}
      </div>
    </div>
  );
}
