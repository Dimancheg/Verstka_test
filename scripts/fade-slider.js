(function() {
    const slides = document.querySelectorAll('.fade-slider__item');
    const activClass = "fade-slider__item--visibl";
    let index = 0;
    
    console.log(slides[2]);

    setInterval(function(){
        slides[index].classList.remove(activClass);
        index++;
        if(index + 1 > slides.length){
            index = 0;
        }
        slides[index].classList.add(activClass);
        
    },5000)
}());