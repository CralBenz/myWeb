
const aboutMe ={
	template:`
	<div class="left-content-abm">
		<div class="l-content-top">
			<div class="lctop-avater">
				<img class="lctop-img" src="image/avater.png" />
			</div>
			<div class="lctop-describe">
				<p class="list"> <i class="iconfont">&#xe623;</i> &nbsp;&nbsp;Name : &nbsp;&nbsp;梁书豪 / Jeremy </p>
				<p class="list"><i class="iconfont">&#xe645;</i> &nbsp;&nbsp;Birthday ：&nbsp;1990.08.06 </p>
				<p class="list"><i class="iconfont">&#xe63c;</i> &nbsp;&nbsp;Education ：&nbsp;大学本科 </p>
				<p class="list"><i class="iconfont">&#xe652;</i> &nbsp;&nbsp;Address ：&nbsp;郑州市管城区</p>
				<p class="list"><i class="iconfont">&#xe618;</i> &nbsp;&nbsp;Tel ：&nbsp;&nbsp;155-5978-9359 </p>
				<p class="list"> <i class="iconfont">&#xe63f;</i> &nbsp;&nbsp;Email ：&nbsp;liangshuhaoasj@163.com </p>
			</div>
		</div>
		<div class="l-content-text">
			<p> 简介 : &nbsp;&nbsp;我热衷于程序开发，能很好的根据用户需求完成可用性、易用性、良好交互性和用户体验的产品。自信、乐观、责任心强。具有较好的团队组织能力、分析问题和宣传策划能力、协调能力等。</p>
		</div>
	</div>
	`
}
const myTeam ={
	template:`
	<div class="left-team-con">
		<h4>稳稳稳.设计开发小组</h4>
		<p class="ppp3">www开发小组成员的年龄18-28岁不等，都是身怀绝技的coder，python跳一跳、树莓派挖矿、workflow，爱学习的我们是与时俱进的。</p>
		<p class="ppp3">小组承接项目：微信小程序、手机APP、HTML响应式、UI设计，编写框架。我们经验丰富，人员负责，服务人性化，用户体验好。诚实守信，客户满意。</p>
		<p class="ppp3">项目负责人电话 : 155-5978-9359 </p>
		<p class="ppp1 ">基地 ：万达双子楼南塔12楼项目6 </p>
		<p class="ppp1">工作邮箱 ：liangshuhaoasj@qq.com </p>
		<p class="ppp1 ">QQ交流群：413449985</p>
	</div>
	`
}

