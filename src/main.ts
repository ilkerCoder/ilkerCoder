import { Header } from "./components/header/header";
import { Avatar } from "./components/avatar/avatar";
import { SocialMedia } from "./components/social-media/social-media";
import { UnderConstruction } from "./components/under-construction/under-construction";

// Avatar polygon animation
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

function setupNavigation() {
  const mainContent = document.querySelector(".main-content");
  const navLinks = document.querySelectorAll(".main-navigation__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");

      if (href === "/") {
        showHomePage();
      } else {
        showUnderConstruction();
      }
    });
  });

  function showHomePage() {
    if (mainContent) {
      mainContent.innerHTML = `
        <div id="avatar-sec">
          <me-avatar></me-avatar>
          <h2 class="presentation__greeting">Hello!</h2>
        </div>

        <div class="intro-text">
          <div class="intro-line">I code websites.</div>
          <div class="intro-line">I do artsy stuff.</div>
          <div class="intro-line">I blog sometimes.</div>
        </div>
      `;
    }
  }

  function showUnderConstruction() {
    if (mainContent) {
      mainContent.innerHTML = "<under-construction></under-construction>";
    }
  }
}

// Setup navigation when DOM is loaded
document.addEventListener("DOMContentLoaded", setupNavigation);
