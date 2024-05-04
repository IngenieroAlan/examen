class Clock {
    constructor(externalHour, minutes, timezone, r, x, y) {
        this.externalHour = externalHour;
        this.hour = externalHour;
        this.timezone = timezone;
        this.minutes = minutes;
        this.r = r;
        this.x = x;
        this.y = y;
    }
    getTime() {
        switch (this.timezone) {
            case "lpz":
                this.hour = this.externalHour;
                break;
            case "cdmx":
                this.hour = this.externalHour + 1;
                break;
            case "var":
                this.hour = this.externalHour + 9;
                break;
        }
    }
    draw() {
        switch (this.timezone) {
            case "lpz":
                algoritmoPM(this.r, this.x, this.y);
                if (this.externalHour) {
                    this.getTime();
                    text(this.hour, 250, 500)
                }
                text("La Paz", 250, 550)
                break;
            case "cdmx":
                algoritmoPM(this.r, this.x, this.y);
                if (this.externalHour) {
                    this.getTime();
                    text(this.hour, 650, 500)
                }
                text("Ciudad de Mexico", 650, 550)
                break;
            case "var":
                algoritmoPM(this.r, this.x, this.y);
                if (this.externalHour) {
                    this.getTime();
                    text(this.hour, 1050, 500)
                }
                text("Varcelona", 1050, 550)
                break;
        }
    }
}