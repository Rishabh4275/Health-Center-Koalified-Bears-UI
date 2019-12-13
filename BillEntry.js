if(window.sessionStorage.accessToken!=='undefined'){
var button=document.getElementById('generate-bill');

button.onclick = function() {
	var Amount = document.getElementById('Amount').value;
	var patient = document.getElementById('patient-down');
	var patient_id = patient.options[patient.selectedIndex].value;
	var Email = document.getElementById('Email').value;
	console.log(patient_id);

  
  	var finUrl="http://localhost:8080/bill/add"     	
      var jsonData={};

        	jsonData["bAmt"]=Amount;
			jsonData["email"]=Email;

        	var today=new Date();
        	jsonData["bDate"]=today;
        	console.log(jsonData);
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Bill Generated");
					alert("Bill Generated");
				}
			}
  }
}