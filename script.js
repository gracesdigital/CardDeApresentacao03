/* Interações do cartão Graces Digital */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quick-link").forEach((link) => {
    if (link.href.startsWith("https://")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
  console.info("Cartão carregado. Personalize os links no index.html antes de publicar.");
});
