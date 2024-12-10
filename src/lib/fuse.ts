import { personae } from "@/config/data";

const personaeByArcana = (function() {
    var personaeByArcana_: any = {};
    for (var i = 0, persona = null; persona = personae[i]; i++) {
      if (!personaeByArcana_[persona.arcana]) {
        personaeByArcana_[persona.arcana] = [];
      }
      personaeByArcana_[persona.arcana].push(persona);
    }
    return personaeByArcana_;
  })();

export function fuse(arcana: string, persona1: any, persona2: any) {
    var level = 1 + Math.floor((persona1.level + persona2.level) / 2);
    var personae = personaeByArcana[arcana];

    for (var i = 0, persona = null; persona = personae[i]; i++) {
        if (persona.level >= level) {
        if (persona.special) continue;
        break;
        }
    }

    if (persona1.arcana == persona2.arcana) {
        i--;
    }
    if (personae[i] == persona1 || personae[i] == persona2) {
        i--;
    }

    return personae[i];
}