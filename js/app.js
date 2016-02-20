$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function() {
  	  playHadouken();
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  	.animate(
    	{'left': '1020px'},
    	500,
    	function() {
      		$(this).hide();
      		$(this).css('left', '520px');
    	}); 
  	})
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });

    .keydown(function(){ // how do I know it's still referencing the ".ryu" class? i definately broke it after adding this
    	if(event.keyCode === 88){
    		playSaxMusic();
    		// alert("Hello!");
    	  $('.ryu-throwing').hide();
    	  $('.ryu-ready').hide();
    	  $('.ryu-cool').show();
    	}
    })

  
});


function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playSaxMusic(){
	$('#saxaphone-music')[0].volume = 0.5;
    $('#saxaphone-music')[0].load();
    $('#saxaphone-music')[0].play();


}






















