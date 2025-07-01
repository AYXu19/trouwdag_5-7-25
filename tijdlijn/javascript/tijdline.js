document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("img-popup");
  const popupImg = document.getElementById("popup-img");
  const closePopup = document.querySelector(".close-popup");

  document.querySelectorAll(".timeline img").forEach(img => {
    if (!img.src || img.src.trim() === "" || img.src.endsWith("/")) return;
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      popup.style.display = "block";
      popupImg.src = img.src;
      popupImg.alt = img.alt;
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // Scroll animatie
  const containers = document.querySelectorAll(".container");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  containers.forEach(container => {
    observer.observe(container);
  });
});
