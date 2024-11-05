// Função para adicionar valor ao display
function adicionarValor(valor) {
    document.getElementById("display").value += valor;
}

// Função para limpar o display
function limpar() {
    document.getElementById("display").value = '';
}

// Função para calcular o resultado
function calcular() {
    try {
        var resultado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resultado;
    } catch (e) {
        document.getElementById("display").value = 'Erro';
    }
}