const home = {
	template:`
	<div class='mobilecon'>
		<div class="middler">
			<div class="decsribe">
				<div class="hello">
					Hello World ， I'm Jeremy.
				</div>
				<div class="hello ddd">
					我是一名前端开发程序猿,喜欢简约的东西，就像这个网页一样。Logo图案是我养的柯基的抓拍照，仓库里是我的小研究，我想集结一帮程序员大牛搞事情，可他们都很忙。
				</div>
			</div>
			<div class="con-all">
				<div class="con-left">
					<div class="left-title">
						<router-link  to="aboutMe">
							<div id="aboutme"  @click="tabBar($event)"  class="quab bian"> 关于我</div>
						</router-link>
					 	<router-link  to="myTeam">
							<div id="myteam"   @click="tabBar($event)" class="quab"> 我的团队</div>
						</router-link>
					</div>
					<router-view></router-view>
				</div>
			 	<div class="con-right">
					<div class="right-title">
						我的仓库
					</div>
					<div class="right-content">
						<p> 仓库里是一些平时的小研究...</p>
						<div class="rep-demo"  @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/click.html')">
							<p class="bbbb">点击特效</p>
							<p style="font-size: 12px;margin-top: 5%;">Jquery结合css动画，非常实用的加分特效。</p>
							<div class="skillpoint">
								<i style="font-size: 10px; color: #D25635;" class="iconfont">&#xe62f;</i> CSS
							</div>
							<div class="skillpoint skillpoint1">
								<i style="font-size: 10px; color: #9077B0;" class="iconfont">&#xe62f;</i> JS
							</div>
						</div>
						<div class="rep-demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/star.html')">
							<p class="bbbb">粒子星空</p>
							<p style="font-size: 12px;margin-top: 3%;">基于canvas所写，源码非本人编写,不过略作修改更炫了一些...</p>
							<div class="skillpoint">
								<i style="font-size: 10px; color: #5896E9;" class="iconfont">&#xe62f;</i> Canvas
							</div>
							<div class="skillpoint skillpoint1">
								<i style="font-size: 10px; color:#D25635;" class="iconfont">&#xe62f;</i> CSS
							</div>
						</div>
						<div class="rep-demo secline" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/lestju.html')">
							<p class="bbbb">寻找最短距离</p>
							<p style="font-size: 12px;margin-top: 5%;">JavaScript结合Canvas做的一款小游戏，书豪优化版。</p>
							<div class="skillpoint">
								<i style="font-size: 10px; color: #5896E9;" class="iconfont">&#xe62f;</i> Canvas
							</div>
							<div class="skillpoint skillpoint1">
								<i style="font-size: 10px; color:#9077AF;" class="iconfont">&#xe62f;</i> JS
							</div>
						</div>
						<div class="rep-demo secline" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/cssfan.html')">
							<p class="bbbb">3D-Box</p>
							<p style="font-size: 12px;margin-top: 5%;">看电视广告上有,就把它还原了,效果还不错.</p>
							<div class="skillpoint">
								<i style="font-size: 10px; color:#9077B0;" class="iconfont">&#xe62f;</i> Jquery
							</div>
						</div>
						<router-link to='/repertory'>
							<div class="lookmore">
								更多Demo和项目实例 更新中 <i class="iconfont jiahao">&#xe607;</i>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div id="progressbar">
		        <div id="back"></div>   
		        <p id="talk">现在时间<i id="year"></i>  今年已经过去<i id="Percent"></i>了</p>
		    </div>
		</div>
	</div>
	`,
	methods:{
		tabBar:function(el){
        $(el.target).addClass('bian');
        $(el.target).parent().siblings().children().removeClass('bian');
		},
		randomColor:function(el){
			var arry=["#EA6F41","#7872E2","#A8A8A9","#466FD6","#F5C648","#4897F0"];
			var sel= Math.floor(Math.random()*6);
			var randomcolor = arry[sel];
			$(el.target).children(":first").css('color','white');
			$(el.target).css({
				'background-color':randomcolor,
				'color':'white',
				'box-shadow': '0.2rem 0.2rem 0.3rem',
			});
		},
		randomBack:function(el){
			$(el.target).children(":first").css('color','#5896E9');
			$(el.target).css({
				'background-color':'#F4F5F8',
				'color':'#3A3D43',
				'box-shadow': '0rem 0rem 0rem',
			});
		},
	}
}

