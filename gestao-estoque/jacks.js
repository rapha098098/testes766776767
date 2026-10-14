// Array é tipo uma lista simplificada para deixar todas as var em um let só
let jacks = ["cássio", "sérgio", "samuel", "victor", "rapha", "felipe", "presida", "matheuszinho"];

// Lista dos Jacks
jacks[7] = "judas";
// Edita o elemento determinado dentro dos [].

console.log(jacks[2]);
// Mostra o elemento na posição X, sendo 0 a primeira posição

console.log(jacks.length);
// Mostra o número de elementos existentes no Array.

jacks.push("judaskinzel");
// Ele adiciona um novo elemento dentro da Array.

jacks.pop();
// Ele remove o último item do Array.

jacks.unshift("Yurijack");
// Adiciona elemento na primeira posição do Array.

jacks.shift();
// Ele remove o primeiro elemento do Array.

jacks.splice(1, 2);
console.log(jacks);
