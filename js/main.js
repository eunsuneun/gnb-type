$(document).ready(function () {
  if ($(".gnb02").length >= 1) {
    gnbType02();
  }
  if ($(".gnb03").length >= 1) {
    gnbType03();
  }
  if ($(".gnb04").length >= 1) {
    gnbType04();
  }
  if ($(".snb02").length >= 1) {
    snbType02();
  }
  if ($(".snb03").length >= 1) {
    snbType03();
  }
  if ($(".snb04").length >= 1) {
    snbType04();
  }
  if ($(".tab01").length >= 1) {
    tabType01();
  }
  if ($(".tab02").length >= 1) {
    tabType02();
  }
  if ($(".tab03").length >= 1) {
    tabType03();
  }
  if ($(".tab04").length >= 1) {
    tabType04();
  }
  if ($(".mobile03").length >= 1) {
    mobileType03();
  }
  if ($(".mobile04").length >= 1) {
    mobileType04();
  }
  if ($(".respon01").length >= 1) {
    responsiveType01();
  }
  if ($(".respon02").length >= 1) {
    responsiveType02();
  }
  if ($(".respon03").length >= 1) {
    responsiveType03();
  }
});

// 하위 메뉴가 세로형인 GNB - gnb02
function gnbType02() {
  $(".depth1").on("mouseover focusin", function () {
    $(this).addClass("on");
  });
  $(".depth1").on("mouseleave focusout", function () {
    $(this).removeClass("on");
  });
}

// 하위 메뉴가 가로형인 GNB - gnb03
function gnbType03() {
  $(".gnb > ul > li").on("mouseover focusin", function () {
    $(this).children(".depth2-wrap").addClass("on");
    $(this).find(".depth2").addClass("on");
  });
  $(".gnb > ul > li").on("mouseleave focusout", function () {
    $(this).children(".depth2-wrap").removeClass("on");
    $(this).find(".depth2").removeClass("on");
  });
  //gnb-bg
  $(".gnb > ul").on("mouseover focusin", function () {
    $(".gnb-bg").stop().fadeIn(200);
  });
  $(".gnb > ul").on("mouseleave focusout", function () {
    $(".gnb-bg").stop().fadeOut(200);
  });
}

// 하위 메뉴가 일체형인 GNB - gnb04
function gnbType04() {
  var depth1 = $(".depth1 > li");
  var gnbBg = $(".gnb-bg");
  depth1.on("mouseover focusin", function () {
    gnbBg.addClass("on");
    depth1.addClass("on");
  });
  depth1.on("mouseleave focusout", function () {
    gnbBg.removeClass("on");
    depth1.removeClass("on");
  });
}

// 하위 메뉴가 아래로 펼쳐지는 사이드 배치형 SNB - snb02
function snbType02() {
  var more = $(".snb ul").prev("a");
  more.addClass("more");
  more.on("click", function () {
    $(this).parent().toggleClass("on");
    if ($(this).parent().hasClass("on")) {
      $(this).removeClass("on");
      $(this).parent().siblings().removeClass("on");
      $(this).parent().siblings().children("ul").slideUp(200);
      $(this).next("ul").slideDown(200);
    } else {
      $(this).addClass("on");
      $(this).next("ul").slideUp(200);
      $();
    }
  });
}

// 열림 닫힘 굳이 안해도 됨. 화면 낭독기에서 닫기,열기 알려줌
function checkDropOption(e) {
  var $e = $(e);
  clearTimeout(timer);
  var timer = setTimeout(function () {
    $e.find($("span.blind")).remove();
    $e.each(function () {
      if ($(this).hasClass("open")) {
        $(this).append('<span class="blind">열림</span>');
      } else {
        $(this).append('<span class="blind">닫힘</span>');
      }
    });
  }, 500);
}

