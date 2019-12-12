var button=document.getElementById('login-btn');
if(button!==null){
button.onclick = function() {
var url='http://localhost:8080/authenticate';
var username=document.getElementById("username").value;	
var password=document.getElementById("password").value;
var jsonData={};
jsonData["username"]=username;
jsonData["password"]=password;
console.log(jsonData);
var xhr = new XMLHttpRequest();
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify(jsonData));
			
xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4 && xhr.status==200) {
					var response=JSON.parse(xhr.responseText);
					console.log("token set");
					window.sessionStorage.accessToken=response.token;
				}
			}
			
	}
}