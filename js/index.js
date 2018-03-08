/**
 * Created by Administrator on 2015/12/26.
 */

window.onload=function(){
    infoScroll();
    tab();
    toTop();
    time();
    };
var info=document.getElementById("info");
var col1= document.getElementById("col1");
var col2= document.getElementById("col2");
col2.innerHTML=col1.innerHTML;
var t = 70;
info.scrollTop=0;
function infoScroll(){

    if(info.scrollTop>=col1.offsetHeight){
    info.scrollTop=0;
    }else{
    info.scrollTop++;

    }
    }
var scroll=setInterval("infoScroll()",t);
info.onmouseover=function(){
    clearInterval(scroll);
    };
info.onmouseout=function(){
    scroll=setInterval("infoScroll()",t);
    };
function toTop(){
    var to_top=document.getElementById("totop");

    /*console.log(to_top);*/
    var H =window.document.body.clientHeight||window.document.documentElement.clientHeight;
    var h =window.screen.availHeight;


    window.onscroll=function(){
    var scroll_h= document.body.scrollTop;
    console.log(scroll_h);
            console.log(h);
    if(scroll_h<h){
    to_top.style.display="none";
    }else{
    to_top.style.display="block";
    }
    }
    to_top.onclick=function(){
    var timer=setInterval(function(){
    var speed =document.body.scrollTop/5;
    document.body.scrollTop-=speed;
    if(document.body.scrollTop==0){
    clearInterval(timer);}
    },50);
    };

    }
function addEvent( obj,event,func){
    if(obj.addEventListener){
    obj.addEventListener(event,func,false);
    }else if(obj.attachEvent()){
    obj.attachEvent("on"+event,func);
    }
    }
function leftScroll(){

    var left = document.querySelector(".left");
    addEvent(window,"scroll",function(){
    var scroll_height =document.body.scrollTop;

    if(scroll_height>200){
    console.log(scroll_height);
    console.log("scroll>109");
    left.style.position = "absoulte";
    left.style.top="0px";
    }
    })

    }

(function Count(){
    var $count=$(".count").parent("a");
    var count=5;
    console.log($count);
    for(i=1;i<$count.length;i++){
        $count(i).on("click",function(){
            count+=1;
            $(".count").text(count);
            return false;
        })
    }
})();

