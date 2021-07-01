


const myBody = document.getElementById('myBody');
let idleAction=null;    //延時物件


window.onload = init;


function init() {
    showDay();

    let diff=getCountdownByMin();

    if(diff>0){
        setInterval(showCountDownByMin, 90);
    }
    

    if( isJustLoggin()){
        let delay=getGameOverDelay(diff);
        idleAction = new IdleAction(actionFun,delay*1000);  //產生延時物件
        idleAction.setEnable(true);
    }

    //let leftDay=showCountDownByDay();    //倒數幾天，用常春藤來表示
    //window.location.href = 'getVar.html?id=123&user=Arthur';
}


//幾秒之後進入 matrix
//時鐘的 60 分鐘折抵 delay 1秒鐘
function getGameOverDelay(diff){
    let delay= diff/ 60;    
    alert("當您靜止 "+delay+" 秒後，自動進入螢幕保護程式");
    if(delay<0)
        delay=5;
    return delay;
}


//剛登入首頁時，尚不知今日的值日生是誰，必須等到執行 MatrixRain 之後，
//由她(MatrixRain)返回首頁，並附加網址參數成為...
//index.html?值日生=陳安箴
//當返回時，值日生才能確定是誰
function isJustLoggin(){
    let v = UrlParam.paramValues("值日生");
    //alert(v);
    return (v == undefined ); 
}


//前往 matrix 網頁
function actionFun(){
    window.location.href ="./matrixRain/index.html";
}


/*
//離結業式倒數幾天，用常春藤來表示
function showCountDownByDay(){
    let countDown = document.getElementById("countDownDay");

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
*/



//離結業式倒數幾秒，用碼表來表示
function showCountDownByMin() {
    let countDown = document.getElementById("countDownSecond");
    let diff=getCountdownByMin();
    console.log(diff);
    countDown.innerHTML = "剩下 "+diff+" 分鐘"; //秀出剩幾秒
}


function getCountdownByMin() {
    /*
    var t1 = new Date(YYYY, MM, DD, 0, 0, 0, 0);
    var t2 = new Date(ZZZZ, NN, EE, 0, 0, 0, 0);
    var dif = t1.getTime() - t2.getTime();

    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    */

    let endTime = new Date(2021, 6, 3, 0, 0);
    let cur = new Date();
    let diff = (endTime.getTime() - cur.getTime()) / 1000 / 60;
    diff = diff.toFixed(3);
    return diff;
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




//例假日，休息一下
function takeBreak(day){
    let w = day.getDay();
    if( w===0 || w===6){
        //alert("放假");

        let dom = document.getElementById("meetArea");
        //dom.style.display="none";
        dom.innerHTML="今日放假~~~";

        return;
    }
}


//假日才執行...
function happyGo(){
    drawIt();

    myBody.addEventListener('mousemove', onMouseMove);
    //myBody.addEventListener("mousedown", onMouseDown);
    myBody.addEventListener("touchstart", onMouseMove);



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

function print(data) {
    console.log(data);
}
