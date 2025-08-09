import "../styles/index.css"

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("App initialized")
})

// Hot module replacement for development
if (import.meta.hot) {
  import.meta.hot.accept()
}
