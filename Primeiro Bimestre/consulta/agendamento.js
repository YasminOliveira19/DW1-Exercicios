document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    const idadeRecebido = parseInt(document.getElementById('idade').value);

    // Regras de negócio para bloqueio na origem
    if (idadeRecebido <= 0) {
        event.preventDefault(); // Impede o envio do formulário
        alert("Inscrição bloqueada: Idade inválida");
    } else if (idadeRecebido >   120) {
        event.preventDefault(); // Impede o envio do formulário
        alert("Inscrição bloqueada: Idade inválida");
    }
    // Se a idade for válida, o formulário seguirá normalmente via GET.
});