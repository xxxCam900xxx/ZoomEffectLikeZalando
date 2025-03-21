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
let zoomableContainers = document.querySelectorAll('picture');

zoomableContainers.forEach(element => {
    let img = element.querySelector('img');

    element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(3)";
        img.style.transition = "transform 0.2s ease-out"; // Smooth zoom effect
    });

    element.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    });
});