'use strict';

// Selecting elements
const tasksEl = document.getElementById('tasks');
const messageEl = document.querySelector('.text');
const errorMessageEl = document.querySelector('.error');
const btnAdd = document.getElementById('push');

// Main variables
let inputEl;
let taskNum = 0;

const initializeElements = function (divEl, spanEl, taskEl, binImg, btnRemove) {
  // Adding div element
  tasksEl.appendChild(divEl);

  // Adding elements to div
  divEl.appendChild(spanEl);
  divEl.appendChild(btnRemove);
  spanEl.appendChild(taskEl);
  btnRemove.appendChild(binImg);
  btnRemove.classList.add('btn-remove');

  // Adding trash image
  binImg.src = 'bin.png';
  binImg.classList.add('img');

  // Adding task text
  taskEl.textContent = inputEl.value;
  divEl.classList.add('task');
};

const creatingElements = function () {
  // Adding div for message
  const divEl = document.createElement('div');
  const spanEl = document.createElement('span');
  const taskEl = document.createElement('p');
  const binImg = document.createElement('img');

  taskEl.addEventListener('click', function () {
    taskEl.classList.toggle('completed');
  });

  // Creating remove button
  const btnRemove = document.createElement('button');
  btnRemove.addEventListener('click', function () {
    tasksEl.removeChild(divEl);

    // Checking for last task
    if (taskNum === 1) {
      messageEl.classList.remove('hide');
    }
    taskNum--;
  });

  taskNum++;
  initializeElements(divEl, spanEl, taskEl, binImg, btnRemove);
};

const checkInput = function () {
  if (inputEl.value !== '') {
    messageEl.classList.add('hide');
    creatingElements();
    errorMessageEl.classList.add('hide');
  } else {
    errorMessageEl.classList.remove('hide');
  }
  inputEl.value = '';
};

btnAdd.addEventListener('click', function () {
  inputEl = document.querySelector('.input');
  checkInput();
});
