function showImage(image) {

    let images = document.querySelectorAll('.mainImage');

    images.forEach(element => {
        element.style.display = "none";
        element.setAttribute("display", "none");
    });

    if (image) {
        let visibleImage = document.querySelector(`.mainImage[data-image="${image}"]`);
        console.log(visibleImage);

        visibleImage.style.display = "block";
        visibleImage.setAttribute("display", "show");
    } else {
        let visibleImage = document.querySelector(`.mainImage[data-image="1"]`);
        visibleImage.style.display = "block";
        visibleImage.setAttribute("display", "show");
    }
}
showImage();

// Hover Effect

let zoomableContainer = document.querySelectorAll('.mainImage');
zoomableContainer.forEach(element => {

    let img = element.querySelector('img');

    element.addEventListener("mousemove", (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(3)";
    });

    element.addEventListener("mouseleave", () => {
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    });
});

