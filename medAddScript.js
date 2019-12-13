if(window.sessionStorage.accessToken!=='undefined'){
var button=document.getElementById('medicine-submit');

button.onclick = function() {
	var name = document.getElementById('m_name').value;
	var count = document.getElementById('m_count').value;
	var price = document.getElementById('m_price').value;
  
  	var finUrl="http://localhost:8080/medicines/add";     	
      var jsonData={};
      		jsonData["m_count"]=count;
      		jsonData["m_price"]=price;
        	jsonData["medicine_name"]=name;
        	var xhr = new XMLHttpRequest();
			xhr.open("POST",finUrl,true);
			xhr.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(JSON.stringify(jsonData));
			xhr.onreadystatechange = processRequest;
			function processRequest(e) {
				if (xhr.readyState == 4) {
					console.log("New Item(s) Added");
					alert("Item(s) Added");
				}
			}
  }
}