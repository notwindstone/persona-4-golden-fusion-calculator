"use client";

import { fuse } from "@/lib/fuse";
import { personae } from "@/config/data";

export default function Home() {
  return (
    <div>
      Initial
      <button 
        className={"p-2 bg-red-400 rounded text-white"}
        onClick={() => fuse(personae[0].name)}
      >
        Fuse
      </button>
    </div>
  );
}
