function showImage(image) {

    let images = document.querySelectorAll('picture');

    images.forEach(element => {
        element.style.display = "none";
        element.setAttribute("display", "none");
    });

    if (image) {
        let visibleImage = document.querySelector(`picture[data-image="${image}"]`);
        console.log(visibleImage);

        visibleImage.style.display = "block";
        visibleImage.setAttribute("display", "show");
    } else {
        let visibleImage = document.querySelector(`picture[data-image="1"]`);
        visibleImage.style.display = "block";
        visibleImage.setAttribute("display", "show");
    }
}
showImage();

// Hover Effect
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".containerzoom");
    const images = document.querySelectorAll("picture img");

    container.addEventListener("mousemove", function (e) {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        
        images.forEach(img => {
            img.style.transformOrigin = `${x}% ${y}%`;
            img.style.transform = "scale(3)";
        });
    });

    container.addEventListener("mouseleave", function () {
        images.forEach(img => {
            img.style.transform = "scale(1)";
        });
    });
});