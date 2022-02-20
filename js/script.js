// テスト用
// $(".en-copy").css("color","red");

jQuery(function ($) {
    //変数宣言
    var win = $(window),
        // first viewの高さ取得
        fvHeight = $(".fv").height(),
        scr = 0;

    //スクロール時
    win.on("scroll load resize", function () {
        scr = win.scrollTop();
        //値のテスト用
        console.log(fvHeight);
        //fv通過時
        if (scr > fvHeight) {
            $(".header").addClass("header--bg-change");
        } else {
            $(".header").removeClass("header--bg-change");
        }
    })

    //ハンバーガーボタン押下
    $(".menu-icon").on("click", function () {
        $("body").toggleClass("noscroll");
        $(".bg-cover").toggleClass("bg-cover--open");
        $(".header-nav").toggleClass("header-nav--open");
        $(".menu-icon").toggleClass("menu-icon--open");
    })

});
