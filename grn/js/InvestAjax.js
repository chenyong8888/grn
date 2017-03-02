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
	var nav =$('.FinanceCon>.container>.concent>.nav>ul>li');
	nav.eq(tab).addClass('active').siblings().removeClass('active');
	$('.FinanceCon .yearBox').eq(tab).show().siblings('.FinanceCon .yearBox').hide();
}
// 投资者关系teb切换
$('.FinanceCon>.container>.concent>.nav>ul>li').on('click',function () {
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
	default:
		ThisTab (0)
	}
	var AjaxUrl = 'http://192.168.213.5/halo/api/'
	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: AjaxUrl+'getReportList',
		data:{
			reportType:1
		},
		success:function (data) {
			console.log(data.data)
		}
	});
})