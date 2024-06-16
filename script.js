'use strict';

const modalWindow = document.querySelector('.modal');
const modalWindowCloseBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalBtns = document.querySelectorAll('.show-modal');

const openModal = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal();
  }
});

for (let i = 0; i < showModalBtns.length; i++)
  showModalBtns[i].addEventListener('click', openModal);

modalWindowCloseBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
