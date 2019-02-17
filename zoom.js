'use strict';

function main() {
    const viewer = document.querySelector("#viewer");
    const pic = document.querySelector("#pic");
  
    fitPictureToViewer();
    pic.style.transform = `scale(1)`;
}

function fitPictureToViewer() {
    pic.style.height = `${viewer.clientHeight}px`;
    pic.style.top = `0px`;
    pic.style.left = `${(viewer.clientWidth - pic.clientWidth) / 2}px`;
}

function mouselog(event) {
    console.log(event.button);
}

function zoomIn(event) {
    if (event.keyCode === 107) {
        pic.style.transform = "scale(1.1)";
    }
    if (event.keyCode === 109) {
        pic.style.transform = "scale(1.0)";
    }
    if (event.keyCode === 100) {
        // move left
        let currentLeft = parseFloat(pic.style.left)
        pic.style.left = `${currentLeft - 20}px`;
    }
    if (event.keyCode === 102) {
        // move right
        let currentLeft = parseFloat(pic.style.left)
        pic.style.left = `${currentLeft + 20}px`;
    }
    if (event.keyCode === 104) {
        // move up
        let currentTop = parseFloat(pic.style.top)
        pic.style.top = `${currentTop - 20}px`;
    }
    if (event.keyCode === 98) {
        // move down
        let currentTop = parseFloat(pic.style.top)
        pic.style.top = `${currentTop + 20}px`;
    }
}

function wheelZoom(event) {
    event.preventDefault();
    const zoomStep = 1.3;
    const currentScale = parseFloat(pic.style.transform.replace("scale(", ""));

    // const mouseX = event.pageX - viewer.offsetLeft;
    // const mouseY = event.pageY - viewer.offsetTop;

    const originX = event.pageX - pic.offsetLeft;
    const originY = event.pageY - pic.offsetTop;

    pic.style.transformOrigin = `${originX}px ${originY}px`;

    if (event.deltaY < 0) {
        pic.style.transform = `scale(${currentScale * zoomStep})`;
    } else {
        pic.style.transform = `scale(${currentScale / zoomStep})`;
    }
    console.log({originX, originY});
    
}

viewer.addEventListener('keydown', zoomIn); // why keyCodes doesn't work on viewer?
viewer.addEventListener('wheel', wheelZoom); //NOTE: 'mousewheel' event is depricated!
// viewer.addEventListener('mousedown', mouselog);
// viewer.addEventListener('mousemove', (e) => {console.log(e.clientX);});

window.onload = function() {
    main();
};