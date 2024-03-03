(function () {
  /* Example #1 and #2 */
  const ulBody = document.getElementById('ulId');
  const attributesArray = [];
  const attributesValueArray = [];
  const ulAttributes = ulBody.attributes;

  for (const attribute of ulAttributes) {
    const attributeValue = attribute.nodeValue;
    attributesValueArray.push(attributeValue);
    attributesArray.push(attribute);
  }

  console.log(attributesValueArray);
  console.log(attributesArray);
  /* Example #3 */
  const liLast = ulBody.lastElementChild;
  liLast.textContent = 'Привет меня зовут Максим';
  /* Example #4 */
  const liFirst = ulBody.firstElementChild;
  liFirst.setAttribute('data-my-name', 'Максим');
  /* Example #4 */
  ulBody.removeAttribute('data-dog-tail');
}());
