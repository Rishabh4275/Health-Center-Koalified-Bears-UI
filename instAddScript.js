var button=document.getElementById('instrument-submit');

button.onclick = function() {
	var name = document.getElementById('i_name').value;
	var count = document.getElementById('i_count').value;
	var price = document.getElementById('i_price').value;
	var uses = document.getElementById('uses').value;
  
  	var finUrl="http://localhost:8080/instruments/add";     	
      var jsonData={};
      		jsonData["i_count"]=count;
      		jsonData["i_price"]=price;
        	jsonData["instrument_name"]=name;
        	jsonData["uses"]=uses;
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("New Instrument(s) Added");
					alert("Instrument(s) Added");
				}
			}
  }