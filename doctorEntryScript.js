if(window.sessionStorage.accessToken!=='undefined'){
	var button=document.getElementById('doctor-submit');

button.onclick = function() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('doctor_email').value;
	var address = document.getElementById('address').value;
	var mobile = document.getElementById('mobile').value;
	var specialization = document.getElementById('specialization').value;
  
  	var finUrl="http://localhost:8080/doctors/add"     	
      var jsonData={};
        	jsonData["name"]=name;
        	jsonData["email"]=email;
			jsonData["address"]=address;
        	jsonData["mobile"]=mobile;
        	jsonData["specialization"]=specialization;
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Doctor Registered");
					alert("Doctor Registered");
				}
			}
  }
}