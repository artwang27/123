let snakesAry=[];


function setup() {
    //與螢幕同寬高
    createCanvas(window.innerWidth, window.innerHeight);

    //設定著色的模式
    //colorMode(mode, max1, max2, max3, [maxA])，填入的參數是指最大可以是多少
    colorMode(HSB, width, 100,100);

    textSize( Char.CharSize );  //每個字的大小
    background(0);

    for(let x=0; x<width; x+= Char.CharSize){
        let snake=new Snake(x);
        snakesAry.push(snake);
    }

}


function draw() {
    if (mouseIsPressed) {
        //pause...
        onMousePress();

    }
    else{
        background(0);
        snakesAry.forEach( snake=> snake.update() );
    }

 }


 function onMousePress(){
     window.history.back(1);
 }





/*
 if (mouseIsPressed) {
 fill(0);
 } else {
 fill(255);
 }
 ellipse(mouseX, mouseY, 80, 80);
 */
