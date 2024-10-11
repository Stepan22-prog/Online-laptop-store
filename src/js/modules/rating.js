const ratingItems = document.querySelectorAll('.rating__item');
const ratingValue = document.querySelector('.rating__value');
ratingItems.forEach(item => {
  item.addEventListener('click', elem => {
    ratingValue.innerHTML = elem.target.value;
  })
})
