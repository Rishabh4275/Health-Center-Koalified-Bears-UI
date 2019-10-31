var button=document.getElementById('appointment-submit');

button.onclick = function() {
	var name = document.getElementById('appointment_name').value;
	var dept = document.getElementById('appointment_department');
	var deptId = dept.options[dept.selectedIndex].value;
	var email = document.getElementById('appointment_email').value;
	var mobile = document.getElementById('phone').value;
	var time = document.getElementById('appointment_time').value;
	var dt = document.getElementById('appointment_date').value;
	var date=Date.parse(dt);
	console.log(date)
  
  	var finUrl="http://localhost:8080/appointment/add"     	
      var jsonData={};
        	jsonData["name"]=name;
        	jsonData["deptId"]=deptId;
        	jsonData["email"]=email;
        	jsonData["mobile"]=mobile;
        	var today=new Date();
        	jsonData["time"]=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        	jsonData["date"]=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        	console.log(jsonData);
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("Appointment Made");
					alert("Appointment booked");
				}
			}
			
 
  }
  