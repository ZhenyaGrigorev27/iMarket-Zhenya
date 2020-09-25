(function (){
    const controlls = document.querySelectorAll(".filter__link");

    const activeClassFilt = 'filter__item--active';

    controlls.forEach(function (control){
        control.addEventListener('click', function (e) {
            e.preventDefault();

            controlls.forEach(function (link) {
                link.closest(".filter__item").classList.remove(activeClassFilt);
            });

            control.closest(".filter__item").classList.add(activeClassFilt);
        });
    });
})();