const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const element = ingredients.map(e => {
  const itemsEl = document.createElement('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = e;

  return itemsEl;
})

listEl.append(...element);