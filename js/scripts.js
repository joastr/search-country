
const url = 'https://restcountries.eu/rest/v2/name/';

var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);
document.getElementById('country-name').addEventListener('keypress', function(e) {
	console.log(e);
	if(e.code === 'Enter') {	
		searchCountries();
	}
});

function searchCountries(){
	var countryName = document.getElementById('country-name').value;
	if(!countryName.length) {
		countryName = 'Poland';
	}
	fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
		.then(showCountriesList)

		.catch(function(error) {
			countriesList.innerHTML = null;  
			var status = document.createElement('li');
			status.innerHTML="Status: 404 Nie znaleziono - proszę wpisz nazwę innego kraju.";
			countriesList.appendChild(status);
		});
}

function showCountriesList(resp) {
	countriesList.innerHTML = '';
	resp.forEach(function(item){
		
		var headline = document.createElement('h3');
		headline.innerText = item.name;
		countriesList.appendChild(headline);

		var countryData1 = document.createElement('li');
		countryData1.innerText = 'nazwa kraju w języku ojczystym: ' + item.nativeName;
		countriesList.appendChild(countryData1);

		var countryData2 = document.createElement('li');
		countryData2.innerText = 'stolica: ' + item.capital;
		countriesList.appendChild(countryData2);

		var countryData3 = document.createElement('li');
		countryData3.innerText = 'region: ' + item.region;
		countriesList.appendChild(countryData3);

		var countryData4 = document.createElement('li');
		countryData4.innerText = 'waluta: ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')';
		countriesList.appendChild(countryData4);

		var countryData5 = document.createElement('li');
		countryData5.innerText = 'język: ' + item.languages[0].name;
		countriesList.appendChild(countryData5);

		var countryData6 = document.createElement('li');
		countryData6.innerHTML = 'powierzchnia:  '+  item.area +  ' km' +'&sup2';
		countriesList.appendChild(countryData6);

		const isoCountries = {
			'ABW':'Aruba',
			'AFG':'Afghanistan',
			'AGO':'Angola',
			'AIA':'Anguilla',
			'ALA':'Åland Islands',
			'ALB':'Albania',
			'AND':'Andorra',
			'ARE':'United Arab Emirates',
			'ARG':'Argentina',
			'ARM':'Armenia',
			'ASM':'American Samoa',
			'ATA':'Antarctica',
			'ATF':'French Southern Territories',
			'ATG':'Antigua and Barbuda',
			'AUS':'Australia',
			'AUT':'Austria',
			'AZE':'Azerbaijan',
			'BDI':'Burundi',
			'BEL':'Belgium',
			'BEN':'Benin',
			'BES':'Bonaire, Sint Eustatius and Saba',
			'BFA':'Burkina Faso',
			'BGD':'Bangladesh',
			'BGR':'Bulgaria',
			'BHR':'Bahrain',
			'BHS':'Bahamas',
			'BIH':'Bosnia and Herzegovina',
			'BLM':'Saint Barthélemy',
			'BLR':'Belarus',
			'BLZ':'Belize',
			'BMU':'Bermuda',
			'BOL':'Bolivia, Plurinational State of',
			'BRA':'Brazil',
			'BRB':'Barbados',
			'BRN':'Brunei Darussalam',
			'BTN':'Bhutan',
			'BVT':'Bouvet Island',
			'BWA':'Botswana',
			'CAF':'Central African Republic',
			'CAN':'Canada',
			'CCK':'Cocos (Keeling) Islands',
			'CHE':'Switzerland',
			'CHL':'Chile',
			'CHN':'China',
			'CIV':'Côte d\'Ivoire',
			'CMR':'Cameroon',
			'COD':'Congo, the Democratic Republic of the',
			'COG':'Congo',
			'COK':'Cook Islands',
			'COL':'Colombia',
			'COM':'Comoros',
			'CPV':'Cape Verde',
			'CRI':'Costa Rica',
			'CUB':'Cuba',
			'CUW':'Curaçao',
			'CXR':'Christmas Island',
			'CYM':'Cayman Islands',
			'CYP':'Cyprus',
			'CZE':'Czech Republic',
			'DEU':'Germany',
			'DJI':'Djibouti',
			'DMA':'Dominica',
			'DNK':'Denmark',
			'DOM':'Dominican Republic',
			'DZA':'Algeria',
			'ECU':'Ecuador',
			'EGY':'Egypt',
			'ERI':'Eritrea',
			'ESH':'Western Sahara',
			'ESP':'Spain',
			'EST':'Estonia',
			'ETH':'Ethiopia',
			'FIN':'Finland',
			'FJI':'Fiji',
			'FLK':'Falkland Islands (Malvinas)',
			'FRA':'France',
			'FRO':'Faroe Islands',
			'FSM':'Micronesia, Federated States of',
			'GAB':'Gabon',
			'GBR':'United Kingdom',
			'GEO':'Georgia',
			'GGY':'Guernsey',
			'GHA':'Ghana',
			'GIB':'Gibraltar',
			'GIN':'Guinea',
			'GLP':'Guadeloupe',
			'GMB':'Gambia',
			'GNB':'Guinea-Bissau',
			'GNQ':'Equatorial Guinea',
			'GRC':'Greece',
			'GRD':'Grenada',
			'GRL':'Greenland',
			'GTM':'Guatemala',
			'GUF':'French Guiana',
			'GUM':'Guam',
			'GUY':'Guyana',
			'HKG':'Hong Kong',
			'HMD':'Heard Island and McDonald Islands',
			'HND':'Honduras',
			'HRV':'Croatia',
			'HTI':'Haiti',
			'HUN':'Hungary',
			'IDN':'Indonesia',
			'IMN':'Isle of Man',
			'IND':'India',
			'IOT':'British Indian Ocean Territory',
			'IRL':'Ireland',
			'IRN':'Iran, Islamic Republic of',
			'IRQ':'Iraq',
			'ISL':'Iceland',
			'ISR':'Israel',
			'ITA':'Italy',
			'JAM':'Jamaica',
			'JEY':'Jersey',
			'JOR':'Jordan',
			'JPN':'Japan',
			'KAZ':'Kazakhstan',
			'KEN':'Kenya',
			'KGZ':'Kyrgyzstan',
			'KHM':'Cambodia',
			'KIR':'Kiribati',
			'KNA':'Saint Kitts and Nevis',
			'KOR':'Korea, Republic of',
			'KWT':'Kuwait',
			'LAO':'Lao People\'s Democratic Republic',
			'LBN':'Lebanon',
			'LBR':'Liberia',
			'LBY':'Libya',
			'LCA':'Saint Lucia',
			'LIE':'Liechtenstein',
			'LKA':'Sri Lanka',
			'LSO':'Lesotho',
			'LTU':'Lithuania',
			'LUX':'Luxembourg',
			'LVA':'Latvia',
			'MAC':'Macao',
			'MAF':'Saint Martin (French part)',
			'MAR':'Morocco',
			'MCO':'Monaco',
			'MDA':'Moldova, Republic of',
			'MDG':'Madagascar',
			'MDV':'Maldives',
			'MEX':'Mexico',
			'MHL':'Marshall Islands',
			'MKD':'Macedonia, the former Yugoslav Republic of',
			'MLI':'Mali',
			'MLT':'Malta',
			'MMR':'Myanmar',
			'MNE':'Montenegro',
			'MNG':'Mongolia',
			'MNP':'Northern Mariana Islands',
			'MOZ':'Mozambique',
			'MRT':'Mauritania',
			'MSR':'Montserrat',
			'MTQ':'Martinique',
			'MUS':'Mauritius',
			'MWI':'Malawi',
			'MYS':'Malaysia',
			'MYT':'Mayotte',
			'NAM':'Namibia',
			'NCL':'New Caledonia',
			'NER':'Niger',
			'NFK':'Norfolk Island',
			'NGA':'Nigeria',
			'NIC':'Nicaragua',
			'NIU':'Niue',
			'NLD':'Netherlands',
			'NOR':'Norway',
			'NPL':'Nepal',
			'NRU':'Nauru',
			'NZL':'New Zealand',
			'OMN':'Oman',
			'PAK':'Pakistan',
			'PAN':'Panama',
			'PCN':'Pitcairn',
			'PER':'Peru',
			'PHL':'Philippines',
			'PLW':'Palau',
			'PNG':'Papua New Guinea',
			'POL':'Poland',
			'PRI':'Puerto Rico',
			'PRK':'Korea, Democratic People\'s Republic of',
			'PRT':'Portugal',
			'PRY':'Paraguay',
			'PSE':'Palestinian Territory, Occupied',
			'PYF':'French Polynesia',
			'QAT':'Qatar',
			'REU':'Réunion',
			'ROU':'Romania',
			'RUS':'Russian Federation',
			'RWA':'Rwanda',
			'SAU':'Saudi Arabia',
			'SDN':'Sudan',
			'SEN':'Senegal',
			'SGP':'Singapore',
			'SGS':'South Georgia and the South Sandwich Islands',
			'SHN':'Saint Helena, Ascension and Tristan da Cunha',
			'SJM':'Svalbard and Jan Mayen',
			'SLB':'Solomon Islands',
			'SLE':'Sierra Leone',
			'SLV':'El Salvador',
			'SMR':'San Marino',
			'SOM':'Somalia',
			'SPM':'Saint Pierre and Miquelon',
			'SRB':'Serbia',
			'SSD':'South Sudan',
			'STP':'Sao Tome and Principe',
			'SUR':'Suriname',
			'SVK':'Slovakia',
			'SVN':'Slovenia',
			'SWE':'Sweden',
			'SWZ':'Swaziland',
			'SXM':'Sint Maarten (Dutch part)',
			'SYC':'Seychelles',
			'SYR':'Syrian Arab Republic',
			'TCA':'Turks and Caicos Islands',
			'TCD':'Chad',
			'TGO':'Togo',
			'THA':'Thailand',
			'TJK':'Tajikistan',
			'TKL':'Tokelau',
			'TKM':'Turkmenistan',
			'TLS':'Timor-Leste',
			'TON':'Tonga',
			'TTO':'Trinidad and Tobago',
			'TUN':'Tunisia',
			'TUR':'Turkey',
			'TUV':'Tuvalu',
			'TWN':'Taiwan, Province of China',
			'TZA':'Tanzania, United Republic of',
			'UGA':'Uganda',
			'UKR':'Ukraine',
			'UMI':'United States Minor Outlying Islands',
			'URY':'Uruguay',
			'USA':'United States',
			'UZB':'Uzbekistan',
			'VAT':'Holy See (Vatican City State)',
			'VCT':'Saint Vincent and the Grenadines',
			'VEN':'Venezuela, Bolivarian Republic of',
			'VGB':'Virgin Islands, British',
			'VIR':'Virgin Islands, U.S.',
			'VNM':'Viet Nam',
			'VUT':'Vanuatu',
			'WLF':'Wallis and Futuna',
			'WSM':'Samoa',
			'YEM':'Yemen',
			'ZAF':'South Africa',
			'ZMB':'Zambia',
			'ZWE':'Zimbabwe'
			};
			
			const borders = item.borders.reduce((result, item) => {
				if (isoCountries.hasOwnProperty(item))
					result.push(isoCountries[item]);

				return result;
			}, []).join(', ');
				
		
		var countryData7 = document.createElement('li');
		 if (!borders.length) {
			
			countryData7.innerText = 'kraje graniczące: brak';
			countriesList.appendChild(liElement6);
			 }
			 else{
			 countryData7.innerText = 'kraje graniczące: ' + borders;
			 countriesList.appendChild(countryData7);	 
			 
			 }

		
	});
  }




