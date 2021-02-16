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

jQuery(document).ready(function($){

  if (sessionStorage.getItem('advertOnce') !== 'true') {
  //sessionStorage.setItem('advertOnce','true');
    $('.box').show();
    $( "html" ).addClass( "no-entry" );
    $('.overlay-verify').show();
  }else{
    $( "html" ).addClass( "entry" );
    $('.box').hide();
    $( ".overlay" ).toggleClass( "overlay-verify" );
    $('.overlay-verify').hide();
  }
   
  $('#refresh-page').on('click',function(){
  $('.box').hide();
  sessionStorage.setItem('advertOnce','true');
  setTimeout(
    function() 
    {
      location.reload();
    }, 300);
  });
    
  $('#reset-session').on('click',function(){
  $('.box').show();
  sessionStorage.setItem('advertOnce','');
  setTimeout(
    function() 
    {
      window.history.back();
    }, 300);
  });
   
  });