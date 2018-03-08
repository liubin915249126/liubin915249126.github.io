$(function() {
    $("#regForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            email: {
                required: "请输入Email地址",
                email: "请输入正确的email地址"
            },
            password: {
                required: "请输入密码",
                minlength: jQuery.validator.format("密码不能小于{0}个字 符")
            },
            confirm_password: {
                required: "请输入确认密码",
                minlength: "确认密码不能小于5个字符",
                equalTo: "两次输入密码不一致不一致"
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        submitHandler:function(form) {
            form.submit();
        }
    });
    $("#regName").validate({
        rules: {
            uername: {
                required: true
            },
            cellphonenumber: {
                required: true,
                minlength: 11,
                maxlength:11
            }
        },
        messages: {
            uername: {
                required: "请输入中文",
            },
            cellphonenumber: {
                required: "请输入正确的手机号码",
                minlength: jQuery.validator.format("密码不能小于{0}个字 符"),
                maxlength: jQuery.validator.format("密码不能大于{0}个字 符")
            },
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        submitHandler:function(form) {
            form.submit();
        }
    });
});