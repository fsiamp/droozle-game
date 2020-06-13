$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "xml/descriptions.xml",
		dataType: "xml",
		success: function(xml){
			var random = Math.floor(Math.random() * 20);
			var sText = $(xml).find('text').eq(random).text();
			var sOptionA = $(xml).find('optionA').eq(random).text();
			var sOptionB = $(xml).find('optionB').eq(random).text();
			$('#description').val(sText);
			$('#choiceA').html(sOptionA);
			$('#choiceB').html(sOptionB);
		},
		error: function() {
		alert("An error occurred while processing XML file.");
		}
	});
});

function reply_click(clicked_id) {
    $(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "xml/descriptions.xml",
		dataType: "xml",
		success: function(xml){
			   if ($(xml).find("correct").text().includes(clicked_id)) {
  
				 document.getElementById("score").value = parseInt(document.getElementById("score").value) + 2000;
			   }
			   else {
				 document.getElementById("score").value = parseInt(document.getElementById("score").value) - 1000;
			   }
			var random = Math.floor(Math.random() * 20);
			var sText = $(xml).find('text').eq(random).text();
			var sOptionA = $(xml).find('optionA').eq(random).text();
			var sOptionB = $(xml).find('optionB').eq(random).text();
			$('#description').val(sText);
			$('#choiceA').html(sOptionA);
			$('#choiceB').html(sOptionB);
		},
		error: function() {
		alert("An error occurred while processing XML file.");
            }
        });
    });
}