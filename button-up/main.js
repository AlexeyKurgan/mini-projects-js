let btnScroll = document.getElementById('btnScroll');

function goUp(){
    if(window.pageYOffset > 0){
        window.scrollBy(0,-100)
        setTimeout(goUp, 30);
    }
}

btnScroll.addEventListener('click', () => {
    return goUp();
});

window.addEventListener('scroll', function () {
    if (pageYOffset <= document.documentElement.clientHeight) {
        btnScroll.style.visibility = 'hidden';
    } else {
        btnScroll.style.visibility = 'visible';
    }
});
