$(function(){
	//登录注册切换
	$(".register-btn").click(function(){
		$(".register").show();
		$(".login-content").hide();
  		$(this).css({
  			"color":"#36bbc7",
  			"font-size": "16px"
  		});
  		$(".login-btn").css({
  			"color":"#000",
  			"font-size": "14px"
  		});
	});
	$(".login-btn").click(function(){
		$(".register").hide();
		$(".login-content").show();
		$(this).css({
  			"color":"#36bbc7",
  			"font-size": "16px"
  		});
  		$(".register-btn").css({
  			"color":"#000",
  			"font-size": "14px"
  		});
	});
	//表单验证
	var phonenum = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
	$("#btn-login").click(function(){
//		console.log($("#login-phone").val());
		if($("#login-phone").val() == "") {
			alert("手机号不能为空");
			return false;
		};
		if($("#login-pwd").val() == "") {
			alert("密码不能为空");
			return false;
		};
		if (!phonenum.test($("#login-phone").val())) {
			alert('请输入正确的手机号码');
    		return false;
		};
		if (!pwd.test($("#login-pwd").val())) {
			alert('请输入六位由字母数字组成的密码');
    		return false;
		};

	});
	$("#btn-register").click(function(){
		if($("#register-phone").val() == "") {
			alert("手机号不能为空");
			return false;
		};
		if($("#register-pwd").val() == "" || $("#register-againpwd").val() == "") {
			alert("密码不能为空");
			return false;
		};
		if($("#test-code").val() == "") {
			alert("请获取验证码并输入");
			return false;
		};

		if(!phonenum.test($("#register-phone").val())) {
			alert('请输入正确的手机号码');
    		return false;
		}
		if (!pwd.test($("#register-pwd").val())) {
			alert('请输入六位由字母数字组成的密码');
    		return false;
		}
		if(!$("#register-pwd").val() == $("#register-againpwd").val()) {
			alert("两次密码输入不一致");
			return false;
		}
	})








})
