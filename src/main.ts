document.querySelectorAll("polygon").forEach(poly => {
  poly.addEventListener("mouseenter", () => {
    poly.classList.add("animate");

    // animasyon bittikten sonra sınıfı sil (tekrar çalışabilsin)
    poly.addEventListener("animationend", () => {
      poly.classList.remove("animate");
    }, { once: true });
  });
});