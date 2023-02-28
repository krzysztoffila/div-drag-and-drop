const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'silver';
    drawActive = !drawActive;
    insertDivX = e.offsetX
    insertDivY = e.offsetY
    // console.log(insertDivX, insertDivY)
})
div.addEventListener('mousemove', (event) => {
    if (drawActive) {
        divX = event.clientX - insertDivX;
        divY = event.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})
div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
    drawActive = !drawActive;
})