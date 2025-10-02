// Validação e interatividade para formulários
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Script carregado com sucesso")

  // Formulário de login do Portal do Aluno
  const loginForms = document.querySelectorAll(".login-form")
  loginForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]')?.value
      const name = this.querySelector('input[type="text"]')?.value

      if (email && email.includes("@")) {
        if (name) {
          alert(`Mensagem enviada com sucesso! Entraremos em contato em breve.`)
        } else {
          alert(`Redirecionando para o portal com o email: ${email}`)
        }
        console.log("[v0] Form submitted:", { email, name })
      } else {
        alert("Por favor, insira um email válido.")
      }
    })
  })

  const btnInscricao = document.querySelectorAll(".btn-inscricao")
  btnInscricao.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("[v0] Inscrição button clicked - redirecting to formulario.html")
      window.location.href = "formulario.html"
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

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered animation delay
        setTimeout(() => {
          entry.target.classList.add("fade-in-up")
        }, index * 100)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observar todos os cards
  const cards = document.querySelectorAll(".programa-card, .contact-card, .location-card")
  cards.forEach((card) => {
    observer.observe(card)
  })

  const interactiveElements = document.querySelectorAll(
    ".nav-menu a, .btn, .btn-saiba-mais, .btn-portal, .btn-inscricao",
  )
  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease"
    })
  })

  console.log("[v0] Todas as interações foram configuradas")
})
