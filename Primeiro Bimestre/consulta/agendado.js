 window.onload = function() {

    var parametrosDaUrl = new URLSearchParams(window.location.search);

    var nomeRecebido = parametrosDaUrl.get('nome');
    var cpfRecebido = parametrosDaUrl.get('cpf');
    var idadeRecebido = parseInt(parametrosDaUrl.get('idade')); 
    var consultaRecebido = parametrosDaUrl.get('consulta');
     var turnoRecebido = parametrosDaUrl.get('turno');
    var cidadeRecebido = parametrosDaUrl.get('cidade');

    let faixaetaria = "";

    if (idadeRecebido <= 12 && idadeRecebido > 0) {
        faixaetaria = "Infantil";
    } else if (idadeRecebido < 18) {
        faixaetaria = "Adolescente";
    } else if (idadeRecebido < 60) {
        faixaetaria = "Adulto";
    } else if (idadeRecebido < 120) {
        faixaetaria = "Idoso";
    } else {
        alert("Idade inválida para competição. Redirecionando...");
        window.location.href = "agendamento.html";
        return;
    }

    document.getElementById('resultadoNome').textContent = nomeRecebido;
    document.getElementById('resultadoCpf').textContent = cpfRecebido;
    document.getElementById('resultadoIdade').textContent = idadeRecebido;
    document.getElementById('resultadoConsulta').textContent = consultaRecebido;
    document.getElementById('resultadoTurno').textContent = turnoRecebido;
    document.getElementById('resultadoCidade').textContent = cidadeRecebido;
    document.getElementById('resultadoFaixaEtaria').textContent = faixaetaria;


    document.getElementById('btnVoltar').addEventListener('click', function() {
        window.location.href = 'agendamento.html';
    });
};