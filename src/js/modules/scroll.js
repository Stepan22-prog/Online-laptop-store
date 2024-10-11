const btn = document.querySelector('.to-top');
document.addEventListener("scroll", () => {
  if (scrollY > 500) {
    btn.classList.add('to-top_active');
  } else {
    if (btn.classList.contains('to-top_active')) {
      btn.classList.remove('to-top_active');
    }
  }
});
btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