const repertory={
	template: `
	<div class="all">
		<div class="repertorycontents">
		    <p class="alldiscribe">
		        Tips : 这里是我的一些小研究 , 有兴趣的话可以看看 ...
		    </p>

		    <div class="line">
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/click.html')">
		            <p class="demo-title">
		                点击特效
		            </p>
		            <p class="demo-decribe">
		                Jquery结合css动画实现，非常实用的加分特效。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color:#9077B0;">&#xe62f;</i> JS
		            </div>
		            <div class="demopoint1">
		            		<i class="iconfont" style="color:#D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/star.html')">
		            <p class="demo-title">
		                粒子星空
		            </p>
		            <p class="demo-decribe">
		                基于canvas所写，源码非本人编写,不过略作修改更炫酷了一些。
		            </p>
		            <div class="demopoint">
		            		<i class="iconfont" style="color: #5896E9;">&#xe62f;</i> Canvas
		            </div>
		            <div class="demopoint1">
		               <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/milk.html')">
		            <p class="demo-title">
		                乳白色效果
		            </p>
		            <p class="demo-decribe">
		                除了能为乳制品做广告素材之外，还能当作背景，制作卡片等。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #2B64CF;">&#xe62f;</i> HTML5
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/random.html')">
		            <p class="demo-title">
		                随机数去重
		            </p>
		            <p class="demo-decribe">
		                在一定范围内取几个随机数，使不重复，有这个可以开彩票店了。
		            </p>
		            <div class="demopoint">
		            		<i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		    </div>
		    
		    <div class="line">
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/snow.html')">
		            <p class="demo-title">
		                飘雪效果
		            </p>
		            <p class="demo-decribe">
		                canvas特效，源码非本人编写,不过略作修改更适合武侠小说背景。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #5896E9;">&#xe62f;</i> Canvas
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> JS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/colock.html')">
		            <p class="demo-title">
		                日期和闹钟
		            </p>
		            <p class="demo-decribe">
		                codeing常常忘记时间,于是用moment.js做了一个闹钟,提醒我去吃饭。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> JS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/timezhou.html')">
		            <p class="demo-title">
		                时间轴
		            </p>
		            <p class="demo-decribe">
		                这是一个很常用的页面设计单元，写好存着用时copy。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/loading.html')">
		            <p class="demo-title">
		                加载loading...
		            </p>
		            <p class="demo-decribe">
		                纯CSS实现的加载页面动画，三个案例拿走不谢。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color:#2B64CF;">&#xe62f;</i> HTML5
		            </div>
		        </div>
		        
		    </div>
		    
		    <div class="line">
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/page.html')">
		            <p class="demo-title">
		                翻页效果
		            </p>
		            <p class="demo-decribe">
		                用jquery实现的一个翻页效果的Demo,类似于angular路由的效果.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/lestju.html')">
		            <p class="demo-title">
		                寻找最短距离
		            </p>
		            <p class="demo-decribe">
		                原生Js结合Canvas做的一款寻找最短距离小游戏，做了优化和改进。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #5896E9;">&#xe62f;</i> Canvas
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color:#9077B0;">&#xe62f;</i> JS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/drag.html')">
		            <p class="demo-title">
		                鼠标拖拽
		            </p>
		            <p class="demo-decribe">
		                原生js的进阶性思考,面向过程,监听鼠标拖拽,碰撞,替换.由于是鼠标事件，所以手机暂时无法体验。
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> JS
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/robote.html')">
		            <p class="demo-title">
		                提线木偶
		            </p>
		            <p class="demo-decribe">
		                在一个网站上看到的,一步一步的把它还原出来了,还做了优化.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #5896E9;">&#xe62f;</i> Canvas
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> JS
		            </div>
		        </div>
		        
		    </div>
		    
		    <div class="line">
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/promise.html')">
		            <p class="demo-title">
		                promise封装
		            </p>
		            <p class="demo-decribe">
		                变量是有寿命的,但可以先放进冰箱保鲜.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #58BEAB;">&#xe62f;</i> Ajax
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/zzdh.html')">
		            <p class="demo-title">
		                逐帧动画
		            </p>
		            <p class="demo-decribe">
		                想要动图,又不想占用内存,就用逐帧动画.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #2B64CF;">&#xe62f;</i> HTML5
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/03.html')">
		            <p class="demo-title">
		                兰博基尼
		            </p>
		            <p class="demo-decribe">
		                浏览了兰博基尼官网,觉得导航栏很炫酷,就把他的首页还原了下来,还做了有手机端.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/fanzhuan.html')">
		            <p class="demo-title">
		                卡片3D反转
		            </p>
		            <p class="demo-decribe">
		                网页其实不是平面二位位的,他也有 X轴, Y轴, Z轴,于是做了个翻牌效果.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #2B64CF;">&#xe62f;</i> HTML5
		            </div>
		        </div>
		        
		    </div>
		    
		    <div class="line">
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/pinduoduo.html')">
		            <p class="demo-title">
		                轮播图
		            </p>
		            <p class="demo-decribe">
		                拼多多的轮播图,写好模版备用;
		            </p>
		            <div class="demopoint">
		            		<i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color:#D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/countdown.html')">
		            <p class="demo-title">
		                短信倒计时
		            </p>
		            <p class="demo-decribe">
		                点击进入倒计时,固定时间内不能被点击,过后可重新获取.
		            </p>
		            <div class="demopoint">
		            		<i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color:#D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/cssfan.html')">
		            <p class="demo-title">
		                3D-Box
		            </p>
		            <p class="demo-decribe">
		                常用的html页面板块,简单粗暴高大上;
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/watch.html')">
		            <p class="demo-title">
		                我的手表
		            </p>
		            <p class="demo-decribe">
		                我的第一块8000块的手表,18岁生日礼物,把它还原出来;
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> JS
		            </div>
		            <div class="demopoint1">
		           		<i class="iconfont" style="color: #D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		    </div>
		    
		    <div class="line">
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/wave.html')">
		            <p class="demo-title">
		                纯CSS波浪
		            </p>
		            <p class="demo-decribe">
		                这个素材可以广泛运用并提升逼格;
		            </p>
		            <div class="demopoint">
		            		<i class="iconfont" style="color: #2B64CF;">&#xe62f;</i> HTML5
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color:#D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/xx--.html')">
		            <p class="demo-title">
		                三道杠
		            </p>
		            <p class="demo-decribe">
		                常用的页面元素,通常配合侧边栏,写好备用.
		            </p>
		            <div class="demopoint">
		            		<i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color:#D25635;">&#xe62f;</i> CSS
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)' onclick="window.open('template/cardmanage.html')">
		            <p class="demo-title">
		                卡片管理模拟
		            </p>
		            <p class="demo-decribe">
		                用Jquery模拟后台,并把数据进行了处理,直接存数据库即可.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> JS
		            </div>
		            <div class="demopoint1">
		                <i class="iconfont" style="color: #EEE06F;">&#xe62f;</i> Jquery
		            </div>
		        </div>
		        
		        <div class="demo" @mouseleave='randomBack($event)' @mouseenter='randomColor($event)'>
		            <p class="demo-title">
		                更新中...
		            </p>
		            <p class="demo-decribe">
		                废话少说,放“码”过来.
		            </p>
		            <div class="demopoint">
		                <i class="iconfont" style="color: #9077B0;">&#xe62f;</i> null
		            </div>
		            <div class="demopoint1">
		           		<i class="iconfont" style="color: #D25635;">&#xe62f;</i> undefined
		            </div>
		        </div>
		        
		    </div>
		    
		    <div class="bottom">
				持续更新中，敬请期待...
		    </div>
		</div>
	</div>
		`,
	methods:{
		randomColor:function(el){
			var arry=["#EA6F41","#7872E2","#A8A8A9","#466FD6","#F5C648","#4897F0"];
			var sel= Math.floor(Math.random()*6);
			var randomcolor = arry[sel];
			$(el.target).children(":first").css('color','white');
			$(el.target).css({
				'background-color':randomcolor,
				'border-color':randomcolor,
				'color':'white',
				'box-shadow': '0.2rem 0.2rem 0.3rem #79828E',
			});
		},
		randomBack:function(el){
			$(el.target).children(":first").css('color','#5896E9');
			$(el.target).css({
				'background-color':'#F4F5F8',
				'border-color':'#D2D4D9',
				'color':'#3A3D43',
				'box-shadow': '0rem 0rem 0rem',
			});
		},
	}
}

