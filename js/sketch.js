let clockLp, clockCdmx, clockBc;
let time;
let initTime = new Date().toLocaleString('en-US', { timeZone: 'America/Mazatlan' });
let initTimeValues = {
    hour: new Date(initTime).getHours(),
    minutes: new Date(initTime).getMinutes(),
    seconds: new Date(initTime).getSeconds(),
};
function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log('Hora LPZ: '
    + initTime+'\nHora:'
    + initTimeValues.hour + '\nMinutos:'
    + initTimeValues.minutes + '\nSeconds:'
    + initTimeValues.seconds);
    
    clockLp = new Clock(time, "lpz", 150, 250, 250);
    clockCdmx = new Clock(time, "cdmx", 150, 650, 250);
    
    clockBc = new Clock(time, "var", 150, 1050, 250);
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
