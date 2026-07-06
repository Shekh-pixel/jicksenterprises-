
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("✅ Product added to cart!\n\nWhatsApp: 9667633179");
    });
  });
});
