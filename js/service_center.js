$(document).ready(function () {
    $(".service_center_btn").on("click", function () {
        let categoryText = $(this).text();
        $(".popupCategoryText").text(categoryText);
        $(".popup_background").css("display", "flex");
        $(".popup_background").css("display", "block");
        $(".popup_title_input").focus();

    })
    $(".Close").on("click", function () {
        $(".popup_background").css("display", "none");

        // 팝업창 내용 초기화
        $(".popup_title_input").val("");
        $(".popup_detail_input").val("");

    })
    $(".writeBtn").on("click", function () {
        $(".popup_background").css("display", "none");

        // 팝업창 내용 초기화
        $(".popup_title_input").val("");
        $(".popup_detail_input").val("");

    })

 
    



})//jquary end