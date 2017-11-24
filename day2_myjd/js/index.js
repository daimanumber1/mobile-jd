window.onload = function() {
	search();
	banner();
	countDown();
}
//顶部搜索栏
function search() {
	var jd_header_box = document.querySelector(".jd_header_box");
	var height = jd_header_box.offsetHeight;

	window.onscroll = function() {
		var top = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
		console.log(top);
		if(top < height) {
			var opacity = top / height * 0.85;
		} else {
			opacity = 0.85;
		}
		jd_header_box.style.backgroundColor = "rgba(225,47,50," + opacity + ")";
	}

}

//轮播图
function banner() {
	var jd_banner = document.getElementsByClassName("jd_banner")[0];
	var ul1 = jd_banner.children[0];
	var w = ul1.offsetWidth / 10;
	//	添加过度
	var addTransition = function() {
		ul1.style.transition = "all 0.2s";
		ul1.style.webkitTransition = "all 0.2s";
	}
	// 删除过渡
	var removeTransition = function() {
		ul1.style.transition = "none";
		ul1.style.webkitTransition = "none";
	}
	//	移动ul位置
	var setTranslateX = function(x) {
		ul1.style.transform = "translateX(" + x + "px)";
		ul1.style.webkitTransform = "translateX(" + x + "px)";
	}

	//页面加载完毕后自动滚动
	var index = 1;
	var timer = setInterval(function() {
		index++;
		addTransition();
		setTranslateX(-index * w);
		if(index >= 10) {
			index = 1;
			removeTransition();
			setTranslateX(-index * w);
		}
	}, 4000)

}

//倒计时countdown
function countDown() {
	var timeSpans = document.querySelector(".tit1_time").children;
	var time = 3 * 60 * 60;
	var timer = window.setInterval(function() {
		if(time < 0) {
			clearInterval();
			return false;
		}
		time--;
		var h = Math.floor(time / 3600);
		var m = Math.floor(time % 3600 / 60);
		var s = Math.floor(time % 60);
		timeSpans[0].innerHTML = Math.floor(h / 10);
		timeSpans[1].innerHTML = h % 10;

		timeSpans[3].innerHTML = Math.floor(m / 10);
		timeSpans[4].innerHTML = m % 10;

		timeSpans[6].innerHTML = Math.floor(s / 10);
		timeSpans[7].innerHTML = s % 10;

	}, 1000);

}