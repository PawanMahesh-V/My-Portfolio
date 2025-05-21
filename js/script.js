// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    menuToggle.classList.toggle("active")
  })

  // Typewriter Effect
  const typewriterText = document.getElementById("typewriter-text")
  if (typewriterText) {
    const phrases = ["Web Developer", "Problem Solver", "Tech Enthusiast", "UI/UX Designer"]

    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingSpeed = 100

    function typeWriter() {
      const currentPhrase = phrases[phraseIndex]

      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 100
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true
        typingSpeed = 1000 // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before typing next phrase
      }

      setTimeout(typeWriter, typingSpeed)
    }

    typeWriter()
  }

  // Animate skill bars when in viewport
  const skillBars = document.querySelectorAll(".skill-progress")
  const softSkillCircles = document.querySelectorAll(".soft-skill-progress")

  function animateSkills() {
    // Animate technical skills
    skillBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (barPosition < screenPosition) {
        const percent = bar.getAttribute("data-percent")
        bar.style.width = percent + "%"
      }
    })

    // Animate soft skills
    softSkillCircles.forEach((circle) => {
      const circlePosition = circle.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (circlePosition < screenPosition) {
        const percent = circle.getAttribute("data-percent")
        circle.style.background = `conic-gradient(var(--secondary-color) 0% ${percent}%, #e0e0e0 ${percent}% 100%)`
      }
    })
  }

  // Check on initial load and add scroll event listener
  window.addEventListener("scroll", animateSkills)

  // Initial check for elements already in viewport
  setTimeout(animateSkills, 500)

  // Project cards animation on scroll
  const projectCards = document.querySelectorAll(".project-card")
  const animatedCards = new Set()

  function animateProjectCards() {
    projectCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (cardPosition < screenPosition && !animatedCards.has(card)) {
        card.classList.add("visible")
        animatedCards.add(card)
      }
    })
  }

  // Add scroll event listener for project cards
  window.addEventListener("scroll", animateProjectCards)

  // Initial check for cards in viewport
  setTimeout(animateProjectCards, 500)

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectItems = document.querySelectorAll(".project-item")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Form Submission
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const message = document.getElementById("message").value.trim()

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address")
        return
      }

      try {
        // Here you would typically send the form data to a server
        // For now, we'll simulate a successful submission
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

        // Show success message
        const successMessage = document.createElement("div")
        successMessage.className = "success-message"
        successMessage.style.padding = "15px"
        successMessage.style.marginTop = "20px"
        successMessage.style.backgroundColor = "rgba(52, 152, 219, 0.1)"
        successMessage.style.borderRadius = "8px"
        successMessage.style.color = "var(--secondary-color)"
        successMessage.style.textAlign = "center"
        successMessage.textContent = "Thank you for your message! I will get back to you soon."
        contactForm.appendChild(successMessage)

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove()
        }, 5000)

        // Reset form
        contactForm.reset()
      } catch (error) {
        alert("Sorry, there was an error sending your message. Please try again later.")
      }
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      // Only apply smooth scroll for same-page links
      if (targetId.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })

          // Close mobile menu if open
          if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active")
            menuToggle.classList.remove("active")
          }
        }
      }
    })
  })

  // Animate elements when they come into view
  const fadeElements = document.querySelectorAll(".fade-in")

  function checkFade() {
    fadeElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  window.addEventListener("scroll", checkFade)
  checkFade() // Check on initial load
})
