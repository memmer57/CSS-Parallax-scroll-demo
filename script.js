const spacer = document.querySelector("div:not(.flipped).spacer");
const flipped_spacer = document.querySelector(".spacer.flipped");

document.addEventListener("mousemove", function move_spacer(e) {
    spacer.style.left = e.pageX - spacer.offsetWidth/2 + 'px';
    flipped_spacer.style.right = e.pageX - spacer.offsetWidth/2 + 'px';
});