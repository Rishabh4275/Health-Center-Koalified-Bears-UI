if(window.sessionStorage.accessToken!=='undefined'){
var button=document.getElementById('patient-submit');

button.onclick = function() {
/*	var id = document.getElementById('patient_id').value;
*/	var firstName = document.getElementById('first_name').value;
	var lastName= document.getElementById('last_name').value;
	var email = document.getElementById('patient_email').value;
	var address = document.getElementById('address').value;
	var mobile = document.getElementById('mobile').value;
	var age = document.getElementById('age').value;
	var sex = document.getElementById('sex').value;
  
  	var finUrl="http://localhost:8080/patients/add"     	
      var jsonData={};
        	/*jsonData["patientId"]=id;*/
        	jsonData["firstName"]=firstName;
			jsonData["lastName"]=lastName;
        	jsonData["email"]=email;
			jsonData["address"]=address;
        	jsonData["mobile"]=mobile;
        	jsonData["age"]=age;
        	jsonData["sex"]=sex;
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Patient Registered");
					alert("Patient Registered");
				}
			}
  }
}