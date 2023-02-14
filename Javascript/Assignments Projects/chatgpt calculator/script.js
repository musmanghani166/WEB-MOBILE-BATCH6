const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');

for (const btn of btns) {
  btn.addEventListener('click', function () {
    display.textContent += btn.textContent;
  });
}

clearBtn.addEventListener('click', function () {
  display
});
