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

        <div class="vertical-text" id="vertical-typewriter" data-typetext="SOFTWARE ENGINEER"></div>
      `;

      // Start custom typewriter animation
      setTimeout(() => {
        const verticalElement = document.getElementById("vertical-typewriter");
        if (verticalElement) {
          startTypewriter(verticalElement);
        }
      }, 100);
    }
  }

  function showUnderConstruction() {
    if (mainContent) {
      mainContent.innerHTML = "<under-construction></under-construction>";
    }
  }
}

function startTypewriter(element: HTMLElement) {
  const text = element.dataset.typetext || "";
  let counter = -1;
  let isTyping = true;
  element.innerHTML = "";

  // Cursor’u aktif et
  element.classList.add("show-cursor");

  const typeInterval = setInterval(() => {
    if (isTyping) {
      if (counter < text.length - 1) {
        counter++;
        element.innerHTML += text.charAt(counter);
      } else {
        // Yazma bittiğinde cursor yine kalsın ama yazı silinsin
        isTyping = false;
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (element.innerHTML.length > 0) {
              element.innerHTML = element.innerHTML.slice(0, -1);
            } else {
              clearInterval(deleteInterval);
              counter = -1;
              isTyping = true;
            }
          }, 50);
        }, 1500);
      }
    }
  }, 120);
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  setTimeout(() => {
    const verticalElement = document.getElementById("vertical-typewriter");
    if (verticalElement) {
      startTypewriter(verticalElement);
    }
  }, 250);
});
