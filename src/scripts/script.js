(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const config = window.ALPHA_CONFIG || {};
  document.querySelectorAll("[data-whatsapp-link]").forEach(link => {
    const number = (config.whatsappNumber || "").replace(/\D/g, "");
    if (number) {
      link.href = `https://wa.me/${number}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "contact.html";
      link.addEventListener("click", event => {
        if (link.getAttribute("href") === "contact.html" && location.pathname.endsWith("contact.html")) return;
      });
    }
  });
})();
