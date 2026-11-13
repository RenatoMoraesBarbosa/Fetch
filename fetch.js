const busca = document.getElementById("busca");
const resultado = document.getElementById("resultado");
const erros = document.getElementById("erros");

async function buscar_usuarios() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!resposta.ok) {
            throw new Error("Não foi possível");
        }
        const dados = await resposta.json();
        dados.forEach((dado) => {
            resultado.innerHTML += `
            <p>${dado.name}</p>
            <p>${dado.email}</p>`;
        })
    }

    catch(erro) {
        erros.innerText = `Erro: ${erro}`;
    }
}

busca.addEventListener("click", function() {
    buscar_usuarios();
})