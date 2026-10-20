(() => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const config = window.ALPHA_CONFIG || {};
    const number = (config.whatsappNumber || "").replace(/\D/g, "");
    const data = new FormData(form);
    const text = [
      "Hello Alpha CCTV Solution, I would like to enquire about CCTV/security services.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Area: ${data.get("area")}`,
      `Service: ${data.get("service")}`
    ].join("\n");

    if (!number) {
      message.textContent = "Enquiry form is ready. Add the business WhatsApp number in js/config.js to enable sending.";
      return;
    }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    message.textContent = "WhatsApp opened with your enquiry. Please press Send in WhatsApp to submit it.";
  });
})();
