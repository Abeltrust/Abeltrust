// script.js

// Smooth scroll for navigation links
document.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Optional: Dark/Light Mode Toggle (adds a button dynamically)
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Dark mode";
  toggleButton.setAttribute("aria-label", "Toggle theme");
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "1rem";
  toggleButton.style.right = "1rem";
  toggleButton.style.background = "#38bdf8";
  toggleButton.style.color = "#0f172a";
  toggleButton.style.border = "none";
  toggleButton.style.padding = "0.5rem 1rem";
  toggleButton.style.borderRadius = "999px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.zIndex = "1000";
  
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    toggleButton.textContent = document.body.classList.contains("light-theme") ? "light mode" : "dark mode";
  });
  