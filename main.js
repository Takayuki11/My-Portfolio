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
const scrollToElement = (id) => {
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
        scrollToElement(getId);
    });
}

const showskills = (id) => {
    $(".front-end").removeClass("d-flex");
    $(".back-end").removeClass("d-flex");
    $(".others").removeClass("d-flex");

    $("#" + id).toggleClass("d-flex");
};


const $options = $(".nav-skill");
const $skills = $(".each-skill");
console.log($skills);
for (let i = 0; i <= $options.length; i++){
    $($options[i]).on("click", () =>{
        const id = $($skills[i]).attr("id");
        showskills(id);
    });
}

showskills("front");