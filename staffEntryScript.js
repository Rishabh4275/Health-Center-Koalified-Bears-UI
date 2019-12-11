var button=document.getElementById('staff-submit');

button.onclick = function() {
	var name = document.getElementById('name').value;
	var type = document.getElementById('type').value;
	var address = document.getElementById('address').value;
	var dob = document.getElementById('dob').value;
  
  	var finUrl="http://localhost:8080/staff/add"     	
      var jsonData={};
        	jsonData["name"]=name;
        	jsonData["type"]=type;
			jsonData["address"]=address;
        	jsonData["dob"]=dob;
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Staff Registered");
					alert("Staff Registered");
				}
			}
  }