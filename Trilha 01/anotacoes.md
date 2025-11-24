trilha 1)
   npm init -y para criar o package.json.
   tsc --init iniciar projeto .ts criando o tsconfig.json.
   configurei o tsconfig.json como o prof pediu na trilha1.
criei a pasta src e configurei o tsconfig para salvar as compilações na pasta 'dist'.
   criei index.ts para colocar a função greet da trilha.
para compilar eu uso o tsc, ele le a pasta src, verifica se tem erro de tipagem, se nao tiver erro, ele compila para js em 'dist'.
formas para criar array em ts:
    Sintaxe Genérica (Generic): Array<string>
    Sintaxe de Sufixo: string[].
codigos para arrays:
.push() adiciona dados ao final para um array inves de substituir

.unshift() adiciona dados ao inicio

.pop() (O oposto do push) O que faz: Remove o último item do array.
Retorna: O item que foi removido.
let frutas = ["Maçã", "Banana", "Laranja"];
let frutaRemovida = frutas.pop();
// frutas agora é ["Maçã", "Banana"]
console.log(frutas); 
// frutaRemovida é "Laranja"
console.log(frutaRemovida);

.shift()
O que faz: Remove o primeiro item do array.
Retorna: O item que foi removido.

.splice()
Ele pode adicionar, remover ou substituir itens em qualquer posição do array.
A sintaxe básica é: array.splice(indiceInicial, quantosRemover, item1, item2, ...)

Exemplo 1: Apenas Removendo
Vamos remover "Banana" (que está no índice 1).

let frutas = ["Maçã", "Banana", "Laranja"];
// A partir do índice 1, remova 1 item
frutas.splice(1, 1);
// frutas agora é ["Maçã", "Laranja"]
console.log(frutas);
Exemplo 2: Apenas Adicionando
Vamos adicionar "Kiwi" no índice 1 (sem remover ninguém).

Exemplo 2: Apenas Adicionando

let frutas = ["Maçã", "Laranja"];
// A partir do índice 1, remova 0 itens, e adicione "Kiwi"
frutas.splice(1, 0, "Kiwi");
// frutas agora é ["Maçã", "Kiwi", "Laranja"]
console.log(frutas);
Exemplo 3: Substituindo
Vamos substituir "Banana" por "Manga".

Exemplo 3: Substituindo

let frutas = ["Maçã", "Banana", "Laranja"];
// A partir do índice 1, remova 1 item e adicione "Manga"
frutas.splice(1, 1, "Manga");
// frutas agora é ["Maçã", "Manga", "Laranja"]
console.log(frutas);

