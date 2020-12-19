const updateButton = () =>{
    if ($(window).scrollTop() >= 300) {
        // 300以上スクロールされたらボタンの表示
        $(".back-to-top").fadeIn();
    } else{
        // 300以上スクロールされていないならボタンの非表示
        $(".back-to-top").fadeOut();
    }
};

// スクロール時に下記の関数を呼び出す
$(window).on("scroll", updateButton);

// ボタンを押されたときの処理
$(".back-to-top").on("click", (e) =>{
    // ページ遷移をさせない
    e.preventDefault();

    // トップに戻る
    $("html, body").animate({scrollTop: 0}, 600)
});

// スクロールではなく、リロードされたときに表示するため
updateButton();


// スクロールする関数
const scrollTointro = (id) => {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    const elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop;
};

// IDの取得
const $element2 = $("h2");
const $navigator = $(".each-nav");
for (let i = 0; i <= $element2.length; i++){
    $($navigator[i]).on("click", () =>{
        const getId = $($element2[i]).attr("id");
        console.log();
        scrollTointro(getId);
    })
}