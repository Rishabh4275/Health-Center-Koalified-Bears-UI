if(window.sessionStorage.accessToken!=='undefined'){
const app = document.getElementById('patient-hist-list')
var html = ""

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/patienthistory/all', true)
request.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<tr><td>'+result.case_id+'</td><td>'+result.patient_id+'</td><td>'+result.diagnose_code+'</td><td>'+result.insurance_id+'</td><td>'+result.date_of_admission+'</td><td>'+result.doctor_id+'</td></tr>'
	app.innerHTML += html
})
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Error..!`
    app.appendChild(errorMessage)
  }
}
request.send()
}

/*if(window.sessionStorage.accessToken!=='undefined'){
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
			xhr.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
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
}*/