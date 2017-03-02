/**
 * Created by zhang.dakuo on 2017/2/23.
 */



// 获取地址栏参数
function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
// 导航到页面tab自动切换
function ThisTab (tab) {
	var nav =$('.mediaCon>.container>.concent .NavBox .list');
	nav.eq(tab).addClass('active').siblings().removeClass('active');
	$('.mediaCon>.container>.concent .conBox').eq(tab).show().siblings('.mediaCon>.container>.concent .conBox').hide();
}
// 投资者关系teb切换
$('.mediaCon>.container>.concent .NavBox .list').on('click',function () {
	var $this = $(this).index();
	ThisTab ($this)
})
$(function () {
	// console.log{}
	// 页面加载获取
	switch(GetQueryString('tab'))
	{
	case '1':
		ThisTab (0)
	break;
	case '2':
		ThisTab (1)
	break;
	case '3':
		ThisTab (2)
	break;
	case '4':
		ThisTab (3)
	break;
	default:
		ThisTab (0)
	}
	// var AjaxUrl = 'http://192.168.213.5/halo/api/'
	// // 投资banner
	// $.ajax({
	// 	type: 'POST',
	// 	dataType: 'json',
	// 	url: AjaxUrl+'getReportList',
	// 	data:{
	// 		reportType:3
	// 	},
	// 	success:function (data) {
	// 		console.log(data.data)
	// 	}
	// });
})