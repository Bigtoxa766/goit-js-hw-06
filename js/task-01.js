const getNumberOfCategories = () => {
  const numberEl = document.querySelectorAll('.item').length;

  console.log('Number of categories: ', numberEl)
};

getNumberOfCategories();

const categoryEl = document.querySelector('.item');
console.log('Category: ', categoryEl.firstElementChild.textContent)

const elementsEl = categoryEl.lastElementChild;
console.log("Elements:", elementsEl.children.length);

