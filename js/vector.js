$(document).ready(function () {
  $('.loader').fadeOut(1000);

  var s = Snap("#svg-div");
  var cpu, wireL, wireR, wireU, wireD1, wireD2,
  l1,l2,l3,l4,l5;
  Snap.load("res/cover.svg", function (f) {
    s.append(f);

    wireL = s.select('#grad-left_1_');
    wireR = s.select('#grad-right_1_');
    wireU = s.select('#grad-up_1_');
    wireD1 = s.select('#grad-down-1_1_');
    wireD2 = s.select('#grad-down-2_1_');

    var wLc = 600;
    var wireLeftAnimate = function () {
      if (wLc === -600)
        wLc=600;
      wLc-=10;
      wireL.attr({transform: 't'+ wLc +',0'});
      wireL.animate({opacity: 1}, 1, wireLeftAnimate);
    };
    wireLeftAnimate();

    var wRc = -600;
    var wireRightAnimate = function () {
      if (wRc === 600)
        wRc=-600;
      wRc+=10;
      wireR.attr({transform: 't'+ wRc +',0'});
      wireR.animate({opacity: 1}, 1, wireRightAnimate);
    };
    wireRightAnimate();

    var wUc = 600;
    var wireUpAnimate = function () {
      if (wUc === -800)
        wUc=600;
      wUc-=10;
      wireU.attr({transform: 'r90 t'+ wUc +','+ -800});
      wireU.animate({opacity: 1}, 1, wireUpAnimate);
    };
    wireUpAnimate();

    var wDc = -600;
    var wireDownAnimate = function () {
      if (wDc === 800)
        wDc=-600;
      wDc+=10;
      wireD1.attr({transform: 'r90 t'+ wDc +','+ -800});
      wireD2.attr({transform: 'r90 t'+ wDc +','+ -800});
      wireD1.animate({opacity: 1}, 1, wireDownAnimate);
    };
    wireDownAnimate();

    l1 = s.select('#light1');
    l2 = s.select('#light2');
    l3 = s.select('#light3');
    l4 = s.select('#light4');
    l5 = s.select('#light5');

    var lightAnimate1 = function () {
      l1.attr({opacity: 0.2});
      l1.animate({opacity: 1}, 1500, mina.elastic,lightAnimate1);
    };
    lightAnimate1();
    var lightAnimate2 = function () {
      l2.attr({opacity: 0.2});
      l2.animate({opacity: 1}, 1200, mina.elastic,lightAnimate2);
    };
    lightAnimate2();
    var lightAnimate3 = function () {
      l3.attr({opacity: 0.2});
      l3.animate({opacity: 1}, 1100, mina.elastic,lightAnimate3);
    };
    lightAnimate3();
    var lightAnimate4 = function () {
      l4.attr({opacity: 0.2});
      l4.animate({opacity: 1}, 1400, mina.elastic,lightAnimate4);
    };
    lightAnimate4();
    var lightAnimate5 = function () {
      l5.attr({opacity: 0.2});
      l5.animate({opacity: 1}, 1900, mina.elastic,lightAnimate5);
    };
    lightAnimate5();

    $('#LCDText').html("");
    var typed = new Typed('#LCDText', {
      strings: ["JAN 23rd-25th", "AT I.E.M. KOLKATA"],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 2000,
      loop: true

    });
  });

  var typed6 = new Typed('#console', {
    strings: [
      'sudo pip install <b>iem-innovación</b>',
      'the biggest <b>tech fest</b> in kolkata',
      'with more than <b>10k footfall</b>',
      'exiciting prizes to be won',
      'exciting workshops on <b>robotics, IoT, etc.</b>'
    ],
    typeSpeed: 30,
    backSpeed: 0,
    backDelay: 2000,
    startDelay: 2000,
    loop: true
  });
});