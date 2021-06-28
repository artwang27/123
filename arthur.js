

let spiderOn=true;
let animate=false;
let animStop=false; //動畫結束

const myBody = document.getElementById('myBody');

window.onload = init;

function print(data){
    console.log(data);
}


function init() {
    showDay();
    let leftDay=showCountDown();    //倒數幾天
    
    //takeBreak2(leftDay);

    //drawIt2();

}

function stopAnimation(){
    if (animate)
        animStop = true;
}

function onMouseMove(){
    stopAnimation();
}

         
function onmouseDown(){
    stopAnimation();
}

//離結業式倒數幾天
function showCountDown(){
    let countDown = document.getElementById("countDown");

    let leftDay = DateDiff("2021/7/2", new Date())+1;
    console.log(leftDay+"days");
    //countDown.innerHTML = "離結業式倒數 " + leftDay;
    let leaf = "<img src='countDown/leaf02.png' style='width:64px ; height:64px' >";

    //make leafs
    allLeafs="";
    for(let i=0; i<leftDay; i++)
        allLeafs += leaf;

    countDown.innerHTML = allLeafs; //秀出剩幾片常春藤
    return leftDay;

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
    //----
}


//剩幾天，做什麼事
function takeBreak2(leftDay) {
    happyGo();
    let w = day.getDay();
    if (w === 0 || w === 6) {
        //alert("放假");

        let dom = document.getElementById("meetArea");
        //dom.style.display="none";
        dom.innerHTML = "今日放假~~~";



        h = day.getHours();
        //下午4點前才顯示
        if (h < 16) {
            happyGo();
        }

    }
}


//例假日，休息一下
function takeBreak(day){
    let w = day.getDay();
    if( w===0 || w===6){
        //alert("放假");

        let dom = document.getElementById("meetArea");
        //dom.style.display="none";
        dom.innerHTML="今日放假~~~";

        return;

        h=day.getHours();
        //下午4點前才顯示
        if(h<16){
            happyGo();
        }
            
    }
}


//假日才執行...
function happyGo(){
    drawIt();

    myBody.addEventListener('mousemove', onMouseMove);
    //myBody.addEventListener("mousedown", onMouseDown);
    myBody.addEventListener("touchstart", onMouseMove);

    setTimeout(startAnimation, 10*1000); //n秒後設定

    /*
    setSpider();
    setTimeout( clearSpider, 5000);
    */

}

//畫出全螢幕的綠屏
function drawIt() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let w = screen.width;
    let h = screen.height;

    ctx.canvas.width = w;
    ctx.canvas.height = h;

    //填綠色
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0, 0, w, h);
}


function drawIt2(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}




//兩秒後設定，此時才提供取消蜘蛛網的清除
function startAnimation(){
    return;
    //myBody.addEventListener('mousemove', clearSpider);

    animate=true;
    animStop=false;

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
