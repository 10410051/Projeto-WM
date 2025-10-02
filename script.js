document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Script carregado com sucesso")


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

        setTimeout(() => {
          entry.target.classList.add("fade-in-up")
        }, index * 100)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)


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


  const inscriptionForm = document.getElementById("inscriptionForm")
  if (inscriptionForm) {
    inscriptionForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cpf: document.getElementById("cpf").value,
        nascimento: document.getElementById("nascimento").value,
        curso: document.getElementById("curso").value,
        periodo: document.getElementById("periodo").value,
        mensagem: document.getElementById("mensagem").value,
      }

      console.log("[v0] Form data:", formData)

      alert("Inscrição enviada com sucesso! Em breve entraremos em contato.")

      setTimeout(() => {
        window.location.href = "index.html"
      }, 2000)
    })


    const cpfInput = document.getElementById("cpf")
    if (cpfInput) {
      cpfInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "")
        if (value.length <= 11) {
          value = value.replace(/(\d{3})(\d)/, "$1.$2")
          value = value.replace(/(\d{3})(\d)/, "$1.$2")
          value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
          e.target.value = value
        }
      })
    }


    const telefoneInput = document.getElementById("telefone")
    if (telefoneInput) {
      telefoneInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "")
        if (value.length <= 11) {
          value = value.replace(/(\d{2})(\d)/, "($1) $2")
          value = value.replace(/(\d{5})(\d)/, "$1-$2")
          e.target.value = value
        }
      })
    }
  }

  console.log("[v0] Todas as interações foram configuradas")
})
