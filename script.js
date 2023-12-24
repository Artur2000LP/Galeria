document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.div_img');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');

    imgs.forEach(img => {
        img.addEventListener("click", () => {
            overlayImg.src = img.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});