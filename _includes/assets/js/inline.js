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

$(document).ready(function () {
  /*
  $(".btn-nav").click(openNav)
  $(".overlay").click(closeNav)
  $(".mobile-sidenav a").click(closeNav)
  const rootElement = document.documentElement;
   */
});


function toggleNav() {
  if ($(".mobile-nav").css('width') !== "0px") {
    $(".mobile-nav").css('width', '0');
  } else {
    $(".mobile-nav").css('width', '250px');
  }
}