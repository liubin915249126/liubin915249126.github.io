$(function(){
    $(".picAnimate").on("mouseover",function(){
        $(this).velocity(
            {
                scale:1.5
            },{
                duration: 400,
                easing: "swing",
                complete:function(){
                    $(this).velocity("callout.shake")
                }
            }
        )
    })

})