let doc = document.getElementById('doctor-down');
console.log(doc)
doc.length = 0;

let opt = document.createElement('option');
opt.text = 'Select Doctor';

doc.add(opt);
doc.selectedIndex = 0;

const docurl = 'http://localhost:8080/doctors/all';

const req = new XMLHttpRequest();
req.open('GET', docurl, true);

req.onload = function() {
  if (req.status === 200) {
    const data = JSON.parse(req.responseText);
    let opt1;
    for (let i = 0; i < data.length; i++) {
      opt1 = document.createElement('option');
      console.log(data[i])
      opt1.text = data[i].name;
      opt1.value=data[i].doctor_id;
	  doc.add(opt1);
     
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

req.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + docurl);
};

req.send(); 