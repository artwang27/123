/*
          <p><a href="homework2.png">社會作業說明<br>
            </a></p>
          <p><a href="https://drive.google.com/drive/folders/13hGtVPQoluVZIOJ6XlvBO3mKUl6oNIdk?usp=sharing">作
              業繳交區</a></p>

*/


let spiderOn=true;

const myBody = document.getElementById('myBody');

//window.onload = init;
window.onload = test;

function test(){
    showDay();
}

//秀出防疫第幾天
//今天是幾月幾日星期幾
function showDay(){
    //防疫第幾天
    let day = document.getElementById("whichDay");
    day.innerHTML = "防疫課程 Day " + DateDiff("2021/5/17", new Date());

    //今天是幾月幾日星期幾
    let today=document.getElementById("today");
    let t = new Date();
    let m=t.getMonth()+1;
    let d=t.getDate();
    let w = Week(t);
    today.innerHTML= m+ "/"+ d +" ("+ w +")";
}




function init(){
    setSpider();

    setTimeout(setAfterTwoSecond,2000); //兩秒後設定
    setTimeout( clearSpider, 5000);
}1


//兩秒後設定，此時才提供取消蜘蛛網的清除
function setAfterTwoSecond(){
    myBody.addEventListener('mousemove', clearSpider);
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
