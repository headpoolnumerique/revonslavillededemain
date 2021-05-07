const blur_elem = document.getElementById("blur-around");
document.onmousemove = (evt) => {
    blur_elem.style.transform = `translate(${evt.clientX}px, ${evt.clientY}px)`;
};
