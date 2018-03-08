/**
 * Created by Administrator on 2015/12/22.
 */
var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
function time(){
    var myTime=new Date();
    var Y = myTime.getFullYear();
    var M =myTime.getMonth()+1;
    var D = myTime.getDate();
    var W = myTime.getDay();
    var H = myTime.getHours();
    var m = myTime.getMinutes();
    var S = myTime.getSeconds();

    var html = Y+"年"+M+"月"+D+"日"+week[W]+H+":"+checkTime(m)+":"+checkTime(S);
    var timeShow= document.getElementById("time");
    /*    var tb = document.createElement("span");
     tb.innerHTML=html;
     timeShow.appendChild(tb);*/
    timeShow.innerHTML = html;
    t= setTimeout(time,500);
}
function checkTime(t){
    if(t<10){
        return "0"+t;
    }else{
        return t;
    }
}
time();