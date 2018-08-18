$(document).ready(function() {
	$(".slide").hide()
	for(var i = 0; i < 6; i++) {
		$(".leftlist").append("<div class='zuoli zuoli" + i + "'></div>")
		$(".dulist").append("<div class='dlist dlist" + i + "'></div>")
	}
	$(".logo").click(function() {
		window.open("https://www.lamborghini.com/cn-en");
		//		window.location.href="https://www.lamborghini.com/cn-en";
	})
	$(".list").click(function() {
		oo = $(this).index();
		switch(oo) {
			case 0:
				ee()
				break;
			case 1:
				ff()
				break;
			case 2:
				jj()
				break;
			case 3:
				kk()
				break;
			case 4:
				ll()
				break;
		}
	})

	$(".list-1").hover(function() {
		$(".slide").slideDown();
		$(".youli").html(null);
		gg = $(this).index();
		switch(gg) {
			case 0:
				aa()
				break;
			case 1:
				bb()
				break;
			case 2:
				cc()
				break;
			case 3:
				dd()
				break;
		}
	})
	$(".list").mouseout(function() {
		var kk = $(this).index();
		$(".list").eq(kk).addClass("out");
	})
	$(".list").mousemove(function() {
		var kk = $(this).index();
		$(".list").eq(kk).siblings().removeClass("out");
	})
	$(".list-2").hover(function() {
		$(".slide").slideUp();
		$(".list").removeClass("out");
	})
	$(".mid").hover(function() {
		$(".slide").slideUp();
		$(".list").removeClass("out")
	})
	$(".bottom").hover(function() {
		$(".slide").slideUp();
		$(".list").removeClass("out")
	})
})

function aa() {
	$.get("text/head.json", function(data) {
		for(var i = 0; i < 6; i++) {
			var kk = data.nav[0].list[i];
			$(".zuoli").eq(i).html(kk + "<p class='fuhao" + i + "'></p>");
		}
		$(".zuoli").append("<div class='xianxian'></div>");
		$(".fuhao0").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".fuhao1").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".fuhao2").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".fuhao3").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".rightlist4").hide();
		$(".rightlist5").hide();
		$(".rightlist6").hide();
		$(".zuoli0").append("<div class='rightlist0'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist0").append("<div class='youli youli" + i + "'></div>")
			$(".rightlist0").hide()
		}
		$(".zuoli1").append("<div class='rightlist1'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist1").append("<div class='youli-1 youli-1" + i + "'></div>")
			$(".rightlist1").hide();
		}
		$(".zuoli2").append("<div class='rightlist2'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist2").append("<div class='youli-2 youli-2" + i + "'></div>")
			$(".rightlist2").hide();
		}
		$(".zuoli3").append("<div class='rightlist3'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist3").append("<div class='youli-3 youli-3" + i + "'></div>")
			$(".rightlist3").hide();
		}

		$(".zuoli0").mouseover(function() {
			$(".rightlist0").show();
			$(".rightlist1").hide();
			$(".rightlist2").hide();
			$(".rightlist3").hide();
			for(var i = 0; i < 6; i++) {
				var kk = data.nav[4].list[i];
				$(".youli").eq(i).html(kk + "<div class='xianxian1'></div>");
			}

		})
		$(".youli").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli1").mouseover(function() {
			$(".rightlist0").hide();
			$(".rightlist1").show();
			$(".rightlist2").hide();
			$(".rightlist3").hide();
			for(var i = 0; i < 2; i++) {
				var kk = data.nav[5].list[i];
				$(".youli-1").eq(i).html(kk + "<div class='xianxian1'></div>");
			}
		})
		$(".youli-1").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli2").mouseover(function() {
			$(".rightlist0").hide();
			$(".rightlist1").hide();
			$(".rightlist2").show();
			$(".rightlist3").hide();
			for(var i = 0; i < 3; i++) {
				var kk = data.nav[6].list[i];
				$(".youli-2").eq(i).html(kk + "<div class='xianxian1'></div>");
			}
		})
		$(".youli-2").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli3").mouseover(function() {
			$(".rightlist0").hide();
			$(".rightlist1").hide();
			$(".rightlist2").hide();
			$(".rightlist3").show();
			for(var i = 0; i < 2; i++) {
				var kk = data.nav[7].list[i];
				$(".youli-3").eq(i).html(kk + "<div class='xianxian1'></div>");
			}
		})
		$(".youli-3").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli4").mouseover(function() {
			$(".rightlist0").hide();
			$(".rightlist1").hide();
			$(".rightlist2").hide();
			$(".rightlist3").hide();
		})

	})

}

