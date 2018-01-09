//set largest circle
$(document).ready(function() {
    AOS.init();
    var openMenu = 0;
    $('#menu-button').on('click', function() {
    	if (openMenu === 0) {
    		$('.nav-bar').css({
	    		"flex-direction": "column",
	    	});
			$('.nav-tab').css({
	    		"display": "block",
	    	});
	    	$('#menu-button').css({
	    		"width": "100%",
	    	});
	    	openMenu = 1;
    	}
    	else {
    		$('.nav-bar').css({
	    		"flex-direction": "row",
	    	});
			$('.nav-tab').css({
	    		"display": "none",
	    	});
	    	$('#menu-button').css({
	    		"display": "flex",
	    		"width": "40px"
	    	});
	    	openMenu = 0;
    	}
    	
    })
});
