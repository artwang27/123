

class Char{
    static CharSize = 28; //字體大小

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.value = '';
        this.isFirst = false; //是 snake 裡的第一個字嗎?
        //字元更換的週期
        this.replaceCycle = round(random(20, 60));    //多久要產生新的 char code
        this.setCharValue();
    }


    setCharValue(){
        //this.value=String.fromCharCode(0x0030+round( random(0,9) )); //數字字集
        //this.value=String.fromCharCode(0x30A0+round( random(0,96) )); //日文字集
        //this.value=String.fromCharCode(0x3400+round( random(0,6582) ));//中文字集
        this.value = randomStudentChar();
    }


    update(speed, endY) {
        //更換週期已到，要變文字囉
        if (frameCount % this.replaceCycle === 0) {
            this.setCharValue();
        }

        this.y = this.y > endY ? 0 : this.y + speed;
        
        if (this.y <= window.innerHeight ){
            this.render();
        }
    }


    //繪製到螢幕上
    render() {
        if (this.isFirst){
            //fill(180,255,180);
            fill(0, 0, 100);    //為了顯眼，車頭是白色的
        }
        else{
            //fill(0,255,70);
            //fill(this.x, (this.y*92/CharSize)%100, 100);
            fill(this.x, (this.y * 8.5) % 100, 100);
        }

        text(this.value, this.x, this.y);
    }




}
