let clockLp, clockCdmx, clockBc;
let time;


function setup() {
    createCanvas(windowWidth, windowHeight);

    clockLp = new Clock(0, 0, "lpz", 150, 250, 250);
    clockCdmx = new Clock(0, 0, "cdmx", 150, 650, 250);

    clockBc = new Clock(0, 0, "var", 150, 1050, 250);
    time = document.getElementById("time");
}
function draw() {
    background("#d9d9d9");
    clockLp.externalHour = time.value;
    clockLp.draw();

    clockCdmx.externalHour = time.value;
    clockCdmx.draw();

    clockBc.externalHour = time.value;
    clockBc.draw();
}
