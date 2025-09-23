import "./social-media.scss";
export class SocialMedia extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <nav class="social">
      <ul>
        <li>
          <a href="https://github.com/ilkerCoder">Github <i class="fa-brands fa-github"></i></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mustafa-ilker-kami%C5%9F-268b551bb/">Linkedin<i class="fa-brands fa-linkedin"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/xpetra_ichor/">Instagram <i class="fa-brands fa-instagram"></i></a>
        </li>
      </ul>
    </nav>
        `;
  }
}
customElements.define("me-social", SocialMedia);
