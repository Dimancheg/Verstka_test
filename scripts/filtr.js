(function(){

const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.product__item',
  filter: '.pop'
});
   const controlls = document.querySelectorAll(".filter__link"); 
   const activeClass = "filter__item--active";

   controlls.forEach(function(control){
        control.addEventListener('click', function(e){
            e.preventDefault();

            const filterName = control.getAttribute("data-filtr");

            controlls.forEach(function(linc){
                linc.closest('.filter__item').classList.remove(activeClass);
            })
            control.closest('.filter__item').classList.add(activeClass);
            iso.arrange({
                filter: `.${filterName}`
            })
        })
   })
})();
