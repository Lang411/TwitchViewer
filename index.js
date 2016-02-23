$(document).ready(function() {
console.log('you loaded the page and JQuery Loaded');
	$("#allButton").click(function (){
		console.log('you clicked the All streamers button');
		//var a = $("input[name=searchString]").val();
		//console.log('This is your search string: '+a);
		$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
			console.log(data);
		});
	});
	$('#onlineButton').click(function (){
		console.log('you clicked the Online button');
		//var a = $("input[name=searchString]").val();
		//console.log('This is your search string: '+a);
		$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
			console.log(data);
		});
	});
	$('#offlineButton').click(function (){
		console.log('you clicked the Offline button');
		//var a = $("input[name=searchString]").val();
		//console.log('This is your search string: '+a);
		$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
			console.log(data);
		});
	});
});
