/**
 * Created by zhang.dakuo on 2017/2/23.
 */
//
// // 投资者关系teb切换
// $('.FinanceCon>.container>.concent>.nav>ul>li').on('click',function () {
// 	var $this = $(this).index();
// 	var $list = $('.FinanceCon>.container>.concent>.nav>ul>li');
// 	$(this).addClass('active').siblings().removeClass('active');
// 	$('.FinanceCon .yearBox').eq($this).show().siblings('.FinanceCon .yearBox').hide();
// })
// 年份导航
$('.FinanceCon .yearBox .navbac .navBox .list').on('click',function () {
	var $navBox = $('.FinanceCon .yearBox .navbac .navBox')
	var Num = $navBox.find('.list').length;
	if ($navBox.height()<=46) {
		$navBox.animate({'height':52*Num+'px'});
	}else{
		$navBox.animate({'height':'46px'});
	}
})