class Clock {
    constructor(externalHour, minutes, timezone) {
        this.externalHour = externalHour;
        this.hour = externalHour;
        this.timezone = timezone;
        this.minutes = minutes;
    }
    getTime() {
        switch (this.timezone) {
            case "cdmx":
                this.hour -= 2;
                break;
            case "barcelona":
                this.hour += 8;
                break;
        }
    }
    draw() {
        //TODO: Insertar el diseño de los relojes
    }
}