var gameBox = [];
var userBox = [];
var boxes = ["red", "blue", "green", "yellow"];
var level = 1;
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomBox = boxes[randomNumber];
  gameBox.push(randomBox);
  $("#" + randomBox)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("sounds/" + randomBox + ".mp3");
  audio.play();
}
$(document).keypress(function (event) {
  $("body").removeClass("game-over");
  level = 1;
  $("h1").text("LEVEL" + level);
  nextSequence();
});
function animateBox() {
  var clickedBox = $("#" + userBox[userBox.length - 1]);
  clickedBox.addClass("pressed");
  setTimeout(function () {
    clickedBox.removeClass("pressed");
  }, 100);
}
$("div[type=button]").click(function () {
  var clickedBox = this.id;
  userBox.push(clickedBox);
  animateBox();
  if (gameBox[gameBox.length - 1] == userBox[userBox.length - 1]) {
    level++;
    $("h1").text("LEVEL" + level);
    nextSequence();
  } else {
    $("body").addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game Over Press A to Reatrat");
  }
});