// 하위 메뉴가 옆으로 펼쳐지는 사이드 배치형 SNB - snb03
function snbType03() {
  var depth1 = $(".snb > ul > li");
  depth1.on("mouseover focusin", function () {
    var y = $(this).offset().top - 11;
    $(this).siblings("li").removeClass("on");
    $(this).addClass("on");
    $(this).find(".depth2-wrap > ul").css("top", y);
  });
  depth1.on("mouseleave focusout", function () {
    $(this).removeClass("on");
  });
}

// 브레드크럼형 SNB - snb04
function snbType04() {
  var depth1 = $(".location").find("nav > ul > li > button");
  depth1.on("click", function () {
    $(this).toggleClass("on");
    $(this).next("ul").stop().slideToggle(200);
    $(this).parent().siblings("li").children("button").removeClass("on");
    $(this).parent().siblings("li").children("ul").slideUp(200);
  });
}

// 탭 메뉴형 TAB - tab01
function tabType01() {
  var tabLst = $(".tab-lst li");
  tabLst.on("click", function () {
    var idx = $(this).index();
    var tabCont = $(".tab-cont").find("li").eq(idx);
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
    tabCont.siblings().removeClass("on");
    tabCont.addClass("on");
  });
}

// 아래 테두리가 있는 TAB - tab02
function tabType02() {
  var tabLi = $(".tab-lst .itm button");
  tabLi.on("click", function () {
    var idx = $(this).parent().index();
    var tabCont = $(".tab-conts").children("li").eq(idx);
    $(this).parent().addClass("on").siblings().removeClass("on");
    tabCont.siblings().removeClass("on");
    tabCont.addClass("on");
  });
}

// 텝스로 구성된 TAB - tab03
function tabType03() {
  var tabButton = $(".tab-lst >li > button");
  tabButton.on("click", function () {
    var idx = $(this).parent().index();
    $(this).parent("li").addClass("on").siblings("li").removeClass("on");
    if ($(this).parent().parent().hasClass("depth1")) {
      //depth1를 클릭했을 때
      var depth1Cont = $(".tab-conts").children(".depth1-cont").eq(idx);
      depth1Cont.addClass("on").siblings().removeClass("on");
    } else {
      //depth2를 클릭했을 때
      var parentIdx = $(this).parent().parent().parent("li").index();
      var depth2Cont = $(".tab-conts").children(".depth1-cont").eq(parentIdx).children(".depth2-cont").eq(idx);
      depth2Cont.addClass("on").siblings().removeClass("on");
    }
  });
}

// 두 줄 이상인 탭 메뉴
function tabType04() {
  $(".tab-lst nav ul li button").on("click", function () {
    var idx = $(this).parent().index();
    $(this).parent().addClass("on").siblings().removeClass("on");
    $(".tab-cont").eq(idx).addClass("on").siblings().removeClass("on");
  });
}

// 햄버거형 모바일 메뉴
function mobileType03() {
  $(".hamburger").on("click", function () {
    $(".lnb, .dim").fadeIn();
    $(".lnb .top a:first").focus();
  });
  $(".dim, .alram").on("click focus", function () {
    $(".lnb, .dim").fadeOut();
  });
  $(".lnb .menu li:last a").on("blur", function () {
    $(".lnb, .dim").fadeOut();
    $(".hamburger").focus();
  });
}

// 슬라이더형 메뉴
function mobileType04() {
  var swiper = new Swiper(".md-recom", {
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
  });
}

// GNB의 디자인이 바뀌는 반응형 메뉴
const responsiveType01 = function () {
  let selec = $(".header .gnb a, .header .gnb button");
  function addAttrs() {
    selec.attr({
      "aria-hidden": "true",
      tabindex: "-1",
    });
  }
  function removeAttrs() {
    selec.removeAttr("aria-hidden").removeAttr("tabindex");
  }
  $(window).on("resize load", function () {
    var width = $(window).width();
    if (width < 992) {
      //태블릿 이하에서
      addAttrs();
    } else {
      removeAttrs();
      $(".dim").fadeOut(100);
      $(".header .gnb").removeClass("on");
    }
  });

  $(".btn-allmenu").on("click", function () {
    var width = $(window).width();
    if (width < 992) {
      removeAttrs();
      $(".header .gnb").addClass("on");
      $(".dim").fadeIn(200);
      $(".header .gnb a:first").focus();
    }
  });

  $(".dim, .btn-close").on("click", function () {
    $(".header .gnb").removeClass("on");
    $(".dim").fadeOut(100);
    addAttrs();
  });
};

