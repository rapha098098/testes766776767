function mostrar(parte, mensagem) {
    let elemento = document.createElement("p");
    elemento.textContent = mensagem;
    document.getElementById(parte).appendChild(elemento);
    console.log(mensagem);
}

// 1.1
let categorias = ["Eletrônicos", "Vestuário", "Alimentos"];
mostrar("parte1", "1.1 - Categorias: " + categorias.join(", "));

// 1.2
let codigosProdutos = [101, 102, 103, 104];
let fornecedores = new Array("TechSupply", "ModaExpress", "SuperFoods");
mostrar("parte1", "1.2 - Códigos: " + codigosProdutos.join(", "));
mostrar("parte1", "1.2 - Fornecedores: " + fornecedores.join(", "));

// 1.3
mostrar("parte1", "1.3 - Primeiro elemento: " + categorias[0]);
categorias[1] = "Calçados";
mostrar("parte1", "1.3 - Array atualizado: " + categorias.join(", "));

// 2.1
categorias.push("Livros");
categorias.pop();
categorias.unshift("Brinquedos");
categorias.shift();
mostrar("parte2", "2.1 - Categorias: " + categorias.join(", "));

// 2.2
mostrar("parte2", "2.2 - Quantidade de categorias: " + categorias.length);

// 2.3
mostrar("parte2", "2.3 - Índice de Calçados: " + categorias.indexOf("Calçados"));
mostrar("parte2", "2.3 - Existe Eletrônicos? " + categorias.includes("Eletrônicos"));

// 3.1 - FOR TRADICIONAL
for (let i = 0; i < categorias.length; i++) {
    mostrar("parte3", "3.1 - " + categorias[i]);
}

// 3.2 - FOR...OF
for (let categoria of categorias) {
    mostrar("parte3", "3.2 - " + categoria);
}

// 4.1 - ACESSO A OBJETOS
const produtos = [
    { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
    { nome: "Mouse Gamer", preco: 120.00, estoque: 8 },
    { nome: "Monitor Ultrawide", preco: 1200.00, estoque: 4 }
];
mostrar("parte4", "4.1 - Primeiro produto: " + produtos[0].nome);

let produtosBaratos = produtos.filter(produto => produto.preco < 300);
mostrar("parte4", "4.2 - Produtos baratos: " + JSON.stringify(produtosBaratos));

let precos = [50, 150, 200, 350, 400];
let multiplos = precos.filter(preco => preco % 100 === 0);
mostrar("parte4", "4.2 - Múltiplos de 100: " + multiplos.join(", "));

let quantidades = [2, 3, 5, 10];
let totalItens = quantidades.reduce((total, quantidade) => total + quantidade, 0);
mostrar("parte4", "4.3 - Total de itens: " + totalItens);

let valorEstoque = produtos.reduce(
    (total, produto) => total + produto.preco * produto.estoque,
    0
);
mostrar("parte4", "4.3 - Valor total do estoque: R$ " + valorEstoque.toFixed(2));

let precosOriginais = [100, 200, 300];
let precosDesconto = precosOriginais.map(preco => preco * 0.9);
mostrar("parte4", "4.4 - Preços com desconto: " + precosDesconto.join(", "));

let nomesProdutos = produtos.map(produto => produto.nome);
mostrar("parte4", "4.4 - Nomes dos produtos: " + nomesProdutos.join(", "));

let produtosOrdenados = produtos.slice();
produtosOrdenados.sort((a, b) => a.preco - b.preco);
mostrar("parte4", "4.5 - Produtos ordenados: " + JSON.stringify(produtosOrdenados));

let estoqueBaixo = produtos.some(produto => produto.estoque < 5);
mostrar("parte4", "4.6 - Existe estoque baixo? " + estoqueBaixo);

let inventario = [
    { nome: "Teclado", estoque: 15 },
    { nome: "Mouse", estoque: 2 },
    { nome: "Headset", estoque: 10 }
];
let existeCritico = inventario.some(produto => produto.estoque < 5);
let produtoCritico = inventario.find(produto => produto.estoque < 5);
mostrar("parte4", "4.6 - Existe estoque crítico? " + existeCritico);
mostrar("parte4", "4.6 - Primeiro produto crítico: " + JSON.stringify(produtoCritico));
