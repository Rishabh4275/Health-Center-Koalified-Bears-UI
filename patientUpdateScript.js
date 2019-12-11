var button=document.getElementById('patient-update');
button.onclick = function() {
var patient = document.getElementById('patient-down');
var patient_id = patient.options[patient.selectedIndex].value;
var patient_name = patient.options[patient.selectedIndex].text.split(" ");
console.log(patient_id);

	var email = document.getElementById('patient_email').value;
	var address = document.getElementById('address').value;
	var mobile = document.getElementById('mobile').value;
	var age = document.getElementById('age').value;
	var sex = document.getElementById('sex').value;
  
  	var finUrl="http://localhost:8080/patients/"+patient_id     	
      var jsonData={};
/*        	jsonData["patientId"]=id;
*/        	
        	jsonData["firstName"]=patient_name[0];
			jsonData["lastName"]=patient_name[1];
        	jsonData["email"]=email;
			jsonData["address"]=address;
        	jsonData["mobile"]=mobile;
        	jsonData["age"]=age;
        	jsonData["sex"]=sex;
        	var xhr = new XMLHttpRequest();
			xhr.open("PUT",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Patient Updated");
					alert("Patient Updated");
				}
			}
  }

