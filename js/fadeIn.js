(function($){
    /*自定义动画*/
    console.log($('.one'));
    $.Velocity.RegisterEffect('fadeIn', {
        defaultDuration: 500,
        calls: [
            [{opacity:[1,0],translateY:[0,100],scaleY:[1,0.5]}]
            ]
    });
    $.Velocity.RegisterEffect('rotate', {
        defaultDuration: 500,
        calls: [
            [{rotateZ:[360,0]}]
        ]
    });
    /*动画序列*/
    var seq = [
        {
            elements: $(".one"),
            properties: 'fadeIn',
            options: {
                delay:200
            }
        },
        {
            elements: $(".two"),
            properties: 'fadeIn',
            options: {
                sequenceQueue:false
            }
        },
        {
            elements: $(".three"),
            properties:'fadeIn',
            options: {
                sequenceQueue:false

            }
        },{
            elements: $(".four"),
            properties: 'fadeIn',
            options: {
                sequenceQueue:false,
                delay:60
            }
        },{
            elements: $(".five"),
            properties: 'fadeIn',
            options: {
                sequenceQueue:false,delay:60
            }
        },{
            elements: $(".six"),
            properties: 'fadeIn',
            options: {
                sequenceQueue:false,delay:60
            }
        }
    ]

    $.Velocity.RunSequence(seq);
    $(".seven").velocity("rotate",{
        delay:800
    });
})(jQuery);