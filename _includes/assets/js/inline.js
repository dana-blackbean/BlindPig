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
  $('.faq-list-item').click(function () {
    $(this.lastChild).slideToggle(200)
  })
  $(".btn-nav").click(openNav)
  $(".overlay").click(closeNav)
  $(".mobile-sidenav a").click(closeNav)
  const rootElement = document.documentElement;

});


function openNav() {
  $(".overlay").css('width', "100vw");
  $(".mobile-sidenav").css('width', '250px');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $(".mobile-sidenav").css('width', '0');
  $(".overlay").css('width', "0");
}