const study={
	template:`
	<div id="all">
		<div class="qq">
			<div class="ty1"></div>
			<div class="ty2"></div>
		</div>
		<div class="qq1"></div>
		<div class="aa"></div>
		<div class="bb"></div>
		<div class="cc">
			<div class="hywz" id="hy1">抱歉的通知</div>
			<div class="hywz" id="hy2">学习日记</div>
		</div>
		<div class="dd"></div>
		<div class="ee"></div>
		<div class="qq2">
			<div class="ty3"></div>
			<div class="ty4"></div>
		</div>
		<div class="qq3"></div>
		<div class="qq4"></div>
		<div class="cc1">
			<div class="hywz" id="hy3">已经整体迁移...</div>
			<div class="hywz" id="hy4">想共谋大事，请联系业主。</div>
		</div>
		<div class="ee1"></div>
		<div class="aa1"></div>
		<div class="qq5">
			<div class="ty5"></div>
			<div class="ty6"></div>
		</div>
		<div class="qq6"></div>
		<div class="qq7"></div>
	</div>
		`
}

const top_tpl={
	template:`
	<div class="toper">
		<div class="navigation">
			<div class="navtitle avatar " >
				<div v-if='visiable' class="musicContral">聪明！音乐开关
					<span class="triangle"></span>
				</div>
			</div>
			<div class="mobileshow">
					Hello World ， I'm Jeremy.
			</div>
			<div class='zaiti' @click='menutoggle($event)'></div>
			<div class="toggleNavButton"></div>
			<div class="navtitle titlebar">
				<div class="ttt">
					<router-link  to="/home" >
						Home 我的主页
					</router-link>
				</div>
				<div class="ttt">
					<router-link  to="/repertory" >
						Repertory 仓 库
					</router-link>
				</div>
				<div class="ttt">
					<router-link  to="/study">
						Blog 学习日记
					</router-link>
				</div>
		</div>
		<div class="navtitle connect">
				<p>
					Tel : 155-5978-9359
				</p>
				<p>
					Emial : liangshuhaoasj@163.com
				</p>
			</div>
		</div>
	</div>
	`,
	props:['visiable'],
	methods:{
		menutoggle:function(el){
			$(el.target).siblings('.toggleNavButton').toggleClass('menuActive');
			$(el.target).siblings('.titlebar').toggleClass('navtoggle');
		},
	},
}

