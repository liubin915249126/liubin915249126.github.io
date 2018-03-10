/**
 * Created by Administrator on 2015/12/18.
 */

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
    console.log(info.scrollTop);
    }
    }
var scroll=setInterval("infoScroll()",t);
info.onmouseover=function(){
    clearInterval(scroll);
    };
