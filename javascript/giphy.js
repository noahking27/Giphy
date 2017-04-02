
var animals = ["dog", "cat", "bird", "alligator", "possum", "lion", "dolphin", "owl", "penguin", "bear", "fish"];
var button = ''
var searches = []

var g = document.getElementById('animalclick');
for(var i = 0; i < animals.length; i++){
button += "<button class=\"animalclick\">" +animals[i] + "</button>";
searches.push(i);
	$("#buttonsHere").html(button);
};

// $("#buttonsHere").click(function(){

// });


/*$(#animalclick).html();*/
$("#buttonsHere").click(function(animalclick){
	/*var testing = $(event.target).text();*/
	/*$("#submitButton").on("click", function() {*/
    var imageUrl = ''
	var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + $(event.target).text() + "&limit=9&api_key=dc6zaTOxFJmzC";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response){

		

		for(var i = 0; i < response.data.length; i++){

			imageUrlStill = response.data[i].images.downsized_still.url;
			ImageAnimate = response.data[i].images.original.url;
			var gifImage = $("<img class=\"gifs\">");

		gifImage.attr("src", imageUrl)

		$("#gifHere").prepend(gifImage)
		}

		// imageUrl = response.data["0"].images.downsized_still.url;


		var gifImage = $("<img class=\"gifs\">");

		gifImage.attr("src", imageUrlStill )
		gifImage.attr("data-still", imageUrlStill)
        gifImage.attr("data-animate", ImageAnimate)
        gifImage.attr("data-state", "still")

     

		$("#gifHere").prepend(gifImage)

// 		$("#gifHere").click(function(){
//     $(this).src('clicked', true)
 
// });

		// if($('#gifHere').data('clicked')) {
  //   alert('yes');
//}

	});



// }); 
});




