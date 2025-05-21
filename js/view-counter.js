document.addEventListener("DOMContentLoaded", () => {
  const viewCountElement = document.getElementById("viewCount")
  const plusOne = document.getElementById("plusOne")

  if (viewCountElement && plusOne) {
    const VIEW_COUNT_KEY = "portfolio_view_count"
    const SESSION_KEY = "portfolio_session"

    // Check if this is a new session
    const isNewSession = !sessionStorage.getItem(SESSION_KEY)
    sessionStorage.setItem(SESSION_KEY, "true")

    // Get current count
    let viewCount = Number.parseInt(localStorage.getItem(VIEW_COUNT_KEY) || "0")

    // Only increment if it's a new session
    if (isNewSession) {
      viewCount++
      localStorage.setItem(VIEW_COUNT_KEY, viewCount.toString())

      // Trigger the +1 animation
      plusOne.classList.add("animate-plus")
      plusOne.style.opacity = "1"

      // Remove animation after it finishes
      setTimeout(() => {
        plusOne.classList.remove("animate-plus")
        plusOne.style.opacity = "0"
      }, 1000)
    }

    // Update display
    viewCountElement.textContent = viewCount
  }
})
