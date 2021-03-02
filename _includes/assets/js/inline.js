if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  setTimeout(
    function() 
    {
      fader.classList.add('fade-out');
    }, 500);
}

function updateElementPadding() {
  const getElement = document.querySelector('main');
  const getMobileHeader = document.getElementById('mobileNav');
  if (getElement && getMobileHeader && getMobileHeader.offsetHeight !== 0) {
    getElement.style.paddingTop = '30px';
  }
}

$(document).ready(function () {
  updateElementPadding();
  $(window).resize(updateElementPadding());
});


function toggleNav() {
  if ($(".mobile-nav").css('width') !== "0px") {
    $(".mobile-nav").css('width', '0');
  } else {
    $(".mobile-nav").css('width', '250px');
  }
}

function menuHideall() {
  var i = 0;
  for (i = 0; i < 10; i++) {
    var menuElement = $(`#menu_${i}`);
    var navElement = $(`#nav_${i}`);
    if (!menuElement.hasClass('hidden'))
      menuElement.addClass('hidden');

    if (!navElement.hasClass('not-active')) {
      navElement.addClass('not-active');
    }

    if (navElement.hasClass('active')) {
      navElement.removeClass('active');
    }
  }
}

function showMenu(id) {
  menuHideall();

  var menuElement = $(`#menu_${id}`);
  var navElement = $(`#nav_${id}`);
  if (menuElement.hasClass('hidden'))
    menuElement.removeClass('hidden');

  if (navElement.hasClass('not-active')) {
    navElement.removeClass('not-active');
    navElement.addClass('active');
  }
}