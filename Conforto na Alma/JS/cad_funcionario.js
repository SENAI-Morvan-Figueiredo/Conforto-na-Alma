function mostrarCNR() {
    var cargoSelecionado = document.getElementById("cargo").value;
    var cnrDiv = document.getElementById("cnrDiv");
    if (cargoSelecionado === "2") { // Se o cargo selecionado for "Médico" (valor 2)
        cnrDiv.style.display = "block"; // Mostra o campo CNR
    } else {
        cnrDiv.style.display = "none"; // Oculta o campo CNR para outros cargos
    }
}

function buscarEndereco() {
    var cep = document.getElementById("cep").value;
    if (cep.length === 8) { // Verifica se o CEP possui 8 dígitos
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById("uf").value = data.uf;
                    document.getElementById("cidade").value = data.localidade;
                    document.getElementById("bairro").value = data.bairro;
                    document.getElementById("endereco").value = data.logradouro;
                } else {
                    alert("CEP não encontrado.");
                }
            })
            .catch(error => console.error('Erro ao buscar endereço:', error));
    }
}