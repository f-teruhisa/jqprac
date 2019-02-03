$(document).ready(function () {
  $("button:first").click(function () {
    $(".box").slideUp(1000);
  });
  $("button:last").click(function () {
    $(".box").slideDown(1000);
  })
});
