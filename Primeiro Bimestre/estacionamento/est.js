function funcaoCalcular(){

    let entrada = new Date(document.getElementById("inpute").value);
    let saida = new Date(document.getElementById("inputs").value);
    let carro = document.getElementById("inputc").checked;
    let cliente = document.getElementById("inputcli").checked;

    let valor = 0;

    
    let dif = saida - entrada;
    let horas = dif / (1000 * 60 * 60);

    if (isNaN(horas) || horas <= 0) {
        document.getElementById("saida").innerText =
            "Horário inválido!";
        return;
    }

    let dias = Math.floor(horas / 24);
    let resto = horas % 24;

    if (horas >= 24) {
        valor = dias * 60;
        valor += resto * 2.5;
    } else {
        valor = 5;

        if (horas > 1) {
            valor += (horas - 1) * 2.5;
        }
    }

    if (carro) {
        valor += valor * 0.25;
    }

    if (cliente) {
        valor -= valor * 0.05;
    }

    document.getElementById("saida").innerText =
        "O valor total é R$ " + valor.toFixed(2);
}