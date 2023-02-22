const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const elements = ingredients.map(element => {
  const itemsEl = document.createElement('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = element;
  
  return itemsEl;
});
console.log(elements)

listEl.append(...elements)