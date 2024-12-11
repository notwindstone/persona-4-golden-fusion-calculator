"use client";

import { fuse } from "@/lib/fuse";
import { personae, arcana2Combos } from "@/config/data";
import { useState } from "react";
import Link from "next/link";

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

  return (
    <div>
      <select 
        value={firstPersona.name}
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
        value={secondPersona.name}
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
      <b>{firstPersona.name}</b> and <b>{secondPersona.name}</b> are fused to
      <div>
        {fusion}
      </div>
      <div className="flex flex-col gap-4 w-64">
        <div className="flex justify-between">
          <p className="font-bold">Level</p>
          <p className="font-bold">Name</p>
          <p className="font-bold">Arcana</p>
        </div>
        {
          personasSorted.map((persona) => {
            return (
              <div key={persona.name} className="flex justify-between">
                <div>{persona.level}</div>
                <div>
                  <Link className="hover:text-blue-400" href={`/persona/${persona.name}`}>
                    {persona.name}
                  </Link>
                </div>
                <div>{persona.arcana}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
