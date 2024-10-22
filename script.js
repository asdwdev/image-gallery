const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {

    // cek apakah yang di-klik adalah thumb
    if (e.target.classList.contains('thumb')) {
        jumbo.src = e.target.src;

        jumbo.classList.add('fade');

        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});