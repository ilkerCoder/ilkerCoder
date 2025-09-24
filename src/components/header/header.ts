import "./header.scss";

export class Header extends HTMLElement {

  updateActiveNavigation() {
    const navLinks = this.querySelectorAll('.main-navigation__link');

    // Tüm linklerden active class'ını kaldır
    navLinks.forEach(link => {
      link.classList.remove('main-navigation__link--active');
    });

    // Hangi sayfa gösteriliyor kontrol et
    const mainContent = document.querySelector('.main-content');
    const isUnderConstruction = mainContent?.querySelector('under-construction');
    const isHomePage = mainContent?.querySelector('#avatar-sec');

    if (isHomePage && !isUnderConstruction) {
      // Ana sayfa gösteriliyorsa About'u active yap
      const aboutLink = this.querySelector('.main-navigation__link[data-path="/about"]');
      if (aboutLink) {
        aboutLink.classList.add('main-navigation__link--active');
      }
    } else if (isUnderConstruction) {
      // Under construction sayfası gösteriliyorsa, hangi linke tıklandığını bul
      // Bu bilgiyi custom event ile alacağız
      const lastClickedPath = sessionStorage.getItem('lastClickedPath');
      if (lastClickedPath) {
        const activeLink = this.querySelector(`.main-navigation__link[data-path="${lastClickedPath}"]`);
        if (activeLink) {
          activeLink.classList.add('main-navigation__link--active');
        }
      }
    }
  }

  connectedCallback() {
    this.innerHTML = `<header class="main-header is--container">

  <a href="#" class="main-header__title is--fancyfont">
    <h1 class="main-header__h1 is--nomargin">Mustafa Ilker Kamis</h1>
  </a>

<nav class="main-navigation">
  <ul class="main-navigation__list is--nolist is--nomargin">
    <li class="main-navigation__entry">
      <a href="/about" class="main-navigation__link" data-path="/about">
        About
        <svg width="50" viewBox="0 0 173.5 30.9" xmlns="http://www.w3.org/2000/svg">
          <path d="M173 5c-1-4-6-3-7-3l-5 2-15 3-7-2c-5-3-12-5-19-4-8 1-13 6-17 9l-6 4-7-5c-4-3-8-7-15-8-13-3-20 3-24 8-2 2-3 3-5 3-3 0-5-1-8-3-4-3-9-7-17-8S6 3 2 10c-1 2-4 7-1 10 2 3 5 3 6 3 3 0 5-2 6-4l1-1 1-1c2-2 3-4 8-1l4 2c5 4 13 9 20 10 9 0 13-5 16-8 2-3 3-4 7-3s7 3 9 6c4 3 8 8 16 8l7-1c10-2 13-7 16-11 3-3 3-4 10-1 18 7 25 3 34-3l6-3c3-1 7-3 5-7Z" fill="currentColor"></path>
        </svg>
      </a>
    </li>
    <li class="main-navigation__entry">
      <a href="/blog/" class="main-navigation__link" data-path="/blog">
        Blog
        <svg width="50" viewBox="0 0 173.5 30.9" xmlns="http://www.w3.org/2000/svg">
          <path d="M173 5c-1-4-6-3-7-3l-5 2-15 3-7-2c-5-3-12-5-19-4-8 1-13 6-17 9l-6 4-7-5c-4-3-8-7-15-8-13-3-20 3-24 8-2 2-3 3-5 3-3 0-5-1-8-3-4-3-9-7-17-8S6 3 2 10c-1 2-4 7-1 10 2 3 5 3 6 3 3 0 5-2 6-4l1-1 1-1c2-2 3-4 8-1l4 2c5 4 13 9 20 10 9 0 13-5 16-8 2-3 3-4 7-3s7 3 9 6c4 3 8 8 16 8l7-1c10-2 13-7 16-11 3-3 3-4 10-1 18 7 25 3 34-3l6-3c3-1 7-3 5-7Z" fill="currentColor"></path>
        </svg>
      </a>
    </li>
    <li class="main-navigation__entry">
      <a href="/demo/" class="main-navigation__link" data-path="/demo">
        Demo
        <svg width="50" viewBox="0 0 173.5 30.9" xmlns="http://www.w3.org/2000/svg">
          <path d="M173 5c-1-4-6-3-7-3l-5 2-15 3-7-2c-5-3-12-5-19-4-8 1-13 6-17 9l-6 4-7-5c-4-3-8-7-15-8-13-3-20 3-24 8-2 2-3 3-5 3-3 0-5-1-8-3-4-3-9-7-17-8S6 3 2 10c-1 2-4 7-1 10 2 3 5 3 6 3 3 0 5-2 6-4l1-1 1-1c2-2 3-4 8-1l4 2c5 4 13 9 20 10 9 0 13-5 16-8 2-3 3-4 7-3s7 3 9 6c4 3 8 8 16 8l7-1c10-2 13-7 16-11 3-3 3-4 10-1 18 7 25 3 34-3l6-3c3-1 7-3 5-7Z" fill="currentColor"></path>
        </svg>
      </a>
    </li>
    <li class="main-navigation__entry">
      <a href="/art/" class="main-navigation__link" data-path="/art">
        Art
        <svg width="50" viewBox="0 0 173.5 30.9" xmlns="http://www.w3.org/2000/svg">
          <path d="M173 5c-1-4-6-3-7-3l-5 2-15 3-7-2c-5-3-12-5-19-4-8 1-13 6-17 9l-6 4-7-5c-4-3-8-7-15-8-13-3-20 3-24 8-2 2-3 3-5 3-3 0-5-1-8-3-4-3-9-7-17-8S6 3 2 10c-1 2-4 7-1 10 2 3 5 3 6 3 3 0 5-2 6-4l1-1 1-1c2-2 3-4 8-1l4 2c5 4 13 9 20 10 9 0 13-5 16-8 2-3 3-4 7-3s7 3 9 6c4 3 8 8 16 8l7-1c10-2 13-7 16-11 3-3 3-4 10-1 18 7 25 3 34-3l6-3c3-1 7-3 5-7Z" fill="currentColor"></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>

</header>`;

    this.updateActiveNavigation();

    // Navigation linklerine click event ekle
    const navLinks = this.querySelectorAll('.main-navigation__link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const path = link.getAttribute('data-path');
        if (path) {
          sessionStorage.setItem('lastClickedPath', path);
          // Biraz bekleyip navigation'u güncelleyelim
          setTimeout(() => {
            this.updateActiveNavigation();
          }, 100);
        }
      });
    });

    // MutationObserver ile main-content değişikliklerini izle
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      const observer = new MutationObserver(() => {
        this.updateActiveNavigation();
      });

      observer.observe(mainContent, {
        childList: true,
        subtree: true
      });
    }
  }
}
customElements.define("me-header", Header);
