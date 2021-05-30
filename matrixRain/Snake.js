

class Snake{

    constructor(x) {
        this.x=x;   //這條蛇的橫坐標
        this.chars=[];
        this.speed=random(1,15);
        this.endY = random(200, 1500) + window.innerHeight; //比螢幕的高度還要再多一些
        this.makeBody(x);
    }


    makeBody(x){
        let bodyLong=random(5, 30);
        let y = 0;
        for (let i = 0; i < bodyLong; i++) {
            this.chars[i] = new Char(x, y, this.speed);
            y -= Char.CharSize;
        }

        this.chars[0].isFirst = true;   //頭部要做記號
    }


    update(){

        //this.chars.forEach(ch => ch.update(this.speed, this.endY) );

        this.chars.forEach(ch => {
            ch.update(this.speed, this.endY);
        });
        
    }

}