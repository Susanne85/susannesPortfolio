const heroImg= document.getElementById('heroImg');

heroImg.addEventListener('mouseenter', function(event){
    event.currentTarget.classList.add('old-pic');
    event.currentTarget.classList.remove('new-pic');
});

heroImg.addEventListener('mouseleave', function(event){
    event.currentTarget.classList.add('new-pic');
    event.currentTarget.classList.remove('old-pic');

});