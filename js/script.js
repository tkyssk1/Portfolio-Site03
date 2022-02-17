// テスト用
// $(".en-copy").css("color","red");

jQuery(function ($) {
    //変数宣言
    var win = $(window),
        fv = $(".fv");
    fvHeight = fv.height();
    scr = 0;

    //スクロール時
    win.on("scroll load resize", function () {
        scr = win.scrollTop();
        //値のテスト用
        console.log(fv.height());

        //fv通過時
        if (scr > fvHeight) {
            //サイドバーを開いたまま横幅を変えたときの対処
            if(!$(".side-bar").hasClass("open")){
                $(".header-logo").addClass("black");
                $(".header-menu").addClass("black");    
            }
        } else {
            $(".header-menu").removeClass("black");
            $(".header-logo").removeClass("black");
        }
    })

    //ハンバーガーボタン押下時
    //fv通過時
    $(".header-menu").on("click", function () {
        $("body").toggleClass("noscroll");
        $(".bg-cover").fadeToggle(300);
        $(".burger-btn").toggleClass("close");
        $(".side-bar").toggleClass("open");
        //menuが黒くなっている時
        if (scr > fvHeight) {
            $(this).toggleClass("black");
        }
    })

});
