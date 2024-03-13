(function () {
  const btn = document.querySelector('[data-btn-click]');

  btn.onclick = function () {
    const input = document.querySelector('input');
    const number = input.value;

    if (!isNaN(number)) {
      if (number % 2 === 0) /* div.innerHTML = 'Число парне' */ alert('Число парне');
      else alert('Число не парне');
    } else {
      alert('Введіть коректне число');
    }
  };
}());
