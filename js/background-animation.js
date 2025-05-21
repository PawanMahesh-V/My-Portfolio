document.addEventListener("DOMContentLoaded", () => {
  const blob = document.querySelector(".gradient-blob")

  // Set initial position
  let posX = 0
  let posY = 0
  let targetX = window.innerWidth / 2
  let targetY = window.innerHeight / 2

  // Update blob position based on mouse movement
  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX
    targetY = e.clientY
  })

  // Smooth animation function
  function animateBlob() {
    // Calculate distance between current position and target
    const dx = targetX - posX
    const dy = targetY - posY

    // Move a small percentage of the distance each frame
    posX += dx * 0.05
    posY += dy * 0.05

    // Apply the new position
    blob.style.left = `${posX - 400}px`
    blob.style.top = `${posY - 400}px`

    // Continue animation
    requestAnimationFrame(animateBlob)
  }

  // Start animation
  animateBlob()

  // Handle window resize
  window.addEventListener("resize", () => {
    // Reset target to center of window when resized
    if (!targetX || !targetY) {
      targetX = window.innerWidth / 2
      targetY = window.innerHeight / 2
    }
  })
})
