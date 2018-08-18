$(function() {

//		if($(window).width() <= 640) {
//			$(".slider2").hide();
//		}
	$(".chang").click(function() {
		$(this).addClass("bian")
		$(this).siblings().removeClass("bian")
		var kk = $(this).index();
		if(kk == 0) {
			first();
		} else if(kk == 1) {
			second();
		} else {}
	})

	$(".tiao").click(function() {
		$("html,body").animate({
			scrollTop: $(".toppic").height() - $('.head').height()
		}, 500);
	});

	if($(window).width() > 640) {
		var pp = $(".zdysc1").offset().top - 754;
		$(window).scroll(function() {
			var ss = $("html,body").scrollTop(); //监听body部分滚动到哪。
			var wind = $(window).height(); //滚动当前位置加上一个屏幕的高度刚好是底部将要出来
			var all = ss + wind;
			if(all < pp) {
				$(".third").css({
					"opacity": "0.1",
					"top": "100px"
				})
			} else if(all >= pp) {
				$(".third").animate({
					top: "0",
					opacity: "1"
				}, 1500)
			}
			console.log(pp)
		});
	} else {
		$(".img").attr("src", "img/retro.jpg")
	}

		var i = 1
		setInterval(function() {
			if(i == 1) {
				$(".chang2").click()
				i = 2
			} else if(i == 2) {
				$(".chang1").click()
				i = 1
			}
		}, 5000);

	var xh = setInterval(xuanzhuan, 10);

	$(".leftpic").hover(function() {
		$(".mengban1").hide();
	}, function() {
		$(".mengban1").show();
	})
	$(".rightpic").hover(function() {
		$(".mengban2").hide();
	}, function() {
		$(".mengban2").show();
	})
})

function first() {
	//	$(".mengban").fadeOut();
	$(".slider2").fadeOut();
	//	$(".mengban").fadeIn();
	$(".slider1").fadeIn();
	$(".chang1").addClass("bian");
	$(".chang1").siblings().removeClass("bian");
}

function second() {
	if($(window).width() > 640) {
		$(".toppic").css({
			"background-image": "url(img/slider2.jpg)",
			"background-size": "cover",
		})
	}

	//	$(".mengban").fadeOut();
	$(".slider1").fadeOut();
	//	$(".mengban").fadeIn();
	$(".slider2").fadeIn();
	$(".chang2").addClass("bian");
	$(".chang2").siblings().removeClass("bian");
}

function xuanzhuan() {
	$(".tiao").animate({
		bottom: "0px",
	}, 1000).animate({
		bottom: "15px",
	}, 1000)
}