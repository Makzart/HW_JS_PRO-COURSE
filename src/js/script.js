(function () {
  const form = document.querySelector('[data-form]');
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message';

  form.after(messageContainer);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputs = evt.target.querySelectorAll('input');
    let isFilled = true;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isFilled = false;
      }
    });

    if (!isFilled) {
      messageContainer.textContent = 'Будь ласка, заповніть усі поля';
    } else {
      messageContainer.textContent = 'Реєстрація успішна';
    }
  });
}());
