

const name:string = 'Strider'; // Type inferred as string
let hpPoints: number | 'SOLO'; // Type can be number or string
const isAlive: boolean = true; // Type inferred as boolean

hpPoints = 'SOLO';  // Valid assignment

console.log({ 
    name, hpPoints, isAlive 
});

export {};