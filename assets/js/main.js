// Main JavaScript file

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const navTrigger = document.getElementById("nav-trigger")
  const navLinks = document.querySelector(".nav-links")

  if (navTrigger && navLinks) {
    navTrigger.addEventListener("change", function () {
      if (this.checked) {
        navLinks.style.display = "flex"
      } else {
        navLinks.style.display = ""
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(href)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Form validation
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Basic validation
      let isValid = true
      const requiredFields = contactForm.querySelectorAll("[required]")

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("is-invalid")
        } else {
          field.classList.remove("is-invalid")
        }
      })

      if (isValid) {
        // Here you would typically send the form data to a server
        // For this template, we'll just show a success message
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
      }
    })
  }
})

