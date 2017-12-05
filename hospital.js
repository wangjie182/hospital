
    var tabLinkArr = document.getElementsByName("tablink");
    var tabPicArr = document.getElementById("tabpic").getElementsByTagName("img");
    var oshow = document.getElementById('show');
    var otapic = document.getElementById('tapic');
    var ofootright = document.getElementById('foot-right');
    var zhongxiyaoping = document.getElementById('zhongxiyaoping');
    var custsev = document.getElementById("custsev");
    var wxsev = document.getElementById("wxsev");
    var navshop = document.getElementById("navshop");
    var prowindow = document.getElementById("prowindow");
    var showpreview = document.getElementById("show-preview");
    var hidepreview = document.getElementById("hide-preview");
    //轮播效果
    function div_tab(tabName) {
        for (var i = 0; i < tabLinkArr.length; i++) {
            if (i == tabName) {
                tabLinkArr[i].style.color = "#ff0000";
                tabPicArr[i].style.display = "block";
            } else {
                tabLinkArr[i].style.color = "#0000ff";
                tabPicArr[i].style.display = "none";
            }
        }
    }
    var i = 0;
    function auto_tab_div() {
        //如果切换到最后一张图片则从下一张开始
        if (i > 2) {
            i = 0;
        }
        //每秒自动获取下一张照片
        div_tab(i);
        i++;
    }
    setInterval("auto_tab_div()", 3000);
    window.onload = function () {
    //左边导航栏效果
    zhongxiyaoping.onmouseover = function () {
        oshow.style.display = "block";
        otapic.style.display = "none";
        ofootright.style.display = "none";
        zhongxiyaoping.style.background = "rgb(5, 121, 105)";
    }
    zhongxiyaoping.onmouseout = function () {

        oshow.style.display = "none";
        otapic.style.display = "block";
        ofootright.style.display = "block";
        zhongxiyaoping.style.background = "rgb(84, 218, 211)";
    }

    //右侧导航栏效果
    custsev.onmouseover = function () {
        wxsev.style.display = "block";
    }
    custsev.onmouseout = function () {
        wxsev.style.display = "none";
    }
    navshop.onmouseover = function () {
        prowindow.style.display = "block";
    }
    navshop.onmouseout = function () {
        prowindow.style.display = "none";
    }
    // 底部手机预览效果
    showpreview.onmouseover = function () {

        hidepreview.style.display = "block";
    }
    showpreview.onmouseout = function () {

        hidepreview.style.display = "none";

    }

}