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
    /*addSeconds(){
        if(this.seconds != new Date().getSeconds() ){
            this.seconds = new Date().getSeconds();
            if(this.seconds == 0 && this.addSecond == false){
                this.addSecond = true;
                if(this.minutes == 60){
                    this.minutes = 0;
                    this.hour++;
                    this.addSecond = false;
                }
                this.minutes++;
                this.addSecond =false;
            }
        }
    }
    */
    addSeconds() {
        let currentSeconds = new Date().getSeconds();
    
        if (this.seconds !== currentSeconds) {
            this.seconds = currentSeconds;
            
            if (this.seconds === 0) {
                
                if (this.minutes === '59') {
                    this.minutes = '00';
                    if (this.hour === 23) {
                        this.hour = '00';
                    } else {
                        this.hour = ('0' + (parseInt(this.hour) + 1)).slice(-2);
                    }
                } else {
                    console.log(this.minutes);
                    this.minutes = ('0' + (parseInt(this.minutes) + 1)).slice(-2);
                }
                console.log(this.minutes); //Si se suma pero le vale y lo regresa al valor anterior...
            }
        }
    }
    
    
    draw() {  
        this.addSeconds();
        this.getTime();
        algoritmoPM(this.r, this.x, this.y);
        switch (this.timezone) {
            case "lpz":
                if (this.externalHour) {
                    this.getTime();
                    text(((this.hour<10 && this.hour!=0)?'0'+this.hour:this.hour)
                        +":"+this.minutes+":"
                        +((this.seconds<10)?'0'+this.seconds:this.seconds),
                        250, 500)
                }
                text("La Paz", 235, 550)
                break;
            case "cdmx":
                if (this.externalHour) {
                    this.getTime();
                    text(((this.hour<10)?'0'+this.hour:this.hour)
                    +":"+this.minutes+":"
                    +((this.seconds<10)?'0'+this.seconds:this.seconds),
                    650, 500)
                }
                text("Ciudad de Mexico", 600, 550)
                break;
            case "var":
                if (this.externalHour) {
                    this.getTime();
                    text(((this.hour<10)?'0'+this.hour:this.hour)
                    +":"+this.minutes+":"
                    +((this.seconds<10)?'0'+this.seconds:this.seconds),
                    1050, 500)
                }
                text("Barcelona", 1028, 550)
                break;
        }
    }
}