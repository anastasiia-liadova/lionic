// let red = document.querySelector('.services-item')

// red.addEventListener ('click', function(){
//   red.classList.add("test_js");
// })




let burger = document.querySelector(".btn-burger");
let nav = document.querySelector(".header-nav");
let body = document.querySelector(".body");

burger.addEventListener("click",
function() {
  body.classList.toggle("stop--scroll");
  burger.classList.toggle("burger--active");
  nav.classList.toggle("header-nav--visible");
});

let btnMore = document.querySelector(".article-more");
let articlesItems = document.querySelectorAll(".articles-item");

btnMore.addEventListener("click", function(){
  articlesItems.forEach(el => {el.classList.add("articles-item--visible")});
  btnMore.closest(".article-center").classList.add("article-center--hidden");
});
