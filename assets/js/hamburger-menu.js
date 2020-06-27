(function($) {

	$(document).ready(function(){
	  $('.menu-link').on('click', function() {
		toggleNavigation($(this), $('.nav-pane'));
		changeLetters($(this));
	  });
  
	  function toggleNavigation(btn, nav) {
		btn.toggleClass('open');
		nav.toggleClass('open');
	  }
  
	  function changeLetters(btn) {
		var m = $('.menu-link span.m');
		var e = $('.menu-link span.e');
		var n = $('.menu-link span.n');
		var u = $('.menu-link span.u');
  
		e.toggleClass('btn-close');
  
		if(btn.hasClass('open'))
		{
		  m.text("E");
		  n.text("I");
		  u.text("T");
		}
		else
		{
		  m.text("M");
		  n.text("N");
		  u.text("U");
		}
	  }
	});
  
  })(jQuery);