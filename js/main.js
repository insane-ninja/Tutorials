var totalCase = 0;
var totalCured = 0;
var totalDeceased = 0;

function onLoad() {
	
	// var dataJ;
	// var myUrl = 'http://www.geoplugin.net/json.gp?ip=216.58.209.68';
	// var myUrl = 'https://ghoapi.azureedge.net/api';
	var myUrl = 'http://indiacoviddata.herokuapp.com/states';
	
	var proxy = 'https://cors-anywhere.herokuapp.com/';
	
	var finalURL = proxy + myUrl;
	
	// With the get JSON (frequently used) method
	$.get(finalURL, function( data ) {
	    postAction(data);
	    // dataJ = JSON.stringify(data);
	});
	// console.log(dataJ);
	// With the get method
	// $.get(finalURL, function( data ) {
	    // console.log(data);
	// });
	
	// With the post method
	// $.post(finalURL, function( data ) {
	    // console.log(data);
	// });



		// $.getJSON('https://ghoapi.azureedge.net/api', function(data) {
        
  //       // var text = `Date: ${data.date}<br>
  //       //             Time: ${data.time}<br>
  //       //             Unix time: ${data.milliseconds_since_epoch}`
                    
  //       	console.log(data);
  //       	// $("#main").html(text);
  //  	 	});

   	 	// setTimeout(onLoad,1000);

	// var requestURL = "http://indiacoviddata.herokuapp.com/states";
	// var request = new XMLHttpRequest();
	// request.open('GET',requestURL);
	// // request.responseType = '';
	// request.send();
	// request.onload = function(){
	// 	const data = request.response;
	// 	console.log(data);
	// 	console.log("Hello");
	// }

}

function postAction(data) {
	var states = [	'andaman and nicobar islands','andhra pradesh',
					'arunachal pradesh','assam','bihar','chandigarh',
					'chhattisgarh','delhi','goa','gujarat','haryana',
					'himachal pradesh','jammu and kashmir','jharkhand',
					'karnataka','kerala','ladakh','madhya pradesh',
					'maharashtra','manipur','mizoram','odisha',
					'puducherry','punjab','rajasthan','tamil nadu',
					'telengana','tripura','uttar pradesh','uttarakhand',
					'west bengal'
				];

	
	console.log(data);

	for (var i = 0; i < states.length; i++) {
		totalCase = totalCase + parseInt(data[states[i]]['total']);
		// console.log(totalCases,i);
	}

	for (var i = 0; i < states.length; i++) {
		totalCured = totalCured + parseInt(data[states[i]]['cured']);
		// console.log(totalCases,i);
	}

	for (var i = 0; i < states.length; i++) {
		totalDeceased = totalDeceased + parseInt(data[states[i]]['deceased']);
		// console.log(totalCases,i);
	}

	update();
	// console.log("In 2 :",Object.keys(data['assam']).length);
	
}
function update(){
	
	var one = document.createElement("h3")
	var two = document.createElement("h3")
	var three = document.createElement("h3")

	one.innerHTML= "Total Cases: "+totalCase;
	document.body.appendChild(one);

	two.innerHTML= "Cured: "+totalCured;
	document.body.appendChild(two);
	
	three.innerHTML= "Deceased: "+totalDeceased;
	document.body.appendChild(three);
	
	console.log("done");


	// console.log(tc,totalCase,td,totalDeceased,cc,totalCured);
}