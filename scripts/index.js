const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

button.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) return navbar.classList.add("active");
    return navbar.classList.remove("active");
});

// Seleciona todos os botões "Leia mais..."
const btns = document.querySelectorAll(".show-or-hide");

// Faz um loop por todos os botões selecionados
btns.forEach((btn) => {
    // Adiciona um listener de evento para cada botão
    btn.addEventListener("click", function () {
        // Seleciona o elemento "outros" correspondente ao clique
        const outros = btn.parentElement.querySelector(".outros");

        // Alterna a classe 'showOthers' para mostrar ou esconder o conteúdo
        outros.classList.toggle("showOthers");
    });
});
