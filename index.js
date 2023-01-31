const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerHTML;
    if (buttonValue === 'C') {
      display.innerHTML = '';
    } else if (buttonValue === '=') {
      display.innerHTML = eval(display.innerHTML);
    } else {
      display.innerHTML += buttonValue;
    }
  });
});
