/**
 * Created by Administrator on 2015/12/27.
 */
function toTop(){
    var to_top=document.getElementById("totop");

    /*console.log(to_top);*/
    var H =window.document.body.clientHeight||window.document.documentElement.clientHeight;
    var h =window.screen.availHeight;


    window.onscroll=function(){
        var scroll_h= document.body.scrollTop;
//        console.log(scroll_h);
//            console.log(h);
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
                clearInterval(timer);
            }
        },50);
    };
};
