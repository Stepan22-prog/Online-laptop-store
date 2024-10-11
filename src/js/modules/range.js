import noUiSlider from 'nouislider';
import '../libs/wNumb.min.js'
if (document.getElementById('range')) {

  const html5Slider = document.getElementById('range');
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');

  noUiSlider.create(html5Slider, {
    start: [110, 900],
    connect: true,
    range: {
      'min': 100,
      'max': 1000
    },
    format: wNumb({
      decimals: 0,
    })
  });

  html5Slider.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      maxPrice.value = value;
    } else {
      minPrice.value = value
    }
  });
  minPrice.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });
  maxPrice.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
}
