"use client";

import { fuse } from "@/lib/fuse";
import { personae } from "@/config/data";
import { useState } from "react";

export default function Home() {
  const [firstPersona, setFirstPersona] = useState(personae[0]);
  const [secondPersona, setSecondPersona] = useState(personae[1]);
  const [currentFusion, setCurrentFusion] = useState();
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
      <select 
        defaultValue={firstPersona.name}
        onChange={(selected) => console.log(selected.currentTarget.value)}
      >
        {
          personae.map((persona) => {
            return (
              <option 
                key={persona.name}
              >
                {persona.name}
              </option>
            );
          })
        }
      </select>
      <select 
        defaultValue={secondPersona.name}
        onChange={(selected) => console.log(selected.currentTarget.value)}
      >
        {
          personae.map((persona) => {
            return (
              <option 
                key={persona.name}
              >
                {persona.name}
              </option>
            );
          })
        }
      </select>
      <button 
        className={"p-2 bg-red-400 rounded text-white"}
        onClick={() => setCurrentFusion(fusion)}
      >
        Fuse
      </button> <b>{firstPersona.name}</b> and <b>{secondPersona.name}</b>
      <div>
        Current: {currentFusion}
      </div>
    </div>
  );
}
