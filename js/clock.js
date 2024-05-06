class Clock {
    constructor(externalHour, timezone, r, x, y) {
        this.externalHour = externalHour;
        this.timezone = timezone;
        this.hour = 0;
        this.minutes = 0;
        this.seconds = new Date().getSeconds();
        this.r = r;
        this.x = x;
        this.y = y;
    }
    getTime() {
        let [currentHour, currentMinute] = this.externalHour.split(":");
        switch (this.timezone) {
            case "lpz":
                this.hour = currentHour;
                this.minutes = currentMinute;
                break;
            case "cdmx":
                this.hour = parseInt(currentHour) + 1;
                if(this.hour>=24){this.hour-=24};
                this.minutes = currentMinute;
                break;
            case "var":
                
                this.hour = parseInt(currentHour) + 9;
                if(this.hour>=24){this.hour-=24};
                this.minutes = currentMinute;
                break;
        }
    }
    draw() {
        if(this.seconds != new Date().getSeconds() ){
            this.seconds = new Date().getSeconds();
        }
        this.getTime();

        switch (this.timezone) {
            case "lpz":
                algoritmoPM(this.r, this.x, this.y);
                if (this.externalHour) {
                    this.getTime();
                    text(((this.hour<10)?'0'+this.hour:this.hour)+":"+this.minutes, 250, 500)
                }
                text("La Paz", 250, 550)
                break;
            case "cdmx":
                algoritmoPM(this.r, this.x, this.y);
                if (this.externalHour) {
                    this.getTime();
                    text(((this.hour<10)?'0'+this.hour:this.hour)+":"+this.minutes, 650, 500)
                }
                text("Ciudad de Mexico", 650, 550)
                break;
            case "var":
                algoritmoPM(this.r, this.x, this.y);
                if (this.externalHour) {
                    this.getTime();
                    text(((this.hour<10)?'0'+this.hour:this.hour)+":"+this.minutes, 1050, 500)
                }
                text("Varcelona", 1050, 550)
                break;
        }
    }
}