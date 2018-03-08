/**
 * Created by Administrator on 2015/12/2.
 */

window.onload=function(){
    time();
    sub();
    picShow();
};
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
 //下拉框函数
function sub (){
    var nav=document.getElementById("nav");
    var lis=nav.getElementsByTagName("li");
    /*alert(nav);*/
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            lis[i].id=i;
            lis[i].className="active";
            for(var j=0;j<lis.length;j++){
                lis[j].className=""
            }
          /*  var submenu=this.getElementsByTagName("div")
            submenu.displ*/

        }
    }
}
var pics =["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg"];
 function picShow(){
     var index = 0;
     var pic=document.getElementById("banner");
     var img=pic.getElementsByTagName("img");
     setInterval(function(){
         if(index<4){
             index++;
         }else{
             index=0;
         }
     },500);
     img.setAttribute("src","pics[index");
 }
