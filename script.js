// Validação e interatividade para formulários
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Script carregado com sucesso")

  // Formulário de login do Portal do Aluno
  const loginForms = document.querySelectorAll(".login-form")
  loginForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      if (email && email.includes("@")) {
        alert(`Redirecionando para o portal com o email: ${email}`)
        console.log("[v0] Login attempt:", email)
      } else {
        alert("Por favor, insira um email válido.")
      }
    })
  })

  // Botão de inscrição
  const btnInscricao = document.querySelectorAll(".btn-inscricao")
  btnInscricao.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Redirecionando para o formulário de inscrição...")
      console.log("[v0] Inscrição button clicked")
      // Aqui você pode redirecionar para uma página de inscrição
      // window.location.href = 'inscricao.html';
    })
  })

  // Animação de scroll suave para links âncora
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && href !== "#contato") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Adicionar classe de animação aos cards quando visíveis
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observar todos os cards
  const cards = document.querySelectorAll(".programa-card, .contact-card, .location-card")
  cards.forEach((card) => {
    observer.observe(card)
  })

  // Contador animado para números (se houver)
  function animateCounter(element, target, duration = 2000) {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        element.textContent = target
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(start)
      }
    }, 16)
  }

  // Efeito de hover nos botões
  const buttons = document.querySelectorAll(".btn, .btn-saiba-mais, .btn-portal")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  console.log("[v0] Todas as interações foram configuradas")
})
