/*let clockLp, clockCdmx, clockBc;
let initTime = new Date().toLocaleString('en-US', { timeZone: 'America/Mazatlan' });
let initTimeValues = {
    hour: new Date(initTime).getHours(),
    minutes: new Date(initTime).getMinutes(),
    seconds: new Date(initTime).getSeconds(),
};
let time;
function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log('Hora LPZ: '
    + initTime+'\nHora:'
    + initTimeValues.hour + '\nMinutos:'
    + initTimeValues.minutes + '\nSeconds:'
    + initTimeValues.seconds);
    let auxTime =parseTime(initTimeValues.hour)+':'+parseTime(initTimeValues.minutes); 
    clockLp = new Clock(auxTime, "lpz", 150, 250, 250);
    clockCdmx = new Clock(auxTime, "cdmx", 150, 650, 250);
    clockBc = new Clock(auxTime, "var", 150, 1050, 250);
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
}*/

let centerX, centerY;
let time;
let hourLength, minuteLength, secondLength;
let hourWidth, minuteWidth, secondWidth;

let hourH, minutesM, secondsS;

function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);

    // Center of the clock
    centerX = 100;
    centerY = 100;

    // Length of the hands
    hourLength = 60;
    minuteLength = 80;
    secondLength = 100;

    // Width of the hands
    hourWidth = 6;
    minuteWidth = 3;
    secondWidth = 1;
    time = document.getElementById("time");
}

function draw() {
    background(220);
    drawClockLpz(time.value);
}

function drawClockHand(timeValue, timeMax, handLength, handWidth) {
    let timeAngle = map(timeValue, 0, timeMax, 0, 360) - 90;
    let xEnd = centerX + handLength * cos(timeAngle);
    let yEnd = centerY + handLength * sin(timeAngle);

    let dx = xEnd - centerX;
    let dy = yEnd - centerY;

    let steps = abs(dx) > abs(dy) ? abs(dx) : abs(dy);

    let xInc = dx / steps;
    let yInc = dy / steps;

    let x = centerX;
    let y = centerY;

    for (let i = 0; i <= steps; i++) {
        point(round(x), round(y));
        x += xInc;
        y += yInc;
    }
}

function drawClockLpz(time) {
    let [currentHour, currentMinute] = time.split(":");
    drawClockHand(currentHour, 12, hourLength, hourWidth);
    drawClockHand(currentMinute, 60, minuteLength, minuteWidth);
    drawClockHand(new Date().getSeconds(), 60, secondLength, secondWidth);
}