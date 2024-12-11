function filterTwoWay(personaName: string, persona1: any, persona2: any, result: any) {
    if (persona1.name == personaName) {
        return true
    }

    if (persona2.name == personaName) {
        return true
    }

    if (result.name == personaName) {
        return false
    }
    
    return true;
}