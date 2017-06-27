
// jQuery


//wyszukiwarka

var url = 'https://restcountries.eu/rest/v2/name/',
	countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = 'Poland'; 
	}
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
	resp.forEach(function(item) {
		 $('<h3>').text(item.name).appendTo(countriesList);
   		 $('<li>').text('nazwa kraju w języku ojczystym: ' + item.nativeName).appendTo(countriesList);
		 $('<li>').text('stolica: ' + item.capital).appendTo(countriesList);
		 $('<li>').text('region: ' + item.region).appendTo(countriesList);
		 $('<li>').text('waluta: ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')').appendTo(countriesList);
		 $('<li>').text('język: ' + item.languages[0].name).appendTo(countriesList);
		 $('<li>').text('powierzchnia: ' +  item.area +  ' km 2').appendTo(countriesList);
		 var borders = item.borders;
		 var caBorders = borders.join(', ');
		 if (!caBorders.length) {
			 $('<li>').text('kraje graniczące: brak').appendTo(countriesList);
			 }
			 else{
			 $('<li>').text('kraje graniczące: ' + caBorders).appendTo(countriesList);
			 }
			 
			 
		/*var alpha3Code = item.alpha3Code;
   		var alpha3CodeLow = alpha3Code.toLowerCase();
   		console.log(alpha3CodeLow);
   		var flagLink = "https://restcountries.eu/data/" + alpha3CodeLow + ".svg";
   		var img = $('<img>').attr('src', flagLink).attr('widht', 90).attr('height', 60);
   		
   		$('<li>').text('flag:').appendTo('countriesList');
   		$('<li>').appendTo('countriesList').append(img);*/
		
		
	});
}

//POWIĘKSZANIE ZDJĘCIA

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}		
	});
});