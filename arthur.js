let spiderOn=true;

const myBody = document.getElementById('myBody');

window.onload = init;


function init(){
    setSpider();

    setTimeout(setAfterTwoSecond,2000); //兩秒後設定
    setTimeout( clearSpider, 5000);
}


//兩秒後設定，此時才提供取消蜘蛛網的清除
function setAfterTwoSecond(){
    myBody.addEventListener('mousemove', clearSpider);
}





function setSpider(){
    spiderOn = true;
    myBody.style.backgroundImage = "url('spiderNet.jpg')";
    myBody.style.backgroundRepeat ="no-repeat";
    //myBody.style.backgroundSize="cover";
    myBody.style.backgroundSize = "500px 600px";
    //alert("ok");
}

function clearSpider(){
    if( !spiderOn) return;

    myBody.style.backgroundImage = "none";
    myBody.style.backgroundColor = "whitesmoke";

    spiderOn=false;
}
