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
  var portPerc;
  if (port) {
    move = "-100%";
    portPerc = "50%";
    port = false;
  } else {
    move = "0%";
    portPerc = "100%";
    port = true;
  }
  $("#left").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#left").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#left").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#left").css("-o-transform", "translate(" + move + ", 0px)");
  $("#left").css("transform", "translate(" + move + ", 0px)");

  $("#right").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#right").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#right").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#right").css("-o-transform", "translate(" + move + ", 0px)");
  $("#right").css("transform", "translate(" + move + ", 0px)");

  $("#portfolio").css("left", portPerc);
}

function leftClick () {
  var move;
  var portPerc;
  if (abt) {
    move = "100%";
    portPerc = "50%";
    abt = false;
  } else {
    move = "0%";
    portPerc = "520%";
    abt = true;
  }
  $("#left").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#left").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#left").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#left").css("-o-transform", "translate(" + move + ", 0px)");
  $("#left").css("transform", "translate(" + move + ", 0px)");

  $("#right").css("-webkit-transform", "translate(" + move + ", 0px)");
  $("#right").css("-moz-transform:", "translate(" + move + ", 0px)");
  $("#right").css("-ms-transform", "translate(" + move + ", 0px)");
  $("#right").css("-o-transform", "translate(" + move + ", 0px)");
  $("#right").css("transform", "translate(" + move + ", 0px)");

  $("#about").css("right", portPerc);
}
