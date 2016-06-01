$(document).ready(function(){
		//console.log

		var verbs = ['snowboarding', 'surfing', 'mountain climbing', 'eating pizza'];
		
		for( i = 0; i < verbs.length; i++) {

   		console.log("I always knew I'd be great at " + verbs[i] + "."); 	

   		$("p").append("<p>" + verbs[i])
   	}



});