const responsiveType02 = () => {
  const $langBtn = $(".header .util .lang button");
  const $search = $(".header .search");
  const $searchBtn = $(".header .util .btn-search button");
  const $searchInput = $(".header .search input");
  //언어 토글
  $langBtn.on("click", function () {
    $(this).next("ul").stop().slideToggle(100);
  });
  //검색버튼 눌렀을 때 토글
  $searchBtn.on("click", function () {
    $search.toggleClass("on");
    $searchInput.focus();
  });
  //태블릿 사이즈로 리사이즈했을 때 검색창 사라지게
  $(window).on("resize load", function () {
    const $width = $(window).width();
    if ($width < 992) {
      $search.removeClass("on");
    }
  });
  //검색창 사라지고, 포커스회기 함수
  function searchFocusOut() {
    $searchBtn.focus();
    $search.removeClass("on");
  }
  //검색창 input에서 shifTab 누르면 검색창 사라지게
  $searchInput.on("keydown", function (e) {
    var keyCode = e.keyCode;
    if (keyCode == 9 && e.shiftKey) {
      searchFocusOut();
    }
  });
  //검색창 button에서 tab키 누르면 검색창 사라지게
  $search.find("button").on("keydown", function (e) {
    var keyCode = e.keyCode;
    if (keyCode == 9) {
      searchFocusOut();
    }
  });
};

function responsiveType03() {
  const $allmenuBtn = $(".header .btn-allmenu");
  const $lnb = $(".header .lnb");
  const $lnbCloseBtn = $(".header .lnb .btn-close");

  //모바일 lnb 열기 함수
  function mobileShow() {
    $lnb.addClass("on");
    $lnb.animate({ right: 0 }, 400);
  }
  //모바일 lnb 닫기 함수
  function mobileHide() {
    $lnb.animate({ right: "-100%" }, 400);
    setTimeout(function () {
      $lnb.removeClass("on");
    }, 400);
  }
  // pc, 모바일 lnb 열기 이벤트
  $allmenuBtn.on("click", function () {
    var $width = $(window).width();
    if ($width < 993) {
      mobileShow();
    } else {
      $lnb.slideDown(200);
    }
  });
  // pc, 모바일 lnb 닫기 이벤트
  $lnbCloseBtn.on("click", function () {
    var $width = $(window).width();
    if ($width < 993) {
      mobileHide();
      setTimeout(function () {
        $(".depth2").slideUp();
      }, 400);
    } else {
      $lnb.slideUp(200);
    }
  });
  // 모바일 depth2 토글 이벤트
  $(".header .lnb .depth1 li a").on("click", function () {
    var $width = $(window).width();
    if ($width < 993) {
      $(this).next(".depth2").slideToggle();
      $(this).parent("li").toggleClass("on");
      $(this).parent("li").siblings().removeClass("on");
      $(this).parent("li").siblings().children(".depth2").slideUp();
      return false;
    }
  });
  //리사이즈 초기화
  $(window).on("resize load", function () {
    var $width = $(window).width();
    if ($width < 993) {
      // mobileHide();
      $lnb.removeAttr("style");
      $(".depth2").slideUp();
      $(".depth1 li").removeClass("on");
    } else {
      $lnb.removeAttr("style");
      $lnb.removeClass("on");
      $(".depth1 li").removeClass("on");
      $(".depth1 li ul").removeAttr("style");
    }
  });
}
