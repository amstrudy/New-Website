var port = true;
var abt = true;

function hoverLeftOn () {
  $("#left").css("background", "rgba(0, 0, 0, .2)");
}

function hoverRightOn () {
  $("#right").css("background", "rgba(0, 0, 0, .2)");
}

function hoverLeftOff () {
  $("#left").css("background", "rgba(0, 0, 0, 0)");
}

function hoverRightOff () {
  $("#right").css("background", "rgba(0, 0, 0, 0)");
}

function rightClick () {
  var move;
  if (port) {
    move = "-100%";
    port = false;
  } else {
    move = "0%";
    port = true;
  }
  $("#left").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#left").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#left").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#left").css("-o-transform", "ttranslate(" + move + ", 0px)");
  $("#left").css("transform", "translate(" + move + ", 0px)");

  $("#right").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#right").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#right").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#right").css("-o-transform", "translate(" + move + ", 0px)");
  $("#right").css("transform", "translate(" + move + ", 0px)");
}

function leftClick () {
  console.log(abt);
  var move;
  if (abt) {
    move = "100%";
    abt = false;
  } else {
    move = "0%";
    abt = true;
  }
  $("#left").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#left").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#left").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#left").css("-o-transform", "ttranslate(" + move + ", 0px)");
  $("#left").css("transform", "translate(" + move + ", 0px)");

  $("#right").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#right").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#right").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#right").css("-o-transform", "translate(" + move + ", 0px)");
  $("#right").css("transform", "translate(" + move + ", 0px)");
}
