var button=document.getElementById('doctor-update');
button.onclick = function() {
var doctor = document.getElementById('doctor-down');
var doctor_id = doctor.options[doctor.selectedIndex].value;
var name = doctor.options[doctor.selectedIndex].text;
console.log(doctor_id);

	var email = document.getElementById('email').value;
	var address = document.getElementById('address').value;
	var mobile = document.getElementById('mobile').value;
	var specialization = document.getElementById('specialization').value;
  
  	var finUrl="http://localhost:8080/doctors/"+doctor_id     	
      var jsonData={};
/*        	jsonData["patientId"]=id;
*/        	
        	jsonData["name"]=name;
        	jsonData["email"]=email;
			jsonData["address"]=address;
        	jsonData["mobile"]=mobile;
        	jsonData["specialization"]=specialization;
        	var xhr = new XMLHttpRequest();
			xhr.open("PUT",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Doctor Updated");
					alert("Doctor Updated");
				}
			}
  }

