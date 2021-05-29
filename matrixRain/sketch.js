var snakes=[];
const CharSize=28; //字體大小




function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    //設定顏色
    colorMode(HSB, width, 100,100);
    textSize( CharSize );
    background(0,150,150);

    for(var x=0; x<width; x+=CharSize){
        snake=new Snake(x);
        snakes.push(snake);
    }




}

function draw() {
    if (mouseIsPressed) {
        //pause...
        onMousePress();

    }
    else{
        background(0);
        snakes.forEach( function(snake){snake.update()} );
    }

 }


 function onMousePress(){
     window.history.back(1);
 }


function Char(x,y,speed){
    this.x=x;
    this.y=y;
    this.value='';
    this.isFirst=false; //是 snake 裡的第一個字嗎?
    this.changeInterval=round(random(20,60));    //多久要產生新的 char code



    this.setValue=function(){
        //this.value=String.fromCharCode(0x0030+round( random(0,9) )); //數字字集
        //this.value=String.fromCharCode(0x30A0+round( random(0,96) )); //日文字集
       //this.value=String.fromCharCode(0x3400+round( random(0,6582) ));//中文字集
        this.value=randomStudentChar();
    };


    this.render=function(){
        if(this.isFirst)
            //fill(180,255,180);
            fill(0, 0, 100);
        else
            //fill(0,255,70);
            //fill(this.x, (this.y*92/CharSize)%100, 100);
            fill(this.x, (this.y*8.5)%100, 100);

        text(this.value, this.x, this.y);
    };

    this.update=function( speed, endY ){
        //要變文字囉
        if (frameCount % this.changeInterval === 0){
            this.setValue();
        }
        this.y = this.y>endY? 0: this.y + speed;
        this.render();
    };

    this.setValue();
}

function Snake(x){
    long=random(5,30);
    this.chars=[];
    this.speed=random(1,15);
    this.endY=random(200,1500)+window.innerHeight;

    y=0;
    for(var i=0; i<long; i++){
        this.chars[i] = new Char( x, y, this.speed);
        y -= CharSize;
    }

    this.chars[0].isFirst=true;

    this.update=function(){
        for(var i=0; i< this.chars.length; i++){
            this.chars[i].update( this.speed, this.endY );

        }

    }
}

/*
 if (mouseIsPressed) {
 fill(0);
 } else {
 fill(255);
 }
 ellipse(mouseX, mouseY, 80, 80);
 */
