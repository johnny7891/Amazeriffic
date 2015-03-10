var main = function() {
	$.getJSON("http://twitcher.steer.me/user_timeline/csuf?key=3w47ztwf", function(data){
		for(i=0; i<data.length; i++){
			var $paragraph = $("<p>");
			$paragraph.text(data[i].text);
			$("body").append($paragraph);
			console.log(data[i].text);
		}
	});
};

$(document).ready(main);