
//偵測滑鼠動作，若都沒有動作
//當延遲時間到了之後，執行特定的(使用者自訂的) actionFun 函數
//本類別因為是用內建的 setTimeout() 實作，所以只會執行一次 ( 與 setInterval 不同！ )

class IdleAction{

    //傳入
    //當延遲時間到了之後，要執行的函數稱作 actionFun
    constructor(actionFun, _delay=5000){
        this.triggerAction = actionFun;   //要觸發執行的任務
        this.delay = _delay;   //多久之後觸發，單位： 毫秒

        this.timer=null;    //計時器
        this.enable=true;   // enable 欄位
        //this.setEnable(true);   //init()    
    }

    setEnable(b){
        this.enable=b;
        if(b){
            document.onmousemove = this.resetWaitTimer;  //當滑鼠有移動，那就要再重新計時
            this.resetWaitTimer();
        }
        else{   //當 disable 時，取消滑鼠監聽
            clearTimeout( this.timer);
            document.onmousemove = null;
        }
    }

    resetWaitTimer() {
        clearTimeout( this.timer);
        this.timer = setTimeout(this.triggerAction, this.delay); //時間到要執行的任務
    }




}//class