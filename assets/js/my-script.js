'use strict';

(() => {
  // =========================
  // 	DOM
  const DOM = {};
  DOM.btnSubmit_1 = document.querySelector('.btn-submit-1');
  DOM.btnSubmit_2 = document.querySelector('.btn-submit-2');
  DOM.btnSubmit_3 = document.querySelector('.btn-submit-3');

  DOM.demo_1 = document.querySelector('confirm-delete.demo-1');

  // =========================
  // 	VARS

  // =========================
  // 	INIT
  const init = () => {
    DOM.btnSubmit_1.addEventListener('click', deleteSomething);
    DOM.btnSubmit_2.addEventListener('click', deleteSomething);
    DOM.btnSubmit_3.addEventListener('click', deleteSomething);

    DOM.demo_1.btnTrash.innerText = 'delete';

    // or an other icon:
    // DOM.demo_1.btnTrash.innerText = '<svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
  };

  // =========================
  // 	FUNCTIONS
  const deleteSomething = (e) => {
    // do something...

    DOM.demo_1.close();
    // If the submit section is to be closed again after clicking
    alert('You have clicked the delete button with the value:\n' + e.currentTarget.value);
  };

  init();
})();
