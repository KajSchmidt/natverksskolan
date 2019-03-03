$(function () {
  $('[data-toggle="tooltip"]').tooltip();
	$('.rmenu-item').mouseover(function(){
		$('i',this).tooltip('show');
	});
	$('.rmenu-item').mouseout(function(){
		$('i',this).tooltip('hide');
	});
});


(function(){

	var button_left = document.getElementById('rm-button-left'),
    wrapper_left = document.getElementById('rm-wrapper-left'),
		button_right = document.getElementById('rm-button-right'),
	  wrapper_right = document.getElementById('rm-wrapper-right'),
    overlay = document.getElementById('rm-overlay');

	//open and close menu when the button is clicked
	var left_open = false;
	var right_open = false;
	button_left.addEventListener('click', lhandler, false);
	wrapper_left.addEventListener('click', cnhandle, false);
	button_right.addEventListener('click', rhandler, false);
	wrapper_right.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function lhandler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  if(!left_open){
				left_open= true;
	    	openNav(wrapper_left);
	  	}
	 	else{
	    	closeNav();
	  	}
	}

	function rhandler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  if(!right_open){
				right_open = true;
	    	openNav(wrapper_right);
	  	}
	 	else{
	    	closeNav();
	  	}
	}


	function openNav(target){
	    classie.add(overlay, 'on-overlay');
	    classie.add(target, 'opened-nav');
	}

	function closeNav(){
		left_open = false;
		right_open = false;
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper_left, 'opened-nav');
		classie.remove(wrapper_right, 'opened-nav');
	}
	document.addEventListener('click', closeNav);

})();
