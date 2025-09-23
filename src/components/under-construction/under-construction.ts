import "./under-construction.scss";

export class UnderConstruction extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="construction-container">
        <div class="construction-content">
          <div class="glitch-text" data-text="UNDER CONSTRUCTION">
            UNDER CONSTRUCTION
          </div>

          <div class="construction-message">
            <p class="main-text">Bu sayfa henüz yapım aşamasında...</p>
            <p class="sub-text">üşenmezsem yapacağım 🤖</p>
            <p class="tech-text">// TODO: Implement this page when motivation.level > 0</p>
          </div>

          <div class="construction-visual">
            <div class="loading-bar">
              <div class="loading-progress"></div>
              <span class="loading-text">Loading... 42%</span>
            </div>

            <div class="terminal">
              <div class="terminal-header">
                <span class="terminal-title">terminal://ilkerCoder</span>
                <div class="terminal-buttons">
                  <span class="btn-close">•</span>
                  <span class="btn-minimize">•</span>
                  <span class="btn-maximize">•</span>
                </div>
              </div>
              <div class="terminal-body">
                <div class="terminal-line">
                  <span class="prompt">$</span> npm run build-motivation
                </div>
                <div class="terminal-line">
                  <span class="output">Error: Package 'motivation' not found</span>
                </div>
                <div class="terminal-line">
                  <span class="prompt">$</span> git status
                </div>
                <div class="terminal-line">
                  <span class="output">On branch procrastination</span>
                </div>
                <div class="terminal-line">
                  <span class="output">Nothing to commit, working tree dirty</span>
                </div>
                <div class="terminal-line">
                  <span class="prompt">$</span> <span class="cursor">|</span>
                </div>
              </div>
            </div>
          </div>

          <a class="back-btn" href="/ilkerCoder/">
            <i class="fas fa-arrow-left"></i>
            <span>Geri Dön</span>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("under-construction", UnderConstruction);
