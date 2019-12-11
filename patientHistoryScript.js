var button=document.getElementById('hist-submit');

button.onclick = function() {
	var patientId = document.getElementById('patient-down').value;
	var doctorId = document.getElementById('doctor-down').value;
	var diagnosis = document.getElementById('diag').value;
	var insurance = document.getElementById('insurance').value;
	console.log(insurance);
  
  	var finUrl="http://localhost:8080/patienthistory/add"     	
      var jsonData={};
      var doctor={};
      var patient={};
      doctor["doctor_id"]=doctorId;
      patient["patientId"]=patientId;
        	jsonData["doctor"]=doctor;
        	jsonData["patient"]=patient;
			jsonData["date_of_admission"]=new Date();
        	jsonData["diagnose_code"]=diagnosis;
        	jsonData["insurance_id"]=insurance;
        	console.log(jsonData)
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Patient Diagnosis Added");
					alert("Patient Diagnosis Added");
				}
			}
  }