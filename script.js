const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "quantas patas tem uma centopeia? ",
        alternativas: [
            {
                texto: "entre 1000 a milhoes",
                afirmacao: "afirmação"
            },
            {
                texto: "entre 15 a 200",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Canguru e mamifero?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "nao",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quantos seres venenonsos tem no mundo?",
        alternativas: [
            {
                texto: "150.000 a 200.000 total",
                afirmacao: "afirmação"
            },
            {
                texto: "150.000 a 200.000 descobertos",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual o animal que mais mata no mundo",
        alternativas: [
            {
                texto: "tubarao e tudo que há de ruim",
                afirmacao: "afirmação"
            },
            {
                texto: "mosquito",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual o animal mais abundante do mundo",
        alternativas: [
            {
                texto: "insetos",
                afirmacao: "afirmação"
            },
            {
                texto: "mamiferos",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
