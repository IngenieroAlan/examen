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
let initTime = new Date().toLocaleString('en-US', { timeZone: 'America/Mazatlan' });
let initTimeValues = {
    hour: new Date(initTime).getHours(),
    minutes: new Date(initTime).getMinutes(),
    seconds: new Date(initTime).getSeconds(),
};
let hourH, minutesM, secondsS;
function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);

    // Length of the hands
    hourLength = 40;
    minuteLength = 60;
    secondLength = 80;

    // Width of the hands
    hourWidth = 6;
    minuteWidth = 3;
    secondWidth = 1;
    time = document.getElementById("time");
}

function draw() {
    background(220);
    let timerAux = (time.value != undefined && time.value != '') ? time.value : parseTime(initTimeValues.hour) + ':' + parseTime(initTimeValues.minutes);
    drawClockLpz(timerAux, 100, 100);
    drawClockCDMX(timerAux, 300, 100);
    drawClockBC(timerAux, 500, 100);
}

function drawClockHandDDA(timeValue, timeMax, handLength, handWidth, centerX, centerY) {
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

function drawClockLpz(time, centerX, centerY) {
    let [currentHour, currentMinute] = time.split(":");
    currentHour = parseInt(currentHour) + 1;
    currentHour = (currentHour > 24) ? currentHour - 24 : currentHour;
    currentMinute = parseInt(currentMinute);

    let hourAngle = map(currentHour % 12, 0, 12, 0, 360) - 90;
    let hourEndX = centerX + hourLength * cos(hourAngle);
    let hourEndY = centerY + hourLength * sin(hourAngle);
    lineaPP(centerX, centerY, parseInt(hourEndX), parseInt(hourEndY));

    let minuteAngle = map(currentMinute, 0, 60, 0, 360) - 90;
    let minuteEndX = centerX + minuteLength * cos(minuteAngle);
    let minuteEndY = centerY + minuteLength * sin(minuteAngle);
    lineaPP(centerX, centerY, parseInt(minuteEndX), parseInt(minuteEndY));

    let secondAngle = map(new Date().getSeconds(), 0, 60, 0, 360) - 90;
    let secondEndX = centerX + secondLength * cos(secondAngle);
    let secondEndY = centerY + secondLength * sin(secondAngle);
    lineaPP(centerX, centerY, parseInt(secondEndX), parseInt(secondEndY));
    algoritmoPM(90, centerX, centerY-10);
}
function drawClockCDMX(time, centerX, centerY) {
    let [currentHour, currentMinute] = time.split(":");
    currentHour = parseInt(currentHour) + 1;
    currentHour = (currentHour > 24) ? currentHour - 24 : currentHour;
    currentMinute = parseInt(currentMinute);

    let hourAngle = map(currentHour % 12, 0, 12, 0, 360) - 90;
    let hourEndX = centerX + hourLength * cos(hourAngle);
    let hourEndY = centerY + hourLength * sin(hourAngle);
    lineaDDA(centerX, centerY, parseInt(hourEndX), parseInt(hourEndY));

    let minuteAngle = map(currentMinute, 0, 60, 0, 360) - 90;
    let minuteEndX = centerX + minuteLength * cos(minuteAngle);
    let minuteEndY = centerY + minuteLength * sin(minuteAngle);
    lineaDDA(centerX, centerY, parseInt(minuteEndX), parseInt(minuteEndY));

    let secondAngle = map(new Date().getSeconds(), 0, 60, 0, 360) - 90;
    let secondEndX = centerX + secondLength * cos(secondAngle);
    let secondEndY = centerY + secondLength * sin(secondAngle);
    lineaDDA(centerX, centerY, parseInt(secondEndX), parseInt(secondEndY));
    algoritmoPM(90, centerX, centerY-10);
}
function drawClockBC(time, centerX, centerY) {
    let [currentHour, currentMinute] = time.split(":");
    currentHour = parseInt(currentHour) + 9;
    currentHour = (currentHour > 24) ? currentHour - 24 : currentHour;
    currentMinute = parseInt(currentMinute);

    let hourAngle = map(currentHour % 12, 0, 12, 0, 360) - 90;
    let hourEndX = centerX + hourLength * cos(hourAngle);
    let hourEndY = centerY + hourLength * sin(hourAngle);
    lineaBres(centerX, centerY, parseInt(hourEndX), parseInt(hourEndY));

    let minuteAngle = map(currentMinute, 0, 60, 0, 360) - 90;
    let minuteEndX = centerX + minuteLength * cos(minuteAngle);
    let minuteEndY = centerY + minuteLength * sin(minuteAngle);
    lineaBres(centerX, centerY, parseInt(minuteEndX), parseInt(minuteEndY));

    let secondAngle = map(new Date().getSeconds(), 0, 60, 0, 360) - 90;
    let secondEndX = centerX + secondLength * cos(secondAngle);
    let secondEndY = centerY + secondLength * sin(secondAngle);
    lineaBres(centerX, centerY, parseInt(secondEndX), parseInt(secondEndY));
    algoritmoPM(90, centerX, centerY-10);
}