const routes = [
{
	path:'/',
	redirect:'/home'
},
{
	path: '/home',
	component: home,
	redirect:'/home/aboutMe',
	children: [{
		path: 'aboutMe',
		component: aboutMe,
		}, {
		path: 'myTeam',
		component: myTeam,
	}],
}, 
{
	path: '/repertory',
	component:repertory,
},
{
	path:'/study',
	component:study,
}];


var router = new VueRouter({
	routes: routes,
});

router.beforeEach(function(to,from,next){
	// console.log(to);
		window.addEventListener('load',function(){
			if(to.path=="/home/myTeam"){
				next('/home/aboutMe')
			}
		});
	next();
});

var vm = new Vue({
	el: '#app',
	router: router,
	data:{
		visiable:false,
		musicPlay:true,
	},
	methods:{
		toggleMusic:function(event){
			var audio = document.getElementById('player');
			if (this.musicPlay) {
				audio.pause();
				this.musicPlay=!this.musicPlay;
			}else{
				audio.play();
				this.musicPlay=!this.musicPlay;
			}
		},
		show:function(){
			this.visiable=true;
		},
		hide:function(){
			this.visiable=false;
		},
		disableInfo:function(){
			//music volume
			var player = $("#player")[0];
			player.volume = 0.2;
			document.onkeydown = function() {
				var e = window.event || arguments[0];
		        //屏蔽F12
		        if(e.keyCode == 123) {
		        	return false;
		            //屏蔽Ctrl+Shift+I
		        } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
		        	return false;
		            //屏蔽Shift+F10
		        } else if((e.shiftKey) && (e.keyCode == 121)){
		        	return false;
		        }
		    };
			//屏蔽右键单击
			document.oncontextmenu = function() {
				return false;
			}
		},
		browserCheck:function(){
			let [is360,isIE,isFireFox,isChrome,isEdge]=[false,false,false,false,false];
			var userAgent = window.navigator.userAgent; 
			//FireFox
			if(userAgent.includes('Firefox')) {
				isFireFox = true;
			}
			//Edge
			if(userAgent.includes('Edge')) {
				isEdge = true;
			}
			//IE浏览器
			if(userAgent.includes('NET') && userAgent.includes('rv')) {
				isIE = true;
			}
			//360极速模式可以区分360安全浏览器和360极速浏览器
			if(userAgent.includes('WOW') && !userAgent.includes('NET') && !userAgent.includes('Firefox')) {
				if(navigator.javaEnabled()) {
					is360 = true;
				//broName = '360安全浏览器-极速模式';
				} else {
					is360 = true;
				//broName = '360极速浏览器-极速模式';
				}
			}
			//360兼容
			if(userAgent.indexOf('WOW')!=-1 && userAgent.indexOf("NET")!=-1&& userAgent.indexOf("MSIE")!=-1  && userAgent.indexOf("rv")<0) {
				is360 = true;
			//broName = '360兼容模式';
			}
			//Chrome浏览器
			if(!userAgent.includes('WOW') && !userAgent.includes('Edge') && !userAgent.includes('Firefox')) {
				isChrome = true;
			}
			// console.log(isFireFox);
			if(!isChrome && !isFireFox && !isIE){
				console.log("badbrowser");
				$('#browsercheck').html("你太low了，请使用Chrome、FireFox 、IE等主流浏览器");
				$('#browsercheck').addClass('browsercheck');
			}else{
				console.log("okbrowser");
				$('#browsercheck').removeClass('browsercheck');
			};
		}
	},
	components:{
		top:top_tpl,
	}
});
////unable F12
vm.disableInfo();
////browser check
vm.browserCheck();
