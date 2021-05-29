


let spiderOn=true;
let animate=true;

const myBody = document.getElementById('myBody');

window.onload = init;


function init() {
    showDay();

}


function onMouseMove(){
    animate=false;
}


//畫出全螢幕的綠屏
function drawIt(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let w = screen.width;
    let h = screen.height;
    
    ctx.canvas.width=w;
    ctx.canvas.height = h;

    //填綠色
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0, 0, w, h);
}


//秀出防疫第幾天
//今天是幾月幾日星期幾
function showDay(){
    //防疫第幾天
    let day = document.getElementById("whichDay");
    day.innerHTML = "防疫課程 Day " + DateDiff("2021/5/17", new Date());

    //今天是幾月幾日星期幾
    let today=document.getElementById("today");
    let td = new Date();
    let m=td.getMonth()+1;
    let d=td.getDate();
    let w = Week(td);
    today.innerHTML= m+ "/"+ d +" ("+ w +")";

    takeBreak(td);
}


//例假日，休息一下
function takeBreak(day){
    let w = day.getDay();
    if( w===0 || w===6){
        //alert("放假");

        let dom = document.getElementById("meetArea");
        //dom.style.display="none";
        dom.innerHTML="今日放假~~~";

        happyGo();
    }
}


//假日才執行...
function happyGo(){
    drawIt();

    myBody.addEventListener('mousemove', onMouseMove);
    myBody.addEventListener("mousedown", onMouseMove);

    setTimeout(setAfterTwoSecond, 2000); //兩秒後設定

    /*
    setSpider();
    setTimeout( clearSpider, 5000);
    */

}





//兩秒後設定，此時才提供取消蜘蛛網的清除
function setAfterTwoSecond(){
    //myBody.addEventListener('mousemove', clearSpider);

    if(animate){
        window.location.href = 'matrixRain/index.html';
    }
    
}





function setSpider(){
    spiderOn = true;
    myBody.style.backgroundImage = "url('spiderNet.jpg')";
    myBody.style.backgroundRepeat ="no-repeat";
    myBody.style.backgroundSize="cover";
    myBody.style.backgroundSize = "500px 600px";
    //alert("ok");
}

function clearSpider(){
    if( !spiderOn) return;

    myBody.style.backgroundImage = "none";
    myBody.style.backgroundColor = "whitesmoke";

    spiderOn=false;
}

//--------------------tools----------------------------------------
//計算兩個日子相差多久
function DateDiff(sDate1, sDate2) { // sDate1 和 sDate2 是 2016-06-18 格式
    var oDate1 = new Date(sDate1);
    var oDate2 = new Date(sDate2);
    var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
    return iDays;
}

//傳回 day 是星期幾
function Week(day) {
    let day_list = ['日', '一', '二', '三', '四', '五', '六'];
    let w = "星期" + day_list[day.getDay()];
    return w;
}