function bb() {
	$.get("text/head.json", function(data) {
		for(var i = 0; i < 6; i++) {
			var kk = data.nav[1].list[i];
			$(".zuoli").eq(i).html(kk);
			$(".zuoli").eq(i).html(kk + "<p class='fuhao" + i + "'></p>");
		}
		$(".zuoli").append("<div class='xianxian'></div>")
		$(".fuhao0").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".rightlist0").hide();
		$(".rightlist1").hide();
		$(".rightlist2").hide();
		$(".rightlist3").hide();
		$(".rightlist5").hide();
		$(".rightlist6").hide();
		$(".zuoli0").append("<div class='rightlist4'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist4").append("<div class='youli-4 youli-4" + i + "'></div>")
			$(".rightlist4").hide();
		}
		$(".zuoli0").mouseover(function() {
			$(".rightlist4").show();
			for(var i = 0; i < 4; i++) {
				var kk = data.nav[8].list[i];
				$(".youli-4").eq(i).html(kk + "<div class='xianxian1'></div>");
			}
		})
		$(".youli-4").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli1").mouseover(function() {
			$(".rightlist4").hide();
		})
		$(".zuoli2").mouseover(function() {
			$(".rightlist4").hide();
		})
		$(".zuoli3").mouseover(function() {
			$(".rightlist4").hide();
		})
		$(".zuoli4").mouseover(function() {
			$(".rightlist4").hide();
		})

	})
}

function cc() {
	$.get("text/head.json", function(data) {
		for(var i = 0; i < 6; i++) {
			var kk = data.nav[2].list[i];
			$(".zuoli").eq(i).html(kk);
			$(".zuoli").eq(i).html(kk + "<p class='fuhao" + i + "'></p>");
		}
		$(".zuoli").append("<div class='xianxian'></div>")
		$(".fuhao0").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".fuhao4").html("<i class='fa fa-angle-right' aria-hidden='true'></i>");
		$(".rightlist0").hide();
		$(".rightlist1").hide();
		$(".rightlist2").hide();
		$(".rightlist3").hide();
		$(".rightlist4").hide();
		$(".zuoli0").append("<div class='rightlist5'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist5").append("<div class='youli-5 youli-5" + i + "'></div>")
			$(".rightlist5").hide();
		}
		$(".zuoli4").append("<div class='rightlist6'></div>")
		for(var i = 0; i < 6; i++) {
			$(".rightlist6").append("<div class='youli-6 youli-6" + i + "'></div>")
			$(".rightlist6").hide();
		}
		$(".zuoli0").mouseover(function() {
			$(".rightlist5").show();
			$(".rightlist6").hide();
			for(var i = 0; i < 3; i++) {
				var kk = data.nav[9].list[i];
				$(".youli-5").eq(i).html(kk + "<div class='xianxian1'></div>");
			}
		})
		$(".youli-5").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli1").mouseover(function() {
			$(".rightlist5").hide();
			$(".rightlist6").hide();
		})
		$(".zuoli2").mouseover(function() {
			$(".rightlist5").hide();
			$(".rightlist6").hide();
		})
		$(".zuoli3").mouseover(function() {
			$(".rightlist5").hide();
			$(".rightlist6").hide();
		})
		$(".zuoli4").mouseover(function() {
			$(".rightlist5").hide();
			$(".rightlist6").show();
			for(var i = 0; i < 4; i++) {
				var kk = data.nav[10].list[i];
				$(".youli-6").eq(i).html(kk + "<div class='xianxian1'></div>");
			}
		})
		$(".youli-6").mouseover(function() {
			event.stopPropagation();
		})
		$(".zuoli5").mouseover(function() {
			$(".rightlist5").hide();
			$(".rightlist6").hide();
		})
	})
}

function dd() {
	$.get("text/head.json", function(data) {
		for(var i = 0; i < 6; i++) {
			var kk = data.nav[3].list[i];
			$(".zuoli").eq(i).html(kk);
		}
		$(".zuoli").append("<div class='xianxian'></div>")
		$(".zuoli0").mouseover(function() {
			$(".youli").html(null);
		})
		$(".zuoli1").mouseover(function() {
			$(".youli").html(null);
		})
		$(".zuoli2").mouseover(function() {
			$(".youli").html(null);
		})
		$(".zuoli3").mouseover(function() {
			$(".youli").html(null);
		})
		$(".zuoli4").mouseover(function() {
			$(".youli").html(null);
		})
		$(".zuoli5").mouseover(function() {
			$(".youli").html(null);
		})
		//		$(".youli").append("<div class='xianxian'></div>")
	})
}

function ee() {
	$.get("text/head1.json", function(data) {
		$(".dlist").html(null);
		for(var i = 0; i < 4; i++) {
			var kk = data.nav[0].list[i];
			$(".dlist").eq(i).html(kk);
		}
	})
}

function ff() {
	$.get("text/head1.json", function(data) {
		$(".dlist").html(null);
		for(var i = 0; i < 4; i++) {
			var kk = data.nav[1].list[i];
			$(".dlist").eq(i).html(kk);
		}
	})
}

function jj() {
	$.get("text/head1.json", function(data) {
		$(".dlist").html(null);
		for(var i = 0; i < 4; i++) {
			var kk = data.nav[2].list[i];
			$(".dlist").eq(i).html(kk);
		}
	})
}

function kk() {
	$.get("text/head1.json", function(data) {
		$(".dlist").html(null);
		for(var i = 0; i < 4; i++) {
			var kk = data.nav[3].list[i];
			$(".dlist").eq(i).html(kk);
		}
	})
}

function ll() {
	$.get("text/head1.json", function(data) {
		$(".dlist").html(null);
		for(var i = 0; i < 4; i++) {
			var kk = data.nav[4].list[i];
			$(".dlist").eq(i).html(kk);
		}
	})
}