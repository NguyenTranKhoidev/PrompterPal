$(document).ready(function () {
  // console.log(1, $(".header").offset().top);
  var headerTop = $(".header .header__middle-flex").offset().top;
  var poisitionIndex = 0;
  let positionBar = $(window).scrollTop();

  $(window).scroll(function () {
    //header scroll page home
    if ($(this).scrollTop() > headerTop) {
      $(".header .header__middle-flex").addClass("sticky_header");
    } else {
      $(".header .header__middle-flex").removeClass("sticky_header");
    }

    if ($(this).scrollTop() > poisitionIndex) {
      $(".layout__sticky-icon").removeClass("show-mb");
    } else {
      $(".layout__sticky-icon").addClass("show-mb");
    }

    $(".section__navi-author .block").each(function (index) {
      var topScroll = $(this).offset().top;
      var position = $(this).get(0).getBoundingClientRect();
      var height = $(this).height();
      var isFrist = $(this).hasClass("frist-block") ? $(this).height() / 2 : 100;
      var isLast = $(this).hasClass("last-block");
      if (position.top < isFrist) {
        $(this).addClass("active");
        if (isLast) {
          if ((position.bottom - position.height / 3) < 0) {
            $(this).addClass("last");
            $('div.section__quick-setup').css({ opacity: 1 })
          } else {
            if ($(this).hasClass('last')) {
              $(this).removeClass("last")
              $('div.section__quick-setup').css({ opacity: 0 })
            }
          }
        }
        var totalH = window.innerHeight + position.height;
        var topABS = Math.abs(position.top);
        if (topABS > totalH) {
          $(this).removeClass("active");
        }
      } else {
        $(this).removeClass("active");
      }
    });

    if (
      $(this.window).height() + $(this).scrollTop() <
      $("body").height() - 150
    ) {
      poisitionIndex = $(this).scrollTop();
    }
  });

  $(".header .nav-bar .icon-bar").click(function (e) {
    e.preventDefault();

    if ($("body").hasClass("open-menu")) {
      $("body").removeClass("open-menu");
    } else {
      $("body").addClass("open-menu");
    }
  });

  $(".header__middle-menu .nav-bar .icon-close").click(function (e) {
    e.preventDefault();
    $("body").removeClass("open-menu");
  });

  // Hàm chuyển tab tự động
  function autoSwitchTab() {
    var activeTab = $('.item-tab-content.active');
    var nextTab = activeTab.next('.item-tab-content');
    if (nextTab.length === 0) {
      // Nếu không có tab tiếp theo, chuyển về tab đầu tiên
      nextTab = $('.item-tab-content:first');
    }

    // Trigger sự kiện click cho tab tiếp theo
    nextTab.click();
  }

  // Thiết lập auto play với khoảng thời gian là 3000 miliseconds (3 seconds)
  var autoplayInterval = setInterval(autoSwitchTab, 30000);

  // Xử lý sự kiện click cho các tab
  $('.section__outstan .list-tab-content .item-tab-content').click(function () {
    // Dừng auto play khi người dùng click vào tab
    clearInterval(autoplayInterval);

    var tabId = $(this).data('tab');

    // Ẩn tất cả các tab nội dung
    $('.item-tab-content').removeClass('active');
    $('.tab-images .item-images').removeClass('active');

    // Hiển thị tab nội dung được click
    $(this).addClass('active');

    // Hiển thị ảnh tương ứng
    $('.tab-images .item-images[data-tab="' + tabId + '"]').addClass('active');

    // Bắt đầu lại auto play sau khi click xong
    autoplayInterval = setInterval(autoSwitchTab, 30000);
  });
});

document.fonts.ready.then(function () {
  var swiper = new Swiper(".home-sw", {
      slidesPerView: "auto",
  });

})