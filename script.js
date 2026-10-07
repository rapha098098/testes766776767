// getElementById
const titulo = document.getElementById("titulo");
const nome = document.getElementById("nome");
const iniciar = document.getElementById("iniciar");
const enviar = document.getElementById("enviar");
const placar = document.getElementById("placar");

// getElementsByTagName
const perguntas = document.getElementsByTagName("p");

// getElementsByClassName
const alternativasClasse = document.getElementsByClassName("alternativa");

// querySelectorAll
const alternativas = document.querySelectorAll(".alternativa");

// Guarda a pontuação
let pontos = 0;


// EVENTO INPUT
nome.addEventListener("input", function () {

    if (nome.value.trim() !== "") {
        iniciar.disabled = false;

        titulo.innerText = "Quiz de " + nome.value;
    } else {
        iniciar.disabled = true;

        titulo.innerText = "Mini Quiz Interativo";
    }

});


// EVENTO CLICK - iniciar quiz
iniciar.addEventListener("click", function () {

    titulo.innerText = "Boa sorte, " + nome.value + "!";

});


// Manipulando as perguntas usando getElementsByTagName
for (let i = 0; i < perguntas.length; i++) {

    perguntas[i].addEventListener("mouseover", function () {
        perguntas[i].style.color = "red";
    });

    perguntas[i].addEventListener("mouseout", function () {
        perguntas[i].style.color = "black";
    });

}


// Usando getElementsByClassName
for (let i = 0; i < alternativasClasse.length; i++) {

    alternativasClasse[i].style.border = "1px solid #cccccc";

}


// querySelectorAll + eventos nas alternativas
alternativas.forEach(function (alternativa) {

    // mouseover
    alternativa.addEventListener("mouseover", function () {

        if (
            !alternativa.classList.contains("respondida-correta") &&
            !alternativa.classList.contains("respondida-incorreta")
        ) {
            alternativa.classList.add("destaque");
        }

    });


    // mouseout
    alternativa.addEventListener("mouseout", function () {

        alternativa.classList.remove("destaque");

    });


    // click
    alternativa.addEventListener("click", function () {

        const lista = alternativa.parentElement;

        // Impede responder a mesma questão duas vezes
        if (lista.classList.contains("respondida")) {
            return;
        }

        lista.classList.add("respondida");

        if (alternativa.classList.contains("correta")) {

            alternativa.classList.add("respondida-correta");

            pontos++;

        } else {

            alternativa.classList.add("respondida-incorreta");

        }

    });

});


// EVENTO CLICK - finalizar
enviar.addEventListener("click", function () {

    placar.innerText =
        nome.value + ", você acertou " +
        pontos + " de 4 perguntas.";

});


// EVENTO KEYDOWN
document.addEventListener("keydown", function (event) {

    console.log("Tecla pressionada: " + event.key);

    // Enter finaliza o quiz
    if (event.key === "Enter" && nome.value.trim() !== "") {

        placar.innerText =
            nome.value + ", você acertou " +
            pontos + " de 4 perguntas.";

    }

});