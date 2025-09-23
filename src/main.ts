import { Header } from "./components/header/header";
import { Avatar } from "./components/avatar/avatar";
import { SocialMedia } from "./components/social-media/social-media";

document.querySelectorAll("polygon").forEach((poly) => {
  poly.addEventListener("mouseenter", () => {
    poly.classList.add("animate");

    poly.addEventListener(
      "animationend",
      () => {
        poly.classList.remove("animate");
      },
      { once: true }
    );
  });
});
