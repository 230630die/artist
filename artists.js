function Parallax() {
  scrollPos = $(this).scrollTop();
  $("main").css({
    "background-position": "80% " + -scrollPos / 4 + "px",
  });
  $("main h3").css({
    "margin-top": scrollPos / 4 + "px",
    opacity: 1 - scrollPos / 250,
  });
}
$(window).scroll(function () {
  Parallax();
});

$(window).on("scroll", () => {
  if (scrollY > 1) {
    $("main h3").css({ bottom: 0 });
  } else {
    $("main h3").css({ bottom: "6.375rem" });
  }
});
/* 
https://gahyun-web-diary.tistory.com/34
https://wit.nts-corp.com/2022/10/26/6595
*/
