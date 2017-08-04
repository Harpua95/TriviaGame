//set functions
//create finctions
//call functions

var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;


$(document).ready(function(){
	//start game
	$("#mid_game_container").hide();
	$("#end_container").hide();

	
	window.scrollTo(0, 500);

	$("#start_button").on("click", function(){

		
		$("#start_container").hide();
		$("#mid_game_container").show();

		startCountdown();
		return;
	});

	//timer countdown
	function countdown(){

		count--;
		$('#timer_number').html(count + " Seconds");

    		// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			// Stop the countdown and run the timeUp function
			
			count = 0; 
			return;

			});


			// Finish the game 
			if(count == -1){

				timeUp();
				$("#mid_game_container").hide();

			}


	}


	// Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


		// CRadio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();



		// Determine the right/wrong/unanswered counts ( This count be a lot more DRY :/ )
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Chess"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Goose"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Demi-Moore"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Found-in-a-Cracker-Jack-box"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Gordie-Howe"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Irish"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "A Man with six fingers on his right hand"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Hercules"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "The-Dalai-Lama"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Chevy-Chase"){
			correctCount++;
		}
		else{
			wrongCount++;
		}




		// answer key
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score Div
		$("#end_container").show();


		//Scroll position
		window.scrollTo(0, 550);

	}

});
