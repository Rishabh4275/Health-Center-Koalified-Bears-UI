var button=document.getElementById('inst-update');
button.onclick = function() {
var inst = document.getElementById('inst-down');
var instrument_id = inst.options[inst.selectedIndex].value;
var name = inst.options[inst.selectedIndex].text;
console.log(instrument_id);

var count = document.getElementById('i_count').value;
//var price = document.getElementById('i_price').value;
  
  	var finUrl="http://localhost:8080/instruments/"+instrument_id;   	
      var jsonData={};     	
        	jsonData["instrument_name"]=name;
        	jsonData["i_count"]=count;
			//jsonData["price"]=price;
        	var xhr = new XMLHttpRequest();
			xhr.open("PUT",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Item Updated");
					alert("Item Updated");
				}
			}
  }
