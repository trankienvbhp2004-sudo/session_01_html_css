document.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-progress").forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      bar.style.width = bar.dataset.progress + "%";
    }
  });
});
