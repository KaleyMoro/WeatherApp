<!-- GETTING WEATHER DATA USING JAVASCRIPT -->
	
	/* var apiKey = "YOUR_API_KEY";
		$("#submit").on("click", function(event){
			event.preventDefault();
			var cityname = $("#cityName").val();
			getJson(cityname);
		
		});
		
		function getJson(cityname){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		var obj = JSON.parse(this.responseText);
		var weatherArr= obj.weather;
		var mainWeather = obj.main
		var description = weatherArr[0].description;
		console.log(description);
		console.log(weatherArr[0]);
		console.log(mainWeather);
		}
		};
		xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apiKey, true);
		xmlhttp.send();
		} */
		
		<!-- ---------------------------------------------------------------------- -->
		
		<!-- GETTING API RESPONSE USING .ajax -->
		
		var cityname;
		var lat;
		var lon;
		
		
		
		
		$("#submit").on("click", function(event){
		
		$("#result").empty();
		
		
		
		var apiKey = "YOUR_API_KEY";
		cityname = $("#cityName").val();
			event.preventDefault();
			$.ajax({url: "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apiKey,
				type: "GET",
				dataType: 'json', // added data type
				
				success: function(result){
			
					var coord = result.coord;
					lat = coord.lat; 
					lon = coord.lon; 
					showConsoleAfterClick(lat,lon);
					
					console.log(coord);
					var weatherArr = result.weather;
					var description = weatherArr[0].description;
					var mainWeather = result.main;
					var temp = mainWeather.temp
					var tempDegF = Math.round((temp - 273) * 100) / 100 + "°C";				
					$("#result").append("<p>The weather in "+cityname+" is " + description + "</p>" +
					"<p>and the current Temperature is " + tempDegF + "</p>");
					
					//console.log(tempDegF);
					$("#result").addClass("alert-success");
					$("#result").removeClass("alert-danger");
					$("#result").show(250);
				
				
				
				},
					
				/* error: function(err){
					var cod = err.cod;
					console.log(cod);
				} */
				
				error: function(XMLHttpRequest, textStatus, errorThrown){
					$("#result").append("<p>" + textStatus + " Type: " + errorThrown + "</p>");
					$("#result").removeClass("alert-success");
					$("#result").addClass("alert-danger");
					$("#result").show(250);
				
				}
			});
				
			
				
				
				
		});
	