

function mudarCorParaVermelho() {
    const pinguimImagem = document.getElementById('pinguimImagem');
    const pinguimSelecionado = '../vermelho.png';
    localStorage.setItem('pinguimSelecionado', pinguimSelecionado);
  
    pinguimImagem.src = pinguimSelecionado;
}

function redirecionarParaPagina() {
    const url = 'conta.html';
    window.location.href = url;
}

function mudarCorParaRosa() {
    const pinguimImagem = document.getElementById('pinguimImagem');
    const pinguimSelecionado = '../rosa.png';
    localStorage.setItem('pinguimSelecionado', pinguimSelecionado);
  
    pinguimImagem.src = pinguimSelecionado;
}

function mudarCorParaRoxo() {
    const pinguimImagem = document.getElementById('pinguimImagem');
    const pinguimSelecionado = '../roxo.png';
    localStorage.setItem('pinguimSelecionado', pinguimSelecionado);
  
    pinguimImagem.src = pinguimSelecionado;
}

function mudarParaOrigem() {
    const pinguimImagem = document.getElementById('pinguimImagem');
    const pinguimSelecionado = '../corpinguim3.png';
    localStorage.setItem('pinguimSelecionado', pinguimSelecionado);
  
    pinguimImagem.src = pinguimSelecionado;
}

function toggleMostrarSenha(event) {
    event.preventDefault(); 

    const senhaInput = document.getElementById('senha');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        mostrarSenhaBtn.textContent = 'Ocultar Senha';
    } else {
        senhaInput.type = 'password';
        mostrarSenhaBtn.textContent = 'Mostrar Senha';
    }
}

function limparPlaceholder() {
    document.getElementById('resposta').placeholder = '';
}


document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    let pinguimSelecionado = '';


    if (document.getElementById('botaovermelho').classList.contains('selecionado')) {
        pinguimSelecionado = '../assets/vermelho.png';
    } else if (document.getElementById('botaorosa').classList.contains('selecionado')) {
        pinguimSelecionado = '../assets/rosa.png';
    } else if (document.getElementById('botaoxo').classList.contains('selecionado')) {
        pinguimSelecionado = '../assets/roxo.png';
    }

// Verificando se o botão vermelho foi selecionado
if (document.getElementById('botaovermelho').classList.contains('selecionado')) {
    console.log("Botão vermelho selecionado");
} else {
    console.log("Botão vermelho não selecionado");
}

// Verificando se o botão rosa foi selecionado
if (document.getElementById('botaorosa').classList.contains('selecionado')) {
    console.log("Botão rosa selecionado");
} else {
    console.log("Botão rosa não selecionado");
}

// Verificando se o botão roxo foi selecionado
if (document.getElementById('botaoxo').classList.contains('selecionado')) {
    console.log("Botão roxo selecionado");
} else {
    console.log("Botão roxo não selecionado");
}

    const url = `conta.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&cor=${encodeURIComponent(pinguimSelecionado)}`;

    const conta = {
        nome: nome,
        email: email,
        pinguim: pinguimSelecionado 
    };

    const contaJSON = JSON.stringify(conta);
    localStorage.setItem('contaPinguim', contaJSON);

    window.location.href = url;
});

function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const contaJSON = localStorage.getItem('contaPinguim');
    const conta = JSON.parse(contaJSON);
    const pinguimSelecionado = conta.pinguim;

    const url = `conta.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&cor=${encodeURIComponent(pinguimSelecionado)}`;

    window.location.href = url;
}

document.getElementById('meuFormulario').addEventListener('submit', enviarFormulario);