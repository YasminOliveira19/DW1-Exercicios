window.onload = function() {

    var parametrosDaUrl = new URLSearchParams(window.location.search);

    var cpfRecebido = parametrosDaUrl.get('cpf');
    var nomeRecebido = parametrosDaUrl.get('nome');
    var idadeRecebido = parseInt(parametrosDaUrl.get('idade')); 
    var nomeresponsavelRecebido = parametrosDaUrl.get('nomeresponsavel');
    var cidadeorigemRecebido = parametrosDaUrl.get('cidadeorigem');
    var cidadedestinoRecebido = parametrosDaUrl.get('cidadedestino');
    var modalidadeRecebido = parametrosDaUrl.get('modalidade');

    let categoria = "";

    if (idadeRecebido >= 7 && idadeRecebido <= 11) {
        categoria = "Infantil";
    } else if (idadeRecebido >= 12 && idadeRecebido <= 13) {
        categoria = "Pré-adolescente";
    } else if (idadeRecebido >= 14 && idadeRecebido <= 18) {
        categoria = "Adolescente";
    } else {
        alert("Idade inválida para competição. Redirecionando...");
        window.location.href = "autorizacao.html";
        return;
    }

    document.getElementById('resultadoCpf').textContent = cpfRecebido;
    document.getElementById('resultadoNome').textContent = nomeRecebido;
    document.getElementById('resultadoIdade').textContent = idadeRecebido;
    document.getElementById('resultadoNomeResponsavel').textContent = nomeresponsavelRecebido;
    document.getElementById('resultadoCidadeOrigem').textContent = cidadeorigemRecebido;
    document.getElementById('resultadoCidadeDestino').textContent = cidadedestinoRecebido;
    document.getElementById('resultadoModalidade').textContent = modalidadeRecebido;
    document.getElementById('resultadoCategoria').textContent = categoria;


    document.getElementById('btnVoltar').addEventListener('click', function() {
        window.location.href = 'autorizacao.html';
    });
};