const btn1 = document.querySelector('.list-1'),
      btn2 = document.querySelector('.list-2'),
      btn3 = document.querySelector('.list-3');



function change(addClass, removeClass2, removeClass3) {
    addClass.addEventListener('click', () => {
        if (!addClass.classList.contains('list-active')) {
            addClass.classList.add('list-active');
            removeClass2.classList.remove('list-active');
            removeClass3.classList.remove('list-active');
        }
    })
}

change(btn1, btn2, btn3);
change(btn2, btn1, btn3);
change(btn3, btn2, btn1);

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
 
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >; 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
 
  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
