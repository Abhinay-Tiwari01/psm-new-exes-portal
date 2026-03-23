document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const downloadBtns = document.querySelectorAll(".download-btn");

  // Staggered card animation
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100 + 200);
  });

  // ONLY hover effect - NO click expansion
  downloadBtns.forEach((btn) => {
    // Hover effect
    btn.addEventListener("mouseenter", function () {
      this.style.background = "#1a252f";
    });

    btn.addEventListener("mouseleave", function () {
      this.style.background = "#2c3e50";
    });

    // Click feedback ONLY (no size change)
    btn.addEventListener("mousedown", function () {
      this.style.transform = "translateY(1px) scale(0.98)";
    });

    btn.addEventListener("mouseup", function () {
      this.style.transform = "";
    });
  });
});
