/**
 * Created for Redaholic.
 */
define(function (require) {
    var $ = require('jquery'),
        jqm = require('jquerymobile');

    // blank页面显示时，隐藏底部的tab标签
    $("#helper").on("pagebeforeshow", function( event ) {
        $('#news_footer').hide();
    });

    // 返回assistantHome页面
    $("#helper_back_btn").on('click', function(){
        $.mobile.newChangePage("#assistantHome",{ transition: "slide",reverse: true,changeHash: false});
    });
    // back to tips page
    $("#helper_back_btn_share").on('click', function(){
        $.mobile.newChangePage("#helper_tips",{ transition: "slide",reverse: true,changeHash: false});
    });
    //back to share page
    $("#helper_back_btn_pool").on('click', function(){
        $.mobile.newChangePage("#helper_tips_share",{ transition: "slide",reverse: true,changeHash: false});
    });
    //back to pool page
    $("#helper_back_btn_points").on('click', function(){
        $.mobile.newChangePage("#helper_tips_pool",{ transition: "slide",reverse: true,changeHash: false});
    });

    document.getElementById("a_ot").onclick = function() {
        $("#a_ot").css("background-color","#007aff");
        $("#a_mt").css("background-color","#f26647");
        document.getElementById("my_tips").style.display = "none";
        document.getElementById("offer_tips").style.display = "block";
    }
//    $("#a_mt").on('click', function(){
//        $("#a_mt").css("background-color","#007aff");
//        $("#a_ot").css("background-color","#f26647");
//        document.getElementById("my_tips").style.display = "block";
//        document.getElementById("offer_tips").style.display = "none";
//    }


            document.getElementById("a_mt").onclick = function() {
                $("#a_mt").css("background-color","#007aff");
                $("#a_ot").css("background-color","#f26647");
                document.getElementById('my_tips').style.display = "block";
                document.getElementById('offer_tips').style.display = "none";
            }

            document.getElementById("a_ot_points").onclick = function() {
                $("#a_ot_points").css("background-color","#007aff");
                $("#a_mt_points").css("background-color","#f26647");
                document.getElementById('my_points').style.display = "none";
                document.getElementById('points_ranking_list').style.display = "block";
            }
            document.getElementById("a_mt_points").onclick = function() {
                $("#a_mt_points").css("background-color","#007aff");
                $("#a_ot_points").css("background-color","#f26647");
                document.getElementById('my_points').style.display = "block";
                document.getElementById('points_ranking_list').style.display = "none";
            }
    var idList=new Array();
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
            }
        return -1;
    };
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };
    $(".mui-table-view-cell").click(function() { //改变选择颜色
            var selectit = $(this).attr("selectit");
            var selectId=$(this).attr("id");
            console.log("selectit:" +selectId );

            if("false" == selectit) {
                $(this).attr("selectit", "true");
                $(this).css("background-color", "#00FFFF");
                idList.push(selectId);

            } else {
                $(this).attr("selectit", "false");
                $(this).css("background-color", "");
                idList.remove(selectId);

            }
    });

    //move the checked items
    document.getElementById("confirm_offertips").onclick = function() {
        $.each(idList,function(n,value){
            document.getElementById(value).style.display = "none";
        });
    }
						//for(var i = 0; i < title.length; i++) {
						//	if(title[i].checked == true) {
//								selectTitle = title[i].value;
//								console.log(selectTitle);
//								break;
//							}
//						}
     $('#helper_title').on('change',function() {
            var selectedValue=$(this).children('option:selected').val();
            if ( selectedValue == 'Sport') {
                document.getElementById("sport_list").style.display = "block";
                document.getElementById("music_list").style.display = "none";
                document.getElementById("food_list").style.display = "none";
                document.getElementById("skill_list").style.display = "none";
            }
            if (selectedValue == 'Music') {
                document.getElementById("sport_list").style.display = "none";
                document.getElementById("music_list").style.display = "block";
                document.getElementById("food_list").style.display = "none";
                document.getElementById("skill_list").style.display = "none";
            }
            if (selectedValue == 'Food') {
                document.getElementById("sport_list").style.display = "none";
                document.getElementById("music_list").style.display = "none";
                document.getElementById("food_list").style.display = "block";
                document.getElementById("skill_list").style.display = "none";
            }
            if (selectedValue == 'Skill') {
                document.getElementById("sport_list").style.display = "none";
                document.getElementById("music_list").style.display = "none";
                document.getElementById("food_list").style.display = "none";
                document.getElementById("skill_list").style.display = "block";
            }
        });

    
    
})
