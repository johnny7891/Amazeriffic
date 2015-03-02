var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

   var photos = ["images/screen1.png",
		 "images/screen2.png",
		 "images/screen3.png",
		 "images/screen4.png"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
            } else if ($element.parent().is(":nth-child(4)")) {
		$(".content").append($("<p>"));
		$(".content p:nth-child(1)").text("click on link to start slide show");
		$(".content").append($("<p>"));
		$(".content p:nth-child(2)").append($('<a class="photos" href="images/screen1.png">').text("photos1"));
		$(".content").append($("<p>"));
		$(".content p:nth-child(3)").append($('<a class="photos" href="images/screen2.png">').text("photos2"));
		$(".content").append($("<p>"));
		$(".content p:nth-child(4)").append($('<a class="photos" href="images/screen3.png">').text("photos3"));
		$(".content").append($("<p>"));
		$(".content p:nth-child(5)").append($('<a class="photos" href="images/screen4.png">').text("photos4"));
	   
		
		$(".content .photos").colorbox({rel:'photos', slideshow:true});	
	    }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
