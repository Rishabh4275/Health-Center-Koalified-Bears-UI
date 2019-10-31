var button=document.getElementById('appointment-submit');

button.onclick = function() {
	var name = document.getElementById('appointment_name');
	var dept = document.getElementById('appointment_department');
	var email = document.getElementById('appointment_email');
	var mobile = document.getElementById('phone');
	var time = document.getElementById('appointment_time');
	var date = document.getElementById('appointment_date');
  
  	var url="http://localhost:8080/appointment/add"
 
  function processRequest(e) {
    if (reqForRoom.readyState == 4) {
        // time to partay!!!
        console.log(reqForRoom.response);
      }
  }
  if(reqForRoom.readyState === XMLHttpRequest.DONE){
    var data = JSON.parse(reqForRoom.response);
      console.log(data);
      var rooMenu=JSON.parse(data.roomMenu);
      console.log(roomMenu)
  }
  
    

  /*var finUrl='http://localhost:8080/rooms/update';
  var json="{"roomId":,"bedId":"", "roomType":"","patientId":patientId,"availability":"No"}";
  var xhr = new XMLHttpRequest();
  xhr.open("POST",finUrl,true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(json);
  req.open('POST', finUrl, true);
    if (xhr.status === 201) {
      const data = JSON.parse(req.responseText);
      let opt1;
      for (let i = 0; i < data.length; i++) {
          opt1 = document.createElement('option');
          console.log(data[i])
          opt1.text = data[i].firstName+' '+data[i].lastName;
          opt1.value=data[i].patientId;
        pat.add(opt1);
     
      }
   } else {
    // Reached the server, but it returned an error
  }   */
}