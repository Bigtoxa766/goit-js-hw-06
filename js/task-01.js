const getNumberOfCategories = () => {
  const numberEl = document.querySelectorAll('.item').length;

  console.log('Number of categories: ', numberEl)
};

getNumberOfCategories();

// const categoryEl = document.querySelector('.item');
// console.log('Category: ', categoryEl.firstElementChild.textContent)

// const elementsEl = categoryEl.lastElementChild;
// console.log("Elements:", elementsEl.children.length);


const itemsEl = document.querySelectorAll('.item')

itemsEl.forEach(element => {
  console.log('Category: ', element.firstElementChild.textContent)
  console.log('Elements: ', element.lastElementChild.children.length)
});

