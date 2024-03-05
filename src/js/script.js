(function () {
  const arr = [1, 2, [1.1, 1.2, 1.3], 3];
  const generateList = function (array) {
    const ul = document.createElement('ul');
    array.forEach((item) => {
      const li = document.createElement('li');
      if (Array.isArray(item)) {
        li.append(generateList(item));
      } else {
        li.textContent = item;
      }
      ul.append(li);
    });
    document.body.prepend(ul);
    return ul;
  };
  generateList(arr);
}());
