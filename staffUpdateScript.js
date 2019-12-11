var button=document.getElementById('staff-update');
button.onclick = function() {
var staff = document.getElementById('staff-down');
var eid = staff.options[staff.selectedIndex].value;
var name = staff.options[staff.selectedIndex].text;
console.log(eid);

	var type = document.getElementById('type').value;
	var address = document.getElementById('address').value;
	var dob = document.getElementById('dob').value;
  
  	var finUrl="http://localhost:8080/staff/"+eid     	
      var jsonData={};
/*        	jsonData["patientId"]=id;
*/        	
        	jsonData["name"]=name;
        	jsonData["type"]=type;
			jsonData["address"]=address;
        	jsonData["dob"]=dob;
        	var xhr = new XMLHttpRequest();
			xhr.open("PUT",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Staff Updated");
					alert("Staff Updated");
				}
			}
  }

