"use client";

import { fuse } from "@/lib/fuse";
import { personae, arcana2Combos } from "@/config/data";
import { useState } from "react";

const personasSorted = [...personae].sort((a, b) => a.name.localeCompare(b.name));

export default function Home() {
  const [firstPersona, setFirstPersona] = useState(personae[0]);
  const [secondPersona, setSecondPersona] = useState(personae[1]);
  const persona1 = personae.find((persona) => {
    return persona.name === firstPersona.name;
  });
  const persona2 = personae.find((persona) => {
    return persona.name === secondPersona.name;
  });
  const arcana = (arcana2Combos.find((combo: any) => {
    return (
      combo.source[0] === firstPersona.arcana 
      && combo.source[1] === secondPersona.arcana
    ) || (
      combo.source[0] === secondPersona.arcana
      && combo.source[1] === firstPersona.arcana
    );
  }))?.result ?? '';
  const fusion = fuse(arcana, persona1, persona2)?.name;

console.log(arcana, persona1, persona2, fusion)
  return (
    <div>
      <select 
        defaultValue={firstPersona.name}
        onChange={(selected) => {
          const name = selected.currentTarget.value;
          const selectedPersona = personae.find((persona) => {
            return persona.name === name;
          }) ?? personae[0];
          setFirstPersona(selectedPersona);
        }}
      >
        {
          personasSorted.map((persona) => {
            const isSelected = firstPersona.name === persona.name;

            return (
              <option 
                selected={isSelected}
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
        onChange={(selected) => {
          const name = selected.currentTarget.value;
          const selectedPersona = personae.find((persona) => {
            return persona.name === name;
          }) ?? personae[0];
          setSecondPersona(selectedPersona);
        }}
      >
        {
          personasSorted.map((persona) => {
            const isSelected = secondPersona.name === persona.name;

            return (
              <option 
                selected={isSelected}
                key={persona.name}
              >
                {persona.name}
              </option>
            );
          })
        }
      </select>
      <b>{firstPersona.name}</b> and <b>{secondPersona.name}</b> are fused to
      <div>
        {fusion}
      </div>
    </div>
  );
}
