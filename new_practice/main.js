class Stereo{
    constructor(){
        this.volume = 50;
        this.isOn = false;
        this.station = 'AM';
    }
    
    powerSwitch(){
        this.isOn = !this.isOn;
    }

    volumeUp(){
        if(this.isOn && this.volume < 100){
            this.volume += 10;
        }
    }

    volumeDown(){
        if(this.isOn && this.volume > 0){
            this.volume -= 10;
        }
    }

    stationSwitch(){
        if(this.isOn){
            switch(this.station){
                case 'AM':
                    this.station = 'FM';
                    return;
                case 'FM':
                    this.station = 'XM';
                    return;
                case 'XM':
                    this.station = 'AM';
                    return;
            }
        }
    }
}