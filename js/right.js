/**
 * Created by Administrator on 2015/12/18.
 */
/*window.onload=function(){
    tab();
    toTop();

};*/
function tab() {
    var tab_top = document.getElementById("tab_top");
    var tab_con = document.getElementById("tab_con");
    var top_list = tab_top.getElementsByTagName("li");
    var con_list = tab_con.getElementsByTagName("div");

    for (var i = 0; i < top_list.length; i++) {
        top_list[i].id = i;
        /*console.log(con_list[i].style.display);*/
        top_list[i].onclick = function () {
            for (var j = 0; j < top_list.length; j++) {
                top_list[j].className = "";
                con_list[j].style.display = "none";
            }
            this.className = "lihover";
            con_list[this.id].style.display = "block";
            /*this.id传递参数*/

        }
    }
}
function toTop(){
    var to_top=document.getElementById("to_top");

    var H =window.document.body.clientHeight||window.document.documentElement.clientHeight;
    var scroll_h= document.body.scrollTop;
    /* console.log(scroll_h);*/
    to_top.onclick=function(){

        var timer=setInterval(function(){
            var speed =document.body.scrollTop/5;
            document.body.scrollTop-=speed;

            if(document.body.scrollTop==0){
                clearInterval(timer);}
        },50);

        /*if(scroll_h<H){
         to_top.style.display="none";


         }else{
         to_top.style.display="block";
         }*/
    };

}

