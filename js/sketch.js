let timeInput;
let updateButton;

function setup() {
    createCanvas(windowWidth, windowHeight);
    timeInput = createInput();
    timeInput.position(50, 50);

    updateButton = createButton('Actualizar');
    updateButton.position(timeInput.x + timeInput.width + 10, 50);
}
function draw() {
    background("#d9d9d9");
    strokeWeight(2);
    //lineaBres(10, 10, 50, 70);
    //algoritmoPM(50, 100, 100);
    text(timeInput.value(), 50, 100);
}
