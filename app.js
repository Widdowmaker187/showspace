var app = angular.module('showSpace', []);

app.controller('BandsCtrl',[
	'$scope',
	function($scope){
		$scope.bands = [
			{
				"name": "Abhor",
				"genres": ["Progressive Metal"],
				"city": "Rochester",
				"contact":{
					"email": "cbusseata@gmail.com"
				},
				"availability": "Open"
			},
			{
				"name": "Age of Shadows",
				"genres": ["Power Metal", "Symphonic Metal"],
				"city": "Rochester",
				"contact": {
					"facebook": "https://www.facebook.com/ageofshadowsband"
				},
				"availability": "Weekends"	
			},
			{
				"name": "ALBERTO ALASKA",
				"genres": ["Alternative", "Post-Rock"],
				"city": "Rochester",
				"contact": {
					"email": "albertoalaskamusic@gmail.com", 
					"facebook": "https://www.facebook.com/albertoalaskamusic"
				},
				"availability": "ANY"		
			},
			{
				"name": "Almost Jazz",
			 	"genres": ["Jazz"],
			 	"city": "Rochester",
			 	"contact": {
				 	"email": "almostjazzpartyband@gmail.com",
					"facebook": "https://www.facebook.com/AlmostJazzPartyBand",
					"reverbnation": "https://www.reverbnation.com/AlmostJazzPartyBand"
				},
				"availability": "Ask"
			},
			{
				"name": "Alyssa Trahan (solo or trio)",
				"genres": ["Country"],
				"city": ["Rochester", "Canandaigua"], 
				"contact": {
					"email": "AlyssaTrahan@gmail.com",
					"website": "https://www.AlyssaTrahan.com",
					"facebook": "https://www.facebook.com/AlyssaTrahanOfficial",
					"youtube": "https://www.youtube.com/alyssatrahan"
				},
				"availability": "Ask"
			}
		];
	}
]);