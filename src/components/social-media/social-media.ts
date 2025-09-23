import "./social-media.scss";
export class SocialMedia extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <nav class="social">
      <ul>
        <li>
          <a href="https://github.com/MDJAmin">Github <i class="fa fa-github"></i></a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/DARKLORDCDL "
            >Youtube <i class="fa fa-youtube"></i
          ></a>
        </li>
        <li>
          <a href="https://dribbble.com/MDJAmin">Dribbble <i class="fa fa-dribbble"></i></a>
        </li>
        <li>
          <a href="https://www.behance.net/MDJAminn">Behance <i class="fa fa-behance"></i></a>
        </li>
      </ul>
    </nav>
        `;
  }
}
customElements.define("me-social", SocialMedia);
