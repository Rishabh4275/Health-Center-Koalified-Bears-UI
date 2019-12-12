var button=document.getElementById('medicine-update');
button.onclick = function() {
var medicine = document.getElementById('medicine-down');
var medicine_id = medicine.options[medicine.selectedIndex].value;
var name = medicine.options[medicine.selectedIndex].text;
console.log(medicine_id);

var count = document.getElementById('m1_count').value;
//var price = document.getElementById('m1_price').value;
  
  	var finUrl="http://localhost:8080/medicines/"+medicine_id;   	
      var jsonData={};     	
        	jsonData["medicine_name"]=name;
        	jsonData["m_count"]=count;
	//		jsonData["m_price"]=price;
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
