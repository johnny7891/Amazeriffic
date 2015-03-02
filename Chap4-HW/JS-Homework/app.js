var main = function () {
	"use strict";
	var num;
	var array=[101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115];

	var fizzbuzz_1 = function () {
		for (num=1; num <=100; num=num+1){
			if ((num%3 === 0) && (num%5 === 0)) {
				$(".answers1").append("<p>FizzBuzz</p>");
			} else if (num%3 === 0) {
				$(".answers1").append("<p>Fizz</p>");
			} else if (num%5 === 0) {
				$(".answers1").append("<p>Buzz</p>");
			} else {
				$(".answers1").append("<p>"+num+"</p>");
			}
		}
	};

	var fizzbuzz_2 = function (start, end) {
		for (num=start; num <= end; num++) {
			if ((num%3 === 0) && (num%5 === 0)) {
                                $(".answers2").append("<p>FizzBuzz</p>");
                        } else if (num%3 === 0) {
                                $(".answers2").append("<p>Fizz</p>");
                        } else if (num%5 === 0) {
                                $(".answers2").append("<p>Buzz</p>");
                        } else {
                                $(".answers2").append("<p>"+num+"</p>");
                        }

		}	
	};
	
	var fizzbuzz_3 = function (array) {
		for (num=0; num < array.length; num++){
			  if ((array[num]%3 === 0) && (array[num]%5 === 0)) {
                                $(".answers3").append("<p>FizzBuzz</p>");
                        } else if (array[num]%3 === 0) {
                                $(".answers3").append("<p>Fizz</p>");
                        } else if (array[num]%5 === 0) {
                                $(".answers3").append("<p>Buzz</p>");
                        } else {
                                $(".answers3").append("<p>"+array[num]+"</p>");
                        }
	
		}
	};

	var fizzbuzz_4 = function (obj) {
		for (num=1; num <=100; num=num+1){
                        if ((num%3 === 0) && (num%5 === 0)) {
                                $(".answers4").append("<p>"+obj.divisibleByThree+""+obj.divisibleByFive+"</p>");
                        } else if (num%3 === 0) {
                                $(".answers4").append("<p>"+obj.divisibleByThree+"</p>");
                        } else if (num%5 === 0) {
                                $(".answers4").append("<p>"+obj.divisibleByFive+"</p>");
                        } else {
                                $(".answers4").append("<p>"+num+"</p>");
                        }
                }

	};

	var fizzbuzz_5 = function (arr, obj) {
		for (num=0; num < array.length; num++){
                          if ((arr[num]%3 === 0) && (arr[num]%5 === 0)) {
                                $(".answers5").append("<p>"+obj.divisibleByThree+""+obj.divisibleByFive+"</p>");
                        } else if (arr[num]%3 === 0) {
                                $(".answers5").append("<p>"+obj.divisibleByThree+"</p>");
                        } else if (arr[num]%5 === 0) {
                                $(".answers5").append("<p>"+obj.divisibleByFive+"</p>");
                        } else {
                                $(".answers5").append("<p>"+arr[num]+"</p>");
                        }
		}
	};

	fizzbuzz_1();
	fizzbuzz_2(200,300);
	fizzbuzz_3(array);
	fizzbuzz_4({divisibleByThree: "foo", divisibleByFive: "bar"});
	fizzbuzz_5(array, {divisibleByThree: "foo", divisibleByFive: "bar"});
	
};

$(document).ready(main);
