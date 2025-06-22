// Animação ao enviar formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});

// Menu Responsivo
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Scroll Reveal com reverso
const reveals = document.querySelectorAll(".reveal");

function handleScrollReveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementBottom = reveals[i].getBoundingClientRect().bottom;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);
