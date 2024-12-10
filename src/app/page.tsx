"use client";

import { fuse } from "@/lib/fuse";
import { personae } from "@/config/data";
import { useState } from "react";

export default function Home() {
  const [firstPersona, setFirstPersona] = useState(personae[0].name);
  const [secondPersona, setSecondPersona] = useState(personae[1].name);
  const persona1 = personae.find((persona) => {
    return persona.name === firstPersona;
  });
  const persona2 = personae.find((persona) => {
    return persona.name === secondPersona;
  });
  const fusion = fuse("Heirophant", persona1, persona2).name;

console.log(persona1, persona2, fusion)
  return (
    <div>
      <select 
        defaultValue={firstPersona}
        onChange={(selected) => setFirstPersona(selected.currentTarget.value)}
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
        defaultValue={secondPersona}
        onChange={(selected) => setSecondPersona(selected.currentTarget.value)}
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
      <b>{firstPersona}</b> and <b>{secondPersona}</b> are fused to
      <div>
        {fusion}
      </div>
    </div>
  );
}
