'use strict';

(() => {
  const template = document.createElement('template');

  template.innerHTML = /* html */ `
    <style>
      * { box-sizing: border-box; }
      .btn { text-align: center; vertical-align: middle; padding: 0.4rem 0.7rem; border-radius: 4px; text-decoration: none; display: inline-block; border: 1px solid #adadad; cursor: pointer; font-size: 1.1rem; }
      .btn-trash { color:#ffffff; background-color: #2b2b2b; }
      .btn-cancel { color: #000000; background-color: #d4d4d4; }
      .btn-confirm { color: #ffffff; background-color: #c91414; }
      svg { height: 14px; width: 14px; }
      .svg-trash { margin-top: 4px; fill: #ffffff; }
      .d-block { display: block; }
      .d-flex { display: flex; }
      .d-none { display: none; }
    </style>

    <div part="container" class="container">
      <button part="btn-delete" class="btn btn-trash d-block">
        <svg part="svg-delete" xmlns="http://www.w3.org/2000/svg" class="svg-trash" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
      </button>
      <div class="container-delete d-none">
        <div part="container-submit-delete">
          <slot name="left"></slot>
          <button part="btn-cancel" class="btn btn-cancel">
            cancel
          </button>
          <slot name="right"></slot>
        </div>
      </div>
    </div>
    `;

  class ConfirmDelete extends HTMLElement {
    #root = null;
    #containerDelete = null;

    constructor() {
      super();
      this.#root = this.attachShadow({ mode: 'closed' });
      this.#root.appendChild(template.content.cloneNode(true));
      this.btnTrash = this.#root.querySelector('.btn-trash');
      this.btnCancel = this.#root.querySelector('.btn-cancel');
      this.#containerDelete = this.#root.querySelector('.container-delete');
    }

    static get observedAttributes() {
      return ['text-cancel'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'text-cancel') {
        this.btnCancel.innerText = newValue;
      }
    }

    connectedCallback() {
      this.btnTrash.addEventListener('click', (e) => {
        this.btnTrash.classList.add('d-none');
        this.btnTrash.classList.remove('d-block');
        this.#containerDelete.classList.add('d-flex');
        this.#containerDelete.classList.remove('d-none');
      });

      this.btnCancel.addEventListener('click', (e) => {
        this.btnTrash.classList.add('d-block');
        this.btnTrash.classList.remove('d-none');
        this.#containerDelete.classList.add('d-none');
        this.#containerDelete.classList.remove('d-flex');
      });
    }

    close() {
      this.btnTrash.classList.add('d-block');
      this.btnTrash.classList.remove('d-none');
      this.#containerDelete.classList.add('d-none');
      this.#containerDelete.classList.remove('d-flex');
    }
  }

  customElements.define('confirm-delete', ConfirmDelete);
})();
