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
    createCanvas(windowWidth, 400);
    angleMode(DEGREES);

    // Length of the hands
    hourLength = 40;
    minuteLength = 60;
    secondLength = 80;

    // Width of the hands
    hourWidth = 3;
    minuteWidth = 5;
    secondWidth = 1;
    time = document.getElementById("time");
}

function draw() {
    background(220);
    let timerAux = (time.value != undefined && time.value != '') ? time.value : parseTime(initTimeValues.hour) + ':' + parseTime(initTimeValues.minutes);
    drawClockLpz(timerAux, (windowWidth / 2) - 400, 200);
    drawClockCDMX(timerAux, windowWidth / 2, 200);
    drawClockBC(timerAux, (windowWidth / 2) + 400, 200);
    textSize(32);
    textAlign(CENTER, CENTER);
    noStroke();
    text("La Paz", (windowWidth / 2) - 400, 200 + 110);
    text("Ciudad de Mexico", windowWidth / 2, 200 + 110);
    text("Barcelona", (windowWidth / 2) + 400, 200 + 110);
    stroke('#000000');
}

function drawClockHandDDA(timeValue, timeMax, handLength, centerX, centerY) {
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
    currentHour = parseInt(currentHour);
    currentHour = (currentHour > 24) ? currentHour - 24 : currentHour;
    currentMinute = parseInt(currentMinute);

    let minuteAngle = map(currentMinute, 0, 60, 0, 360) - 90;
    let minuteEndX = centerX + minuteLength * cos(minuteAngle);
    let minuteEndY = centerY + minuteLength * sin(minuteAngle);
    strokeWeight(3);
    lineaPP(centerX, centerY, parseInt(minuteEndX), parseInt(minuteEndY));
    
    
    let secondAngle = map(new Date().getSeconds(), 0, 60, 0, 360) - 90;
    let secondEndX = centerX + secondLength * cos(secondAngle);
    let secondEndY = centerY + secondLength * sin(secondAngle);
    strokeWeight(4);
    lineaPP(centerX, centerY, parseInt(secondEndX), parseInt(secondEndY));

    let hourAngle = map(currentHour % 12, 0, 12, 0, 360) - 90;
    let hourEndX = centerX + hourLength * cos(hourAngle);
    let hourEndY = centerY + hourLength * sin(hourAngle);
    strokeWeight(4);
    stroke("red");
    lineaPP(centerX, centerY, hourEndX, hourEndY);
    stroke("black");
    algoritmoPM(90, centerX, centerY - 10);
}
function drawClockCDMX(time, centerX, centerY) {
    let [currentHour, currentMinute] = time.split(":");
    currentHour = parseInt(currentHour) + 1;
    currentHour = (currentHour > 24) ? currentHour - 24 : currentHour;
    currentMinute = parseInt(currentMinute);

    let minuteAngle = map(currentMinute, 0, 60, 0, 360) - 90;
    let minuteEndX = centerX + minuteLength * cos(minuteAngle);
    let minuteEndY = centerY + minuteLength * sin(minuteAngle);
    lineaDDA(centerX, centerY, parseInt(minuteEndX), parseInt(minuteEndY));
    
    let secondAngle = map(new Date().getSeconds(), 0, 60, 0, 360) - 90;
    let secondEndX = centerX + secondLength * cos(secondAngle);
    let secondEndY = centerY + secondLength * sin(secondAngle);
    lineaDDA(centerX, centerY, parseInt(secondEndX), parseInt(secondEndY));
    
    let hourAngle = map(currentHour % 12, 0, 12, 0, 360) - 90;
    let hourEndX = centerX + hourLength * cos(hourAngle);
    let hourEndY = centerY + hourLength * sin(hourAngle);
    stroke("red");
    lineaDDA(centerX, centerY, hourEndX, hourEndY);
    stroke("black");
    algoritmoPM(90, centerX, centerY - 10);
}
function drawClockBC(time, centerX, centerY) {
    let [currentHour, currentMinute] = time.split(":");
    currentHour = parseInt(currentHour) + 9;
    currentHour = (currentHour > 24) ? currentHour - 24 : currentHour;
    currentMinute = parseInt(currentMinute);

    
    let minuteAngle = map(currentMinute, 0, 60, 0, 360) - 90;
    let minuteEndX = centerX + minuteLength * cos(minuteAngle);
    let minuteEndY = centerY + minuteLength * sin(minuteAngle);
    strokeWeight(3);
    lineaBres(centerX, centerY, parseInt(minuteEndX), parseInt(minuteEndY));
    
    let secondAngle = map(new Date().getSeconds(), 0, 60, 0, 360) - 90;
    let secondEndX = centerX + secondLength * cos(secondAngle);
    let secondEndY = centerY + secondLength * sin(secondAngle);
    strokeWeight(4);
    lineaBres(centerX, centerY, parseInt(secondEndX), parseInt(secondEndY));
    
    let hourAngle = map(currentHour % 12, 0, 12, 0, 360) - 90;
    let hourEndX = centerX + hourLength * cos(hourAngle);
    let hourEndY = centerY + hourLength * sin(hourAngle);
    strokeWeight(4);
    stroke("red");
    lineaBres(centerX, centerY, parseInt(hourEndX), parseInt(hourEndY));
    stroke("black");

    algoritmoPM(90, centerX, centerY - 10);
}