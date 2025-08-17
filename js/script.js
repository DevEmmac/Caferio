const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', function() {
    nav.classList.add('right-0');
    // nav.classList.add('-right-full')
    console.log(nav);
});

close.addEventListener('click', function() {
    nav.classList.remove('right-0');
    nav.classList.add('-right-full')
});

// if (open && close && nav) {
//     open.addEventListener('click', function() {
//         nav.classList.add('right-0');
//         nav.style.backgroundColor = "black";
//     });
    
//     close.addEventListener('click', function() {
//         nav.classList.remove('right-0');
//     });
// }