/* jQuery-----------------------------------------------



	countriesList = $('#countries');


$('#search').click(searchCountries);


$('#country-name').keypress(function(e) {
	if(e.which ==13) {
		searchCountries();
	}
	
	
});


function searchCountries() {
 	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = 'Poland'; 
	}
	

    $.ajax({
        url: url + countryName,
        method: 'GET',
		success: showCountriesList,
		error: function (request, status, error) {
			countriesList.empty();  
        	$('<li>').html("Status: 404 Nie znaleziono - proszę wpisz nazwę innego kraju.").appendTo(countriesList);
		}
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
		 $('<li>').html('powierzchnia:  '+  item.area +  ' km' +'&sup2').appendTo(countriesList);
		 
		 
		 const isoCountries = {
			'ABW':'Aruba',
			'AFG':'Afghanistan',
			'AGO':'Angola',
			'AIA':'Anguilla',
			'ALA':'Åland Islands',
			'ALB':'Albania',
			'AND':'Andorra',
			'ARE':'United Arab Emirates',
			'ARG':'Argentina',
			'ARM':'Armenia',
			'ASM':'American Samoa',
			'ATA':'Antarctica',
			'ATF':'French Southern Territories',
			'ATG':'Antigua and Barbuda',
			'AUS':'Australia',
			'AUT':'Austria',
			'AZE':'Azerbaijan',
			'BDI':'Burundi',
			'BEL':'Belgium',
			'BEN':'Benin',
			'BES':'Bonaire, Sint Eustatius and Saba',
			'BFA':'Burkina Faso',
			'BGD':'Bangladesh',
			'BGR':'Bulgaria',
			'BHR':'Bahrain',
			'BHS':'Bahamas',
			'BIH':'Bosnia and Herzegovina',
			'BLM':'Saint Barthélemy',
			'BLR':'Belarus',
			'BLZ':'Belize',
			'BMU':'Bermuda',
			'BOL':'Bolivia, Plurinational State of',
			'BRA':'Brazil',
			'BRB':'Barbados',
			'BRN':'Brunei Darussalam',
			'BTN':'Bhutan',
			'BVT':'Bouvet Island',
			'BWA':'Botswana',
			'CAF':'Central African Republic',
			'CAN':'Canada',
			'CCK':'Cocos (Keeling) Islands',
			'CHE':'Switzerland',
			'CHL':'Chile',
			'CHN':'China',
			'CIV':'Côte d\'Ivoire',
			'CMR':'Cameroon',
			'COD':'Congo, the Democratic Republic of the',
			'COG':'Congo',
			'COK':'Cook Islands',
			'COL':'Colombia',
			'COM':'Comoros',
			'CPV':'Cape Verde',
			'CRI':'Costa Rica',
			'CUB':'Cuba',
			'CUW':'Curaçao',
			'CXR':'Christmas Island',
			'CYM':'Cayman Islands',
			'CYP':'Cyprus',
			'CZE':'Czech Republic',
			'DEU':'Germany',
			'DJI':'Djibouti',
			'DMA':'Dominica',
			'DNK':'Denmark',
			'DOM':'Dominican Republic',
			'DZA':'Algeria',
			'ECU':'Ecuador',
			'EGY':'Egypt',
			'ERI':'Eritrea',
			'ESH':'Western Sahara',
			'ESP':'Spain',
			'EST':'Estonia',
			'ETH':'Ethiopia',
			'FIN':'Finland',
			'FJI':'Fiji',
			'FLK':'Falkland Islands (Malvinas)',
			'FRA':'France',
			'FRO':'Faroe Islands',
			'FSM':'Micronesia, Federated States of',
			'GAB':'Gabon',
			'GBR':'United Kingdom',
			'GEO':'Georgia',
			'GGY':'Guernsey',
			'GHA':'Ghana',
			'GIB':'Gibraltar',
			'GIN':'Guinea',
			'GLP':'Guadeloupe',
			'GMB':'Gambia',
			'GNB':'Guinea-Bissau',
			'GNQ':'Equatorial Guinea',
			'GRC':'Greece',
			'GRD':'Grenada',
			'GRL':'Greenland',
			'GTM':'Guatemala',
			'GUF':'French Guiana',
			'GUM':'Guam',
			'GUY':'Guyana',
			'HKG':'Hong Kong',
			'HMD':'Heard Island and McDonald Islands',
			'HND':'Honduras',
			'HRV':'Croatia',
			'HTI':'Haiti',
			'HUN':'Hungary',
			'IDN':'Indonesia',
			'IMN':'Isle of Man',
			'IND':'India',
			'IOT':'British Indian Ocean Territory',
			'IRL':'Ireland',
			'IRN':'Iran, Islamic Republic of',
			'IRQ':'Iraq',
			'ISL':'Iceland',
			'ISR':'Israel',
			'ITA':'Italy',
			'JAM':'Jamaica',
			'JEY':'Jersey',
			'JOR':'Jordan',
			'JPN':'Japan',
			'KAZ':'Kazakhstan',
			'KEN':'Kenya',
			'KGZ':'Kyrgyzstan',
			'KHM':'Cambodia',
			'KIR':'Kiribati',
			'KNA':'Saint Kitts and Nevis',
			'KOR':'Korea, Republic of',
			'KWT':'Kuwait',
			'LAO':'Lao People\'s Democratic Republic',
			'LBN':'Lebanon',
			'LBR':'Liberia',
			'LBY':'Libya',
			'LCA':'Saint Lucia',
			'LIE':'Liechtenstein',
			'LKA':'Sri Lanka',
			'LSO':'Lesotho',
			'LTU':'Lithuania',
			'LUX':'Luxembourg',
			'LVA':'Latvia',
			'MAC':'Macao',
			'MAF':'Saint Martin (French part)',
			'MAR':'Morocco',
			'MCO':'Monaco',
			'MDA':'Moldova, Republic of',
			'MDG':'Madagascar',
			'MDV':'Maldives',
			'MEX':'Mexico',
			'MHL':'Marshall Islands',
			'MKD':'Macedonia, the former Yugoslav Republic of',
			'MLI':'Mali',
			'MLT':'Malta',
			'MMR':'Myanmar',
			'MNE':'Montenegro',
			'MNG':'Mongolia',
			'MNP':'Northern Mariana Islands',
			'MOZ':'Mozambique',
			'MRT':'Mauritania',
			'MSR':'Montserrat',
			'MTQ':'Martinique',
			'MUS':'Mauritius',
			'MWI':'Malawi',
			'MYS':'Malaysia',
			'MYT':'Mayotte',
			'NAM':'Namibia',
			'NCL':'New Caledonia',
			'NER':'Niger',
			'NFK':'Norfolk Island',
			'NGA':'Nigeria',
			'NIC':'Nicaragua',
			'NIU':'Niue',
			'NLD':'Netherlands',
			'NOR':'Norway',
			'NPL':'Nepal',
			'NRU':'Nauru',
			'NZL':'New Zealand',
			'OMN':'Oman',
			'PAK':'Pakistan',
			'PAN':'Panama',
			'PCN':'Pitcairn',
			'PER':'Peru',
			'PHL':'Philippines',
			'PLW':'Palau',
			'PNG':'Papua New Guinea',
			'POL':'Poland',
			'PRI':'Puerto Rico',
			'PRK':'Korea, Democratic People\'s Republic of',
			'PRT':'Portugal',
			'PRY':'Paraguay',
			'PSE':'Palestinian Territory, Occupied',
			'PYF':'French Polynesia',
			'QAT':'Qatar',
			'REU':'Réunion',
			'ROU':'Romania',
			'RUS':'Russian Federation',
			'RWA':'Rwanda',
			'SAU':'Saudi Arabia',
			'SDN':'Sudan',
			'SEN':'Senegal',
			'SGP':'Singapore',
			'SGS':'South Georgia and the South Sandwich Islands',
			'SHN':'Saint Helena, Ascension and Tristan da Cunha',
			'SJM':'Svalbard and Jan Mayen',
			'SLB':'Solomon Islands',
			'SLE':'Sierra Leone',
			'SLV':'El Salvador',
			'SMR':'San Marino',
			'SOM':'Somalia',
			'SPM':'Saint Pierre and Miquelon',
			'SRB':'Serbia',
			'SSD':'South Sudan',
			'STP':'Sao Tome and Principe',
			'SUR':'Suriname',
			'SVK':'Slovakia',
			'SVN':'Slovenia',
			'SWE':'Sweden',
			'SWZ':'Swaziland',
			'SXM':'Sint Maarten (Dutch part)',
			'SYC':'Seychelles',
			'SYR':'Syrian Arab Republic',
			'TCA':'Turks and Caicos Islands',
			'TCD':'Chad',
			'TGO':'Togo',
			'THA':'Thailand',
			'TJK':'Tajikistan',
			'TKL':'Tokelau',
			'TKM':'Turkmenistan',
			'TLS':'Timor-Leste',
			'TON':'Tonga',
			'TTO':'Trinidad and Tobago',
			'TUN':'Tunisia',
			'TUR':'Turkey',
			'TUV':'Tuvalu',
			'TWN':'Taiwan, Province of China',
			'TZA':'Tanzania, United Republic of',
			'UGA':'Uganda',
			'UKR':'Ukraine',
			'UMI':'United States Minor Outlying Islands',
			'URY':'Uruguay',
			'USA':'United States',
			'UZB':'Uzbekistan',
			'VAT':'Holy See (Vatican City State)',
			'VCT':'Saint Vincent and the Grenadines',
			'VEN':'Venezuela, Bolivarian Republic of',
			'VGB':'Virgin Islands, British',
			'VIR':'Virgin Islands, U.S.',
			'VNM':'Viet Nam',
			'VUT':'Vanuatu',
			'WLF':'Wallis and Futuna',
			'WSM':'Samoa',
			'YEM':'Yemen',
			'ZAF':'South Africa',
			'ZMB':'Zambia',
			'ZWE':'Zimbabwe'
			};
			
			const borders = item.borders.reduce((result, item) => {
				if (isoCountries.hasOwnProperty(item))
					result.push(isoCountries[item]);

				return result;
			}, []).join(', ');
				
		

		 if (!borders.length) {
			 $('<li>').text('kraje graniczące: brak').appendTo(countriesList);
			 }
			 else{
			 $('<li>').text('kraje graniczące: ' + borders).appendTo(countriesList);
			 }
			 		
	});
}

--------------------------------------------------------*/





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