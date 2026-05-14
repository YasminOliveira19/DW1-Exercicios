function funcaoentrar() {
    let usuario=document.getElementById("inputusuario").value;
    let senha=document.getElementById("inputsenha").value;

    if (usuario==="usuario@usuario" && senha==="4321") {
         localStorage.setItem("logado", "true");

        // muda de página
        window.location.href = "menu.html";
    } else {
        alert("Login inválido!");
    }
}
