function economizarAgua() {

    let economia = Math.floor(Math.random() * 100) + 1;

    document.getElementById("resultado").innerHTML =
        `A irrigação inteligente economizou ${economia}% de água!`;
}