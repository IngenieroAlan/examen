let clockLp, clockCdmx, clockBc;
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
    
    clockLp = new Clock(parseTime(initTimeValues.hour)+':'+parseTime(initTimeValues.minutes), "lpz", 150, 250, 250);
    clockCdmx = new Clock(parseTime(initTimeValues.hour)+':'+parseTime(initTimeValues.minutes), "cdmx", 150, 650, 250);
    clockBc = new Clock(parseTime(initTimeValues.hour)+':'+parseTime(initTimeValues.minutes), "var", 150, 1050, 250);
    time = document.getElementById("time");
}
function draw() {
    background("#d9d9d9");
    if(time.value === undefined){
        clockLp.externalHour = time.value;
    }
    clockLp.draw();
    if(time.value === undefined){
        clockCdmx.externalHour = time.value;
    }
    clockCdmx.draw();
    if(time.value === undefined){
        clockBc.externalHour = time.value;
    }
    clockBc.draw